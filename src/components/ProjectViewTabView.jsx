import React, { Component } from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import ProjectDetailsView from './ProjectDetailsView';
import ProjectContractorView from './ProjectContractorView';
import JobCreationView from './JobCreationView';
import ProjectCostView from './ProjectCostView';
import ProjectEstimateView from './ProjectEstimatesView';
import ProjectCashflowView from './ProjectCashflowView';
import Dashboard from '../containers/Dashboard';
import LocationView from './LocationView';

export default class ProjectViewTabView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            locationData: [],
            isLoading: false
        };
    }

    async fetchLocation(pnumber) {
        try {
            const options = { method: 'GET' };
            const first = await fetch("http://" + URL + ":9000/locationbypnumber?pnumber=" + pnumber, options);
            const response = await first.json();
            this.setState({ locationData: response[0] });

        } catch (err) {
            console.log(err);

        }
    }


    async componentDidMount() {

        this.setState({isLoading: true});
        this.fetchLocation(sessionStorage.getItem("pnumber"));
        this.setState({isLoading: false});
    }

    render(){

        return(
            <Tabs defaultActiveKey={1} id="maintabview">
                <Tab eventKey={1} title="Dashboard">
                    <Dashboard details = {this.props}/>
                </Tab>
                <Tab eventKey={2} title="Location">
                <LocationView details = {this.props}/>
                </Tab>
                <Tab eventKey={3} title="Details">
                    <ProjectDetailsView details = {this.props}/>
                </Tab>

                <Tab eventKey={4} title="Contractor">
                    <ProjectContractorView details = {this.props}/>
                </Tab>
                
                <Tab eventKey={5} title="TimeFrames">
                    <h2>Time Frames</h2>
                </Tab>

                <Tab eventKey={6} title="Project Cost">
                    <ProjectCostView/>
                </Tab>

                

                <Tab eventKey={7} title="Project Estimates">
                    <ProjectEstimateView/>
                </Tab>
                <Tab eventKey={8} title="CashFlows">
                    <ProjectCashflowView/>
                </Tab>

                <Tab eventKey={9} title="Job Creation">
                 <JobCreationView/>
                </Tab>
                <Tab eventKey={10} title="Documents">
                    <h2>Documents</h2>
                </Tab>
                <Tab eventKey={11} title="Comments">
                    <h2>Comments</h2>
                </Tab>

                <Tab eventKey={12} title="Site Visits">
                    <h2>Site Visits</h2>
                </Tab>
                
            </Tabs>
        );
    }
}