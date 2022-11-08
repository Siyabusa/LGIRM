import React, { Component } from 'react';
import Example from './ProjectViewTabView';

class ProjectView extends Component{

  constructor(props){
    super(props);
    this.state = {
      selected : ""
    };
  }

  componentDidMount(){
    const {selected} = this.props.location.state;
    const {Number} = selected;
    this.setState({selected: selected});
  }

  
  render(){

  
    return (
    
      <>
      <h2>{this.state.selected.Name} ({this.state.selected.Number}) </h2>
      <Example selected ={this.state.selected}/>
      </>
    );
  }
}

export default ProjectView;
