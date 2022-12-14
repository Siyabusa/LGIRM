import React, { Component } from 'react';
import ProjectContractorDetails from './ProjectContractorDetails';

const URL = process.env.REACT_APP_URL;

class ProjectContractorView extends Component{

  constructor(props){
    super(props);
    this.state = {
      contractorData: [],
      budgetdata: [],
      isLoading: false 
    }
  }

  async fetchContractor(pnumber) {
    try {
        const options = { method: 'GET' };
        const first = await fetch("http://" + URL + ":9000/contractorbypnumber?pnumber=" + pnumber, options);
        const response = await first.json();
        this.setState({ contractorData: response, isLoading: false });
    } catch (err) {
        console.log(err);

    }
}

  async fetchProjectBudget (pnumber){
    this.setState({isLoading: true});
    try {
      const options = { method: 'GET' };
      const first = await fetch("http://localhost:9000/projectbudget?pnumber=" + pnumber, options);
      const response = await first.json();
      this.setState({budgetdata:response, isLoading: false});
    } catch (err) {
      console.log(err);

    }
  }

  async componentDidMount(){
    this.setState({isLoading:true});
    this.fetchContractor(sessionStorage.getItem("pnumber"));
  }


  render(){

    return (
      <>
      <div>
          <ProjectContractorDetails data2={this.state.budgetdata} data={this.state.contractorData}/>
      </div>
      </>
    );
  }

  
}

export default ProjectContractorView;