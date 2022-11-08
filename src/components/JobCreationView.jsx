import React, { Component } from 'react';
import './ProjectDetailsView.css';
import JobCreationDetails from '../components/JobCreationDetails';


class JobCreationView extends Component{


  constructor(props){
    super(props);
    this.state = {
      data : [],
      isLoading: false
    }
  }

  async fetchJobCreation (pnumber){
    try {
      const options = { method: 'GET' };
      const first = await fetch("http://localhost:9000/jobcreationbypnumber?pnumber=" + pnumber, options);
      const response = await first.json();
      console.log(response);
      this.setState({data:response, isLoading: false});
    } catch (err) {
      console.log(err);

    }
  }

  async componentDidMount(){
    this.setState({isLoading:true});
    this.fetchJobCreation(sessionStorage.getItem("pnumber"));
  }

  

  render(){

    const display = this.state.isLoading ? (<div>Loading....</div>) : (<div>
      <h3 ClassName="center">Job Creation</h3>
      <JobCreationDetails data={this.state.data} />
    </div>);

    return (
      <>
        <div>{display}</div>
      </>
    );
  }
}

export default JobCreationView;