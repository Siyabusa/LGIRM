import React, { Component } from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import ProjectDetailsView from './ProjectDetailsView';
import JobCreationView from './JobCreationView';
import ProjectCostView from './ProjectCostView';
import ProjectEstimateView from './ProjectEstimatesView';
import ProjectCashflowView from './ProjectCashflowView';

export default class ProjectViewTabView extends Component {
    render(){

        return(
            <Tabs defaultActiveKey={1} id="maintabview">
                <Tab eventKey={1} title="Project details">
                    <ProjectDetailsView details = {this.props}/>
                </Tab>
                
                <Tab eventKey={2} title="Project Cost">
                    <ProjectCostView/>
                </Tab>
                <Tab eventKey={3} title="Project Estimates">
                    <ProjectEstimateView/>
                </Tab>
                <Tab eventKey={4} title="CashFlows">
                    <ProjectCashflowView/>
                </Tab>
                <Tab eventKey={5} title="Documents">
                    <h2>Documents</h2>
                </Tab>
                <Tab eventKey={6} title="Job Creation">
                 <JobCreationView/>
                </Tab>
            </Tabs>
        );
    }
}