import React, { Component } from 'react';
import ProjectEstimateDetails from './ProjectEstimatesDetails';

class ProjectEstimatesView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pe: [],
      ppe: [],
      cpe: [],
      isLoading: false
    }
  }

  async fetchEstimates(pnumber, estimatetype) {
    this.setState({ isLoading: true });
    try {
      const options = { method: 'GET' };
      const varURL = "http://localhost:9000/projectestimates?pnumber="+ pnumber +"&estimatetype=" + estimatetype;
      const first = await fetch(varURL, options);
      const response = await first.json();
      if (estimatetype === 'Project Expenditure') {
        console.log(response);
        this.setState({ pe: response});
      } else if (estimatetype === 'Project Projected Expenditure') {
        console.log(response);
        this.setState({ ppe: response});
      } else {
        console.log(response);
        this.setState({ cpe: response});
      }



    } catch (err) {
      console.log(err);

    }
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    this.fetchEstimates(sessionStorage.getItem("pnumber"), "Project Expenditure");
    this.fetchEstimates(sessionStorage.getItem("pnumber"), "Project Projected Expenditure");
    this.fetchEstimates(sessionStorage.getItem("pnumber"), "Contracted Projected Expenditure");
    this.setState({ isLoading: false });
  }



  render() {
    //console.log(this.state.pe);
    const display = this.state.isLoading ? <div>Loading......</div> : <ProjectEstimateDetails data={this.state.ppe} data1 = {this.state.cpe} data2 = {this.state.pe} />;
    return (
      <>
        <div>
          {display}
        </div>
      </>
    );
  }


}

export default ProjectEstimatesView;