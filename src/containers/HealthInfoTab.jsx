import React, { Component } from 'react';
import {PanelGroup, Panel} from 'react-bootstrap';

export default class healthInfoTab extends Component {
    render(){
        return(
         <div className="healthdiv">
                <PanelGroup accordion id="accordion">
                <Panel eventKey="1">
                        <Panel.Heading>
                        <Panel.Title toggle>Hospital Info</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>
                                    <div>
                                            <dl className="dl-horizontal">

                                            <dt>Hospital :</dt>
                                            <dd>{this.props.details.hospital}</dd>
                                                <dt>Last Visit Date :</dt>
                                            <dd>{this.props.details.LastVisitDate}</dd>

                                            <dt>Last Visit Class :</dt>
                                            <dd>{this.props.details.LastVisitClassification}</dd>

                                            
                                            </dl>
                                    </div>           
                        </Panel.Body>
                    </Panel>
                    <Panel eventKey="2">
                        <Panel.Heading>
                        <Panel.Title toggle>Allergies</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>
                                    <div>
                                        {this.props.details.Allergies}
                                    </div>           
                        </Panel.Body>
                    </Panel>
                    </PanelGroup>
         </div>
            
        );
    }
}


