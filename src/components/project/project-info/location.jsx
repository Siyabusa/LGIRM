import React, { Component } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import LocationFinder from "./locationFinder";
import { multistepcontext } from "../../../StepContext";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default class LocationInput extends Component{

  constructor(props) {
    super(props);

    this.state = {
      data: [],
        isLoading: false,
        projectname: "",
        province: "", 
        projectnumber: "",
        municipality: "",
        ward: "",
        district: ""

    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  componentDidMount() {
    this.setState({isLoading: true});

    this.setState({projectname: sessionStorage.getItem("projectname"), province: sessionStorage.getItem("province"), municipality: sessionStorage.getItem("municipality")});
  }


 
render() {

  console.log(this.props);
  return (
    <div className="Container">
      <div className="grid">
        <div>
          <form>
          <FormGroup controlId="projectname" bsSize="large">
            <ControlLabel>Project Name</ControlLabel>
            <FormControl
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
            Ï<FormGroup controlId="projectnumber" bsSize="large">
            <ControlLabel>Project Number</ControlLabel>
            <FormControl
              type="projectnumber"
              value={this.state.projectnumber}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="municipality" bsSize="large">
            <ControlLabel>Municipality</ControlLabel>
            <FormControl
              value={this.state.municipality}
              onChange={this.handleChange}
              type="municipality"
            />
          </FormGroup>
          <FormGroup controlId="ward" bsSize="large">
            <ControlLabel>Ward</ControlLabel>
            <FormControl componentClass="select" placeholder="All" inputRef={(ref) => {this.inputRef = ref}}
                 onChange={this.onChangeList}>
                <option value="None">--select--</option>
                <option value="20">20</option>
                <option value="22">22</option>
                <option value="25">25</option>
                <option value="60">60</option>
                
            </FormControl>
            </FormGroup>
            <FormGroup controlId="district" bsSize="large">
            <ControlLabel>District</ControlLabel>
            <FormControl componentClass="select" placeholder="All" inputRef={(ref) => {this.inputRef = ref}}
                 onChange={this.onChangeList}>
                 <option value="None">--select--</option>
                <option value="disctrict 2">disctrict 1</option>
                <option value="disctrict 2">disctrict 2</option>
                <option value="disctrict 3">disctrict 3</option>
                <option value="disctrict 4">disctrict 4</option>
            </FormControl>
            </FormGroup>
          </form>
          <Button>Save</Button>
        </div>
        <div>
          <LocationFinder />
        </div>
      </div>
    </div>
  );
}
  
}

