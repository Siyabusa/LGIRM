import React, { Component } from 'react'
import ContactDetailsTab from '../containers/ContactDetailsTab'
import PersonalDetailsTab from '../containers/PersonalDetailsTab'
import HealthInfoTab from '../containers/HealthInfoTab'
import { Tab, Tabs } from 'react-bootstrap';
 

export default class PatientTabView extends Component {
    render(){
        return(
            <Tabs defaultActiveKey={1} id="maintabview">
                <Tab eventKey={1} title="Personal Details">
                    <PersonalDetailsTab details={this.props.selected}/>
                </Tab>
                <Tab eventKey={2} title="Contact Details">
                    <ContactDetailsTab  details={this.props.selected.ContactDetails}/>
                </Tab>
                <Tab eventKey={3} title="Health Info">
                    <HealthInfoTab details = {this.props.selected} />
                </Tab>

            </Tabs>
        );
    }
}