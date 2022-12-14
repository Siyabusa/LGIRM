import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Image } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import logo from '../images/NT.png';
import "./Login.css";
import { withRouter } from "react-router-dom";

class EditContractorModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
        isLoading: false,
        isAdmin : false,
        projectname: "",
        province: "", 
        sector: "",
        metro:"", 
        hasMetro: false,
        district: "",
        local: "",
        projectmanager: ""

    };
  }
  onChangeList = (event) => {
    this.setState({sector: this.inputRef.value});
  }

  onChangeListProvince = (event) => {
    this.setState({province: event.target.value});
  }

  onChangeListMetros = (event) => {
    this.setState({metro: event.target.value});
  }

  onChangeListDistricts = (event) => {
    this.setState({district: event.target.value});
  }

  onChangeListLocal = (event) => {
    this.setState({local: event.target.value});
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
          
        <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="role" bsSize="large">
            <ControlLabel>Role</ControlLabel>
            <FormControl componentClass="select" placeholder="All" inputRef={(ref) => {this.inputRef = ref}}
                 onChange={this.onChangeListProvince}>
                <option value="None">--select--</option>
            </FormControl>
          </FormGroup>
          <FormGroup controlId="organization" bsSize="large">
            <ControlLabel>Organization</ControlLabel>
            <FormControl
              autoFocus
              type="organization"
              value={this.state.projectname}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="cidbgrading" bsSize="large">
            <ControlLabel>CIDB Grading</ControlLabel>
            <FormControl componentClass="select" placeholder="All" inputRef={(ref) => {this.inputRef = ref}}
                 onChange={this.onChangeListProvince}>
                <option value="None">--select--</option>
            </FormControl>
          </FormGroup>

          <FormGroup controlId="contactname" bsSize="large">
            <ControlLabel>Contact Name</ControlLabel>
            <FormControl
              autoFocus
              type="contactname"
              value={this.state.projectname}
              onChange={this.handleChange}
            />
          </FormGroup>
        
          
          <FormGroup controlId="phone" bsSize="large">
            <ControlLabel>Phone</ControlLabel>
            <FormControl
              value={this.state.projectmanager}
              onChange={this.handleChange}
              type="number"
            />
          </FormGroup>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              value={this.state.projectmanager}
              onChange={this.handleChange}
              type="email"
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

export default withRouter(EditContractorModal);