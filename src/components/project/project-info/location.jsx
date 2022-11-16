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
            <ControlLabel>Local Municipality</ControlLabel>
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
                <option value="20">Ward 1</option>
                <option value="22">Ward 2</option>
                <option value="25">Ward 3</option>
                <option value="60">Ward 4</option>
                <option value="20">Ward 5</option>
                <option value="22">Ward 6</option>
                <option value="25">Ward 7</option>
                <option value="60">Ward 8</option>
                <option value="20">Ward 9</option>
                <option value="22">Ward 10</option>
                <option value="25">Ward 11</option>
                <option value="60">Ward 12</option>
                <option value="20">Ward 13</option>
                <option value="22">Ward 14</option>
                <option value="25">Ward 15</option>
                <option value="60">Ward 16</option>
                <option value="20">Ward 17</option>
                <option value="22">Ward 18</option>
                <option value="25">Ward 19</option>
                <option value="60">Ward 20</option>
                <option value="20">Ward 21</option>
                <option value="22">Ward 22</option>
                <option value="25">Ward 23</option>
                <option value="60">Ward 24</option>
                <option value="60">Ward 25</option>
                
            </FormControl>
            </FormGroup>
            <FormGroup controlId="district" bsSize="large">
            <ControlLabel>District</ControlLabel>
            <FormControl componentClass="select" placeholder="All" inputRef={(ref) => {this.inputRef = ref}}
                 onChange={this.onChangeList}>
                 <option value="None">--select--</option>
                <option value="disctrict 2">Alfred Nzo District</option>
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

