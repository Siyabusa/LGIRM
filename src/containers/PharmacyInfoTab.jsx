import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';


export default class PharmacyInfoTab extends Component {

    constructor(props){
        super(props);
        this.state = {
            data : []
        }
    }

    componentWillReceiveProps(nextProps){ 
        if(nextProps.details.Prescriptions !== undefined){
            var templist = [];
            templist = nextProps.details.Prescriptions[0].PrescriptionDetail;
            this.setState({data : templist});
        }else{
            this.setState({data : []})
        }
    }

    componentDidMount = async () => {
        if(this.props.details.Prescriptions !== undefined){
            var templist = [];
            templist = this.props.details.Prescriptions[0].PrescriptionDetail;
            this.setState({data : templist});
        }
    }

    render(){
        const columns = [{
            dataField: 'DateOfBirth',
            text: 'DateOfBirth'
          }, {
            dataField: 'Age',
            text: 'Age'
          }, {
            dataField: 'Gender',
            text: 'Gender',
            sort: true

          },{
            dataField: 'PatientFullNames',
            text: 'PatientFullNames'
          },
          {
            dataField: 'Language',
            text: 'Language'
          }, {
            dataField: 'PersonRace',
            text: 'PersonRace'
          }, {
            dataField: 'PrescriptionNumber',
            text: 'PrescriptionNumber',

            
          },{
            dataField: 'PrescriberName',
            text: 'PrescriberName'
          }, {
            dataField: 'DispenserName',
            text: 'DispenserName'
          }, {
            dataField: 'Medication',
            text: 'Medication',
            
            
          },{
            dataField: 'PackSizeValue',
            text: 'PackSizeValue'
          }, {
            dataField: 'MedicationCost',
            text: 'MedicationCost'
          }, {
            dataField: 'PrescriptionDate',
            text: 'PrescriptionDate',
            
          },{
            dataField: 'ClinicName',
            text: 'ClinicName',
          },
           {
            dataField: 'RepeatDate',
            text: 'RepeatDate',
            
          }, {
            dataField: 'Repeats',
            text: 'Repeats',
            
          }, {
            dataField: 'DemanderName',
            text: 'DemanderName',
            
          }, {
            dataField: 'FrmAdministration',
            text: 'FrmAdministration',
            
          }, {
            dataField: 'Hospital',
            text: 'Hospital',
            
          }
          ];
        return (

                <BootstrapTable 
                    striped
                    hover
                    keyField='PrescriptionNumber' 
                    data={ this.state.data } 
                    columns={ columns }/>
        );
    }
}