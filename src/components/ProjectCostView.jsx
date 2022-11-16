import React, { Component } from 'react';
import ProjectCostDetails from './ProjectCostDetails';



class ProjectCostView extends Component{

  constructor(props){
    super(props);
    this.state = {
      costdata: [],
      budgetdata: [],
      isLoading: false 
    }
  }

  async fetchProjectCost (pnumber){
    this.setState({isLoading: true});
    try {
      const options = { method: 'GET' };
      const first = await fetch("http://localhost:9000/projectcost?pnumber=" + pnumber, options);
      const response = await first.json();
      this.setState({costdata:response, isLoading: false});

      
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
    this.fetchProjectCost(sessionStorage.getItem("pnumber"));
    this.fetchProjectBudget(sessionStorage.getItem("pnumber"));
  }


  render(){

    return (
      <>
      <div>
          <ProjectCostDetails data2={this.state.budgetdata} data={this.state.costdata}/>
      </div>
      </>
    );
  }

  
}

export default ProjectCostView;