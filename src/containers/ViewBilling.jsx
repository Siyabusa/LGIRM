import React, { Component } from 'react'
import { FormGroup, FormControl, ControlLabel, Radio, Col, Image} from "react-bootstrap";
import "./ViewBilling.css";
import logo from '../images/invoice.png';
import LoaderButton from "../components/LoaderButton";
import ViewBillingTable from '../components/ViewBillingTable';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class ViewBilling extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            isLoading: false,
            data : [],
            medicalData : [],
            patientData : [],
          hospital: "All",
          patientIdchecked: true,
          value: undefined
        };
      }

      onChangeList = (event) => {
        this.setState({hospital: this.inputRef.value});
      }
    
      getSearchType(){ 
        
        if(this.state.patientIdchecked){
          return "patient"
        }else{
          return "Id"
        }
      }
      validateForm() {
        return true;
      }

      onSearchChangeSetPatient = e => {
        this.setState({
          patientIdchecked: true
         });
        }
        onSearchChangeSetID = e => {
            this.setState({
              patientIdchecked: false
             });
          }

          handleChange = event => {
            this.setState({
              value: event.target.value
            });
          }

          notify = (message) => toast.info(message, {
            position: toast.POSITION.BOTTOM_CENTER
          });

          //execute when the go button is pushed to search
          handleSubmit = async event => {
                event.preventDefault();
                this.setState({isLoading : true, data : [] });
                if(this.state.patientIdchecked){
                  var hosp = this.state.hospital.concat(' ','Hospital');
                    this.getBillingByPatientID(this.state.value, hosp);
                }else{
                  this.getBillingByRSAID(this.state.value);
                }
          }
          // call rest service to fetch billing data by patientID and hospital name
          async getBillingByPatientID(value, varHospital){
            
            var url = `http://10.32.60.74:7004/gdoh-sanbs-service/getSanbsBillingRS/getsanbsbilling?PatientID=${value}&Hospital=${varHospital}`
            try{
             var req = await fetch(url,
               {
                 mode : 'cors',
                 method : 'GET',
                 headers : {
                   'accept': 'application/json',
                   'Content-Type' : 'application/json',
                   'Connection': 'Keep-Alive'
                 }
               });
           var response = await req.json();
           if(req.status === 200){
               if(response.GetSanbsBillingResponseList.GetSanbsBillingRes != null){
                 const data = response.GetSanbsBillingResponseList.GetSanbsBillingRes.map(cur => {
                   return (
                     {
                       MessageID : cur.MedicalResponse.MessageID,
                       Patient_Name : cur.MedicalResponse.Patient_Name,
                       Product : cur.MedicalResponse.Product,
                       Date_Of_Requisition : cur.MedicalResponse.Date_Of_Requisition,
                       MedicalData : cur.MedicalResponse,
                       BillingData : cur.BillingResponse
                     }
                   );
                 })
                 this.setState({data: data, isLoading: false});
 
               }else{
                 this.setState({isLoading: false })
                 this.notify('Sorry, no data found.');
               }
           }else{
             this.setState({isLoading: false })
           }
           
            }catch(err){
             this.setState({isLoading: false })
            }
           }

          async getBillingByRSAID(value){
            
           var url = `http://10.32.60.74:7004/gdoh-sanbs-service/getSanbsBillingIDRS/rsa?RSA_ID=${value}`
           try{
            var req = await fetch(url,
              {
                mode : 'cors',
                method : 'GET',
                headers : {
                  'accept': 'application/json',
                  'Content-Type' : 'application/json',
                  'Connection': 'Keep-Alive'
                }
              });
          var response = await req.json();
          if(req.status === 200){
              if(response.GetSanbsBillingResponseList.GetSanbsBillingRes != null){
                const data = response.GetSanbsBillingResponseList.GetSanbsBillingRes.map(cur => {
                  return (
                    {
                      MessageID : cur.MedicalResponse.MessageID,
                      Patient_Name : cur.MedicalResponse.Patient_Name,
                      Product : cur.MedicalResponse.Product,
                      Date_Of_Requisition : cur.MedicalResponse.Date_Of_Requisition,
                      MedicalData : cur.MedicalResponse,
                      BillingData : cur.BillingResponse
                    }
                  );
                })
                this.setState({data: data, isLoading: false});

              }else{
                this.setState({isLoading: false })
                this.notify('Sorry, no data found.');
              }
          }else{
            this.setState({isLoading: false })
            console.log(response)
          }
          
           }catch(err){
            this.setState({isLoading: false })
           }
          }

          renderPatientID = () => {
              return(
                <form>
                    <FormGroup controlId="formControlsSelect2" bsSize="large">
                    <ControlLabel>Hospital</ControlLabel>
                    <FormControl componentClass="select" placeholder="All" inputRef={(ref) => {this.inputRef = ref}}
                        onChange={this.onChangeList}>
                        <option value="All">All</option>
                        <option value="Bheki Mlangeni">Bheki Mlangeni</option>
                        <option value="Carletonville">Carletonville</option>
                        <option value="Charlotte Maxeke">Charlotte Maxeke</option>
                        <option value="Chris Hani Baragwanath">Chris Hani Baragwanath</option>
                        <option value="Cullinan">Cullinan</option>
                        <option value="Dr George Mukhari">Dr George Mukhari</option>
                        <option value="Edenvale">Edenvale</option>
                        <option value="Heidelberg">Heidelberg</option>
                        <option value="Helen Joseph">Helen Joseph</option>
                        <option value="Jubilee">Jubilee</option>
                        <option value="Fare East Rand">Fare East Rand</option>
                        <option value="Germiston">Germiston</option>
                        <option value="Kalafong">Kalafong</option>
                        <option value="Kopanong">Kopanong</option>
                        <option value="Leratong">Leratong</option>
                        <option value="Mamelodi">Mamelodi</option>
                        <option value="Medunsa">Medunsa</option>
                        <option value="Odi">Odi</option>
                        <option value="Oral Dental">Oral Dental</option>
                        <option value="Pholosong">Pholosong</option>
                        <option value="Pretoria West">Pretoria West</option>
                        <option value="Rahima Moosa">Rahima Moosa</option>
                        <option value="Sizwe">Sizwe</option>
                        <option value="South Rand">South Rand</option>
                        <option value="Sterkfontein">Sterkfontein</option>
                        <option value="Steve Biko">Steve Biko</option>
                        <option value="Tambo">Tambo</option>
                        <option value="Tara">Tara</option>
                        <option value="Tembisa">Tembisa</option>
                        <option value="Thelle Mogoerane">Thelle Mogoerane</option>
                        <option value="Tshwane">Tshwane</option>
                        <option value="Tshwane Rehab">Tshwane Rehab</option>
                        <option value="Weskoppies">Weskoppies</option>
                        <option value="Wits Oral">Wits Oral</option>
                        <option value="Yusuf Dadoo">Yusuf Dadoo</option>
        
                    </FormControl>
                    </FormGroup>
                    <FormGroup controlId="patientId" bsSize="large">
                    <ControlLabel>Patient ID</ControlLabel>
                    <FormControl
                    autoFocus
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange.bind(this)}
                    />
                </FormGroup>
                </form>
                );
          }
    

    render(){
        return (
          <div className="main">
            <Image className="center logoImage" src={logo} responsive />
              <div className="ViewBilling row">
                <div className="viewbilldiv col-sm-12 offset-sm-8">
                  <Col sm={4}>
                  <form onSubmit={this.handleSubmit}>
                      <FormGroup>
                      <Radio name="radioGroup" inline 
                      defaultChecked
                      onClick={this.onSearchChangeSetPatient.bind(this)}>
                      Patient Identifier
                      </Radio>{' '}
                      <Radio name="radioGroup" inline onClick={this.onSearchChangeSetID.bind(this)}>
                      Identity Number
                      </Radio>{' '}
                      </FormGroup>
                      {this.state.patientIdchecked ? this.renderPatientID() : <FormGroup controlId="Id" bsSize="large">
                      <ControlLabel>Id Number</ControlLabel>
                      <FormControl
                      value={this.state.value}
                      onChange={this.handleChange.bind(this)}
                      type="number"
                      />
                      </FormGroup>}
                          <LoaderButton
                      block
                      bsSize="large"
                      disabled={!this.validateForm()}
                      type="submit"
                      isLoading={this.state.isLoading}
                      text="Go"
                      loadingText="searching…"
                      />
                      </form>
                  </Col>
                  <Col sm={8}>
                      <ViewBillingTable data = {this.state.data}/>
                      <ToastContainer autoClose={2000} />
                  </Col>
                </div>
            </div>
          </div>
        
        );
    }
}