import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Image } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import logo from '../images/NT.png';
import axios from "axios";
import "./Login.css";
import { withRouter } from "react-router-dom";

class NewProjectModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
        isLoading: false,
        isAdmin : false,
        projectname: "",
        province: "", 
        sector: "", 
        projectmanager: ""

    };
  }
  onChangeList = (event) => {
    this.setState({sector: this.inputRef.value});
  }

  validateForm() {
    return this.state.province.length > 0;
    
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    sessionStorage.setItem("projectname", this.state.projectname);
    sessionStorage.setItem("province", this.state.province);
    
    try {
        this.props.history.push({
            pathname: '/newproject',
            state: { 
              projectname : this.state.projectname,
              province: this.state.province}
          });
    } catch (e) {
      alert(e.message);
      this.setState({ isLoading: false });
    }
  }

  componentDidMount(){
    this.setState({isLoading: true});
    console.log(sessionStorage.getItem("province"));
    sessionStorage.removeItem("projectname");
    sessionStorage.removeItem("province");
    this.setState({isLoading: false});
        //this.setState({province: sessionStorage.getItem("province")});
  }
  

  render() {
    return (
      <div className="Login">
          <Image className="center" src={logo} responsive />
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="projectname" bsSize="large">
            <ControlLabel>Project Name</ControlLabel>
            <FormControl
              autoFocus
              type="projectname"
              value={this.state.projectname}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="province" bsSize="large">
            <ControlLabel>Province</ControlLabel>
            <FormControl
              value={this.state.province}
              onChange={this.handleChange}
              type="province"
            />
          </FormGroup>
          <FormGroup controlId="formControlsSelect2" bsSize="large">
            <ControlLabel>Sector</ControlLabel>
            <FormControl componentClass="select" placeholder="All" inputRef={(ref) => {this.inputRef = ref}}
                 onChange={this.onChangeList}>
                <option value="None">--select--</option>
                <option value="health">health</option>
                <option value="Community & Social Services">Community & Social Services</option>
                <option value="Housing">Housing</option>
                <option value="Public Safety">Public Safety</option>
                <option value="Sports & Recreation">Sports & Recreation</option>
                <option value="Environmental Protection">Environmental Protection</option>
                <option value="Waste Water Management">Waste Water Management</option>
                <option value="Road Transport">Road Transport</option>
                <option value="Water Management">Water Management</option>
                <option value="Electricity">Electricity</option>
                <option value="Other">Other</option>
            </FormControl>
            </FormGroup>
          <FormGroup controlId="projectmanager" bsSize="large">
            <ControlLabel>Project Manager</ControlLabel>
            <FormControl
              value={this.state.projectmanager}
              onChange={this.handleChange}
              type="projectmanager"
            />
          </FormGroup>
          <LoaderButton
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Save"
            loadingText="Saving …"
            />
        </form>
      </div>
    );
  }
}

export default withRouter(NewProjectModal);