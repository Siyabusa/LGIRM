import React, { Component } from 'react'
import {PanelGroup, Panel } from 'react-bootstrap';


export default class ContactDetailsTab extends Component{



    getResidentialAddress = (basedetails,type) => {
        if(basedetails === undefined){
            return null
        }else if (type==='patient'){
            return (

                <div className="addrdiv">
                    <address>
                        {basedetails.ResidentialAddress.Line1 === "" || basedetails.ResidentialAddress.Line1 === undefined ? null   : basedetails.ResidentialAddress.Line1} {basedetails.ResidentialAddress.Line1 === "" || basedetails.ResidentialAddress.Line1 === undefined ? null : <br/>}
                        {basedetails.ResidentialAddress.Line2 === "" || basedetails.ResidentialAddress.Line2 === undefined ? null : basedetails.ResidentialAddress.Line2} {basedetails.ResidentialAddress.Line2 === "" || basedetails.ResidentialAddress.Line2 === undefined ? null : <br/>}
                        {basedetails.ResidentialAddress.line3 === "" || basedetails.ResidentialAddress.Line3 === undefined ? null : basedetails.ResidentialAddress.line3} {basedetails.ResidentialAddress.Line3 === "" || basedetails.ResidentialAddress.Line3 === undefined ? null : <br/>}
                        {basedetails.ResidentialAddress.Line4 === "" || basedetails.ResidentialAddress.Line4 === undefined ? null : basedetails.ResidentialAddress.Line4} {basedetails.ResidentialAddress.Line4 === "" || basedetails.ResidentialAddress.Line4 === undefined ? null : <br/>}
                        {basedetails.ResidentialAddress.PostalCode === "" || basedetails.ResidentialAddress.PostalCode === undefined ? null : basedetails.ResidentialAddress.PostalCode}
                    </address>
                </div>
            );
        }else{
            return (
                <div className="addrdiv">
                    <dl className="dl-horizontal">
                                {basedetails.NextOfKin.FirstName === "" ? null : <div>
                                <dt>Name:</dt>
                                <dd>{basedetails.NextOfKin.FirstName}</dd>
                                    </div>}

                                    {basedetails.NextOfKin.Relationship === "" ? null : <div>
                                <dt>Relationship:</dt>
                                <dd>{basedetails.NextOfKin.Relationship}</dd>
                                    </div>}

                                    {basedetails.NextOfKin.ContactDetails.TelephoneNumber === "" ? null : <div>
                                <dt>Telephone:</dt>
                                <dd>{basedetails.NextOfKin.ContactDetails.TelephoneNumber}</dd>
                                    </div>}
                    </dl>

                    <Panel>
                        <Panel.Heading>
                        <Panel.Title componentClass="h3">Residential Address</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                                <address>
                                {basedetails.NextOfKin.ContactDetails.ResidentialAddress.Line1 === "" || basedetails.NextOfKin.ContactDetails.ResidentialAddress.Line1 === undefined ? null :  basedetails.NextOfKin.ContactDetails.ResidentialAddress.Line1} {basedetails.NextOfKin.ContactDetails.ResidentialAddress.Line1 === "" || basedetails.NextOfKin.ContactDetails.ResidentialAddress.Line1 === undefined ? null : <br/>}
                                {basedetails.NextOfKin.ContactDetails.ResidentialAddress.Line2 === "" || basedetails.NextOfKin.ContactDetails.ResidentialAddress.Line2 === undefined? null :  basedetails.NextOfKin.ContactDetails.ResidentialAddress.Line2} {basedetails.NextOfKin.ContactDetails.ResidentialAddress.Line2 === "" || basedetails.NextOfKin.ContactDetails.ResidentialAddress.Line2 === undefined ? null : <br/>}
                                {basedetails.NextOfKin.ContactDetails.ResidentialAddress.Line3 === "" || basedetails.NextOfKin.ContactDetails.ResidentialAddress.Line3 === undefined ? null :  basedetails.NextOfKin.ContactDetails.ResidentialAddress.Line3} {basedetails.NextOfKin.ContactDetails.ResidentialAddress.Line3 === "" || basedetails.NextOfKin.ContactDetails.ResidentialAddress.Line3 === undefined ? null : <br/>}
                                {basedetails.NextOfKin.ContactDetails.ResidentialAddress.Line4 === "" || basedetails.NextOfKin.ContactDetails.ResidentialAddress.Line4 === undefined ? null :  basedetails.NextOfKin.ContactDetails.ResidentialAddress.Line4} {basedetails.NextOfKin.ContactDetails.ResidentialAddress.Line4 === "" || basedetails.NextOfKin.ContactDetails.ResidentialAddress.Line4 === undefined ? null : <br/>}
                                {basedetails.NextOfKin.ContactDetails.ResidentialAddress.PostalCode === "" || basedetails.NextOfKin.ContactDetails.ResidentialAddress.PostalCode === undefined ? null :  basedetails.NextOfKin.ContactDetails.ResidentialAddress.PostalCode}
                                </address>
                        </Panel.Body>
                    </Panel>
                    

                </div>

                
            );
        }

    }

    getPatientNextOfKinName = () => {

    }

    render(){
        console.log('testing the structure', this.props.details)
        const addr = this.getResidentialAddress(this.props.details, 'patient');
        const NKaddr = this.getResidentialAddress(this.props.details, 'nok');
        return(
         <div className="contactdetails">
             {this.props.details === undefined ? <div>No Data to display</div> : <PanelGroup accordion id="accordion">
                <Panel eventKey="1">
                    <Panel.Heading>
                    <Panel.Title toggle>Residential Address</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                                         
                     {addr} 
                                         
                    </Panel.Body>
                </Panel>
                <Panel eventKey="2">
                    <Panel.Heading>
                    <Panel.Title toggle>Next of Kin</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                        {NKaddr}
                    </Panel.Body>
                </Panel>
                </PanelGroup>}
         </div>
        );
    }
}