import React, { Component } from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import PersonalDetailsTabTable from '../components/PersonalDetailsTabTable'
import PharmacyInfoTab from '../containers/PharmacyInfoTab';
 

export default class PharmacyPatientTabView extends Component {
    render(){
        console.log(this.props)
        return(
            <Tabs defaultActiveKey={1} id="maintabview">
                <Tab eventKey={1}  title="Prescriptions">
                    <PharmacyInfoTab details={this.props.selected}/>
                </Tab>
                <Tab eventKey={2}  title="Person Details">
                    <PersonalDetailsTabTable details={this.props.demographics}/>
                </Tab>
            </Tabs>
        );
    }
}