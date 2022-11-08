import React, { Component } from 'react';
import './ProjectDetailsView.css';
import ProjectLocation from '../components/project/project-info/ProjectLocation';
import ProjectDetails from '../containers/PersonalDetailsTab';
import ContractorDetails from '../components/ContractorDetails';
import TimeFrameDetails from '../components/TimeFrameDetails';
import { stepIconClasses } from '@mui/material';

class ProjectDetailsView extends Component {


    constructor(props) {
        super(props);
        this.state = {
            locationData: [],
            contractorData: [],
            isLoading: false
        };
    }

    async fetchLocation(pnumber) {
        try {
            const options = { method: 'GET' };
            const first = await fetch("http://83.229.71.39:9000/locationbypnumber?pnumber=" + pnumber, options);
            const response = await first.json();
            this.setState({ locationData: response[0] });

        } catch (err) {
            console.log(err);

        }
    }

    async fetchContractor(pnumber) {
        try {
            const options = { method: 'GET' };
            const first = await fetch("http://83.229.71.39:9000/contractorbypnumber?pnumber=" + pnumber, options);
            const response = await first.json();
            this.setState({ contractorData: response[0] });
        } catch (err) {
            console.log(err);

        }
    }

    async componentDidMount() {

        this.setState({isLoading: true});
        this.fetchContractor(sessionStorage.getItem("pnumber"));
        this.fetchLocation(sessionStorage.getItem("pnumber"));
        this.setState({isLoading: false});
    }

    render() {
        const display = this.state.isLoading ? (<div>Loading....</div>) : ( <div className="grid">
        <div className="span-row-2">
            <h3>Project Details</h3>
            <ProjectDetails details={this.props} />

        </div>
        <div className="span-row-4">
            <h3>Project Location</h3>
            <ProjectLocation details={this.state.locationData} />
        </div>
        <div>
            <h3>Contractor Details</h3>
            <ContractorDetails details={this.state.contractorData} />
        </div>
        <div>
            <h3>TimeFrames</h3>
            <TimeFrameDetails details={[]} />
        </div>
    </div>);
        return (
            <>
               {display}
            </>
        );
    }


}

export default ProjectDetailsView;