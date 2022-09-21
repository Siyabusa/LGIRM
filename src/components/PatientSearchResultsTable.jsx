import React, { Component } from 'react'
import {Grid, Col, Row} from 'react-bootstrap'
import Loader from 'react-loader-spinner'
import './PatientSearchResultsTable.css'
import PharmacyPatientTab from '../components/PharmacyPatientTabView'
//import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import PatientTabView from '../components/PatientTabView';
import Switch from "react-switch";
import { ToastContainer, toast } from 'react-toastify';

export default class PatientSearchResultsTable extends Component{

  constructor(){
    super();
    this.state = {
      data : [],
      adata : [],
      ndata : [],
      demodata : [],
      isLoading : false,
      isSelected : "",
      isHospTab : false,
      sortType : 'hospital',
      checked: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  notify = (message) => toast.info(message, {
    position: toast.POSITION.BOTTOM_CENTER
  });



  queryForHIS  = async (value, hospital, searchtype) => {
    var url = '';

    if(this.props.datalist.system === 'SANBS'){
      url = `http://10.32.60.74:7004/PatientProfileSANBSRS/hospitalcodeIdentifier?Identifier=${value}&HospitalCode=${hospital}`
    }else{
      if(hospital==="All"){
        if(searchtype==='patient'){
          
          url = `http://10.32.60.74:7004/gdoh-patient-profile-service/PSQueryByIdentifierOnlyRS/patientidentifier?Identifier=${value}`
        }else{
          
          url = `http://10.32.60.74:7004/gdoh-patient-profile-service/PSQueryByIDNumberOnlyRS/patientidentifier?ID=${value}`
        }
         
      }else if(searchtype === 'patient'){
        
        url = `http://10.32.60.74:7004/gdoh-patient-profile-service/PatientIdentifierRS/patientidentifier?Identifier=${value}&Hospital=${hospital}`
      }else{
        
        url = `http://10.32.60.74:7004/gdoh-patient-profile-service/PatientIdRS/patientidhospital?ID=${value}&Hospital=${hospital}`
        
      }
    }
   

    try{
      var req = await fetch(url,
        {
          mode : 'cors',
          method : 'GET',
          headers : {
            'accept': 'application/json',
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Connection': 'Keep-Alive'
          }
        });
    var response = await req.json();
      if(req.status === 200){
        if(response.PatientProfile != null){
          
          const person = response.PatientProfile.map(cur => {
            return (
              {id : cur.Identifier["$"],
              ID : cur.ID["$"],
              Title : cur.Title,
                FirstName : cur.FirstName,
                LastName : cur.LastName,
                MiddleName : cur.MiddleName,
                Gender : cur.Gender,
                BirthDate : cur.BirthDate,
                BloodType : cur.BloodType, 
                Age : cur.Age,
                Race : cur.Race, 
                MaritalStatus : cur.MaritalStatus,
                Language : cur.Language,
                Religion : cur.Religion,
                Nationality : cur.Nationality,
                Allergies : cur.Allergies,
                hospital : cur["@hospital"],
                LastVisitDate : cur.LastVisitDate,
                LastVisitClassification : cur.LastVisitClassification,
                ContactDetails : {
                  ResidentialAddress: {
                    Line1: cur.ContactDetails.ResidentialAddress.Line1,
                    Line2: cur.ContactDetails.ResidentialAddress.Line2,
                    line3: cur.ContactDetails.ResidentialAddress.Line3,
                    Line4: cur.ContactDetails.ResidentialAddress.Line4,
                    PostalCode: cur.ContactDetails.ResidentialAddress.PostalCode
                  },
                  NextOfKin : cur.NextOfKin
                },
                HealthInfo : {
                  Allergies: cur.Allergies
                }
              }
            );
          });
          this.props.datalist.system === 'Pharmacy' ? this.setState({demodata : person, isLoading : false}) : this.setState({data : person, isLoading : false});
        }else{
          this.setState({isLoading : false});
          this.notify('Sorry, no data found.');
        }
    
        }else{
          this.setState({isLoading: false })
        }
          }catch(err){
            this.setState({isLoading: false })
          }
  }

  showBasedOnToggle = () => {
    this.state.checked ? this.setState({data : this.state.adata.concat(this.state.ndata)}) : this.setState({data : this.state.adata})
  }

  queryForPharmacy = async(value) => {
    this.setState({isLoading : true});
   var url = `http://10.32.60.74:7004/ViewPharmacyPatientDetailsProvABCSImpl/RXRestService/RX?ID=${value}`
   try{
    var req = await fetch(url,
      {
        mode : 'cors',
        method : 'GET',
        headers : {
          'accept': 'application/json',
          'Content-Type' : 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Connection': 'Keep-Alive'
        }
      });
  var response = await req.json();
  var avListTemp = [],noListTemp = [];
  if(req.status === 200){
    if(response.PatientProfile != null){
      response.PatientProfile.map(cur => {
        if(cur['@Pharmacy'] !== undefined){
           return cur['@ResponseStatus'] === 'success' ? avListTemp.push(cur) : noListTemp.push(cur);
        }else{
          return null
        }
        
      });
      const avList = avListTemp.map(x => {
        return (
          {
            ID : x.Prescriptions[0].PrescriptionDetail[0].PersonIDNumber,
            Pharmacy : x['@Pharmacy'],
            Prescriptions : x.Prescriptions
          }
        );
      })
      const noList = noListTemp.map(x => {
        return (
          {
            Pharmacy : x['@Pharmacy'],
            response : x['@ResponseStatus']
          }
        );
      })
      
      this.setState({data : avList, adata : avList, ndata : noList, isLoading : false});
    }else{
      this.setState({isLoading : false});
      this.notify('Sorry, no data found.');
    }

    }else{
      this.setState({isLoading: false })
    }
   }catch(err){
    this.setState({isLoading: false })
   }
  }

  async componentDidMount() {
    this.setState({isLoading: true});
    var searchtype, value, hospital,system;
    searchtype = this.props.datalist.searchtype;
    value = this.props.datalist.value;
    hospital = this.props.datalist.hospital;
    system = this.props.datalist.system;
    
    if(system === 'HIS' || system === 'SANBS'){
      this.queryForHIS(value, hospital, searchtype)
    }else if(system === 'Pharmacy'){
      this.queryForPharmacy(value)
      this.queryForHIS(value, hospital,'ID');
    }else{

    }
          
        
    
  }

  checkData = () => {
   return (
      <div><h3>No data found</h3></div> 
    ) 
  }

  getColValues = () => {
    const system = this.props.datalist.system;
    if(system === 'HIS' || system === 'SANBS'){
      return [{
        dataField: 'id',
        text: 'Patient ID'
      }, {
        dataField: 'ID',
        text: 'ID'
      }, {
        dataField: 'hospital',
        text: 'Hospital',
        sort: true
      }
      ];
    }else if(system === 'Pharmacy'){
      return [ {
        dataField: 'Pharmacy',
        text: 'Pharmacy',
        sort: true
      }
      ];
    }else{
      return null;
    }
  }

  getColValues2 = () => {
        return [{
          dataField: 'id',
          text: 'Patient ID'
        }, {
          dataField: 'ID',
          text: 'ID'
        }, {
          dataField: 'hospital',
          text: 'Hospital',
          sort: true
        }
        ];
  }

  getSwitch = (value) => {
    if(value === 'Pharmacy'){
      return (
        <label>
        <span> <strong>Show All</strong> </span>
        <Switch onChange={this.handleChange} checked={this.state.checked} />
      </label>
      );
    }else
    return null;
  }

  handleChange(checked) {
    this.setState({ checked });
    this.showBasedOnToggle();
  }

  renderViewForHIS = (columns,selectRow) => {
return (
  this.state.isLoading ? <Loader 
         type="Bars"
         color="#00BFFF"
         height="200" 
         width="200"
         className="center"
      />   : <Grid>
      <Row className="show-grid">
        <Col md={6} mdPush={6}>
        <div >
          <span/>
          <PatientTabView selected={this.state.isSelected}/>
            </div>
        </Col>
        <Col md={6} mdPull={6}>
          <BootstrapTable 
                    striped
                    hover
                    selectRow={ selectRow }
                    keyField= 'hospital' 
                    data={ this.state.data } 
                    columns={ columns }/>  
        </Col>
    </Row>
</Grid>
);
  }

  onclickHospital = (e) => {
    this.setState({isHospTab : true});
  }

  renderViewForPharmacy = (columns,displaySwitch,selectRow) => {
return (
  this.state.isLoading ? <Loader 
         type="Bars"
         color="#00BFFF"
         height="200" 
         width="200"
         className="center"
      />   : <Grid>
      <Row className="show-grid">
        <Col md={6} mdPush={6}>
        <div >
          <span/>
              <PharmacyPatientTab selected={this.state.isSelected} demographics = {this.state.demodata} />
            </div>
        </Col>
        <Col md={6} mdPull={6}>

        {displaySwitch}
            <BootstrapTable 
                      striped
                      hover
                      selectRow={ selectRow }
                      keyField= 'Pharmacy'
                      data={ this.state.data } 
                      columns={ columns }/> 

         
        </Col>
    </Row>
</Grid>
);
  }

  render(){
    const columns = this.getColValues();
    
    const displaySwitch = this.getSwitch(this.props.datalist.system);
    const selectRow = {
      mode: 'radio',
      clickToSelect : true,
      style: { backgroundColor: '#c8e6c9' },
      onSelect: (row, isSelect, rowIndex, e) => {
        this.setState({isSelected : row});
      },
      hideSelectColumn : false
    };

    const re = this.props.datalist.system === 'HIS' || this.props.datalist.system === 'SANBS' ? this.renderViewForHIS(columns,selectRow) : this.renderViewForPharmacy(columns, displaySwitch,selectRow)

    return(
      <div className="maindiv">
        
        {re}
        <ToastContainer autoClose={2000} />
      </div>
      
    );
  }


}
  