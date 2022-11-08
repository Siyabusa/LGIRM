import React, { Component } from 'react'
import BasicTabs from '../components/project/newproject-tab-layout';


export default class NewProject extends Component {

constructor(props){
  super(props);
  this.state = {
    isLoading: false
  }
}

  render() {
    return (
      <>
        <div className="container">
            <BasicTabs details = {this.props.location.state}/>
        </div>
      </>
    )
  }
}
