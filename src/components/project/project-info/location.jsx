import React, { Component } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import LocationFinder from "./locationFinder";
import { multistepcontext } from "../../../StepContext";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class LocationInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      projectname: "",
      province: "",
      projectnumber: "",
      facilityname: "",
      facilitynumber: "",
      municipality: "",
      ward: "",
      district: "",
      lat: undefined,
      longi: undefined, 
      finalLat: -25.940317
      , 
      finalLongi: 28.065454

    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    this.setState({
      projectname: sessionStorage.getItem("projectname"),
      province: sessionStorage.getItem("province"),
      municipality: sessionStorage.getItem("municipality"),
      projectnumber: sessionStorage.getItem("pnumber"),
      isLoading: false,
    });
  }

  getCordinates = () => {
    this.setState({finalLat: this.state.lat, finalLongi: this.state.longi});
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });

    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: '{"FacilityName":"' + this.state.facilityname + '","pNumber":"' + this.state.projectnumber + '","FacilityNumber":"' + this.state.facilitynumber + '","WardNumber":"' + this.state.ward + '","Municipality":"' + this.state.municipality + '","Latitude":"' + this.state.finalLat + '","Longitude":"' + this.state.finalLongi + '"}'
    };
    
    fetch('http://localhost:9000/createprojectlocation', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));

    this.setState({ isLoading: false });
    
    
  };

  onChangeListWard = (event) => {
    this.setState({ ward: event.target.value });
  };

  onChangeListDistrict = (event) => {
    this.setState({ district: event.target.value });
  };

  render() {
    return (
      <div className="Container">
        <div className="grid">
          <div>
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="projectname" bsSize="large">
                <ControlLabel>Project Name</ControlLabel>
                <FormControl
                  type="projectname"
                  value={this.state.projectname}
                  onChange={this.handleChange}
                  readOnly="true"
                />
              </FormGroup>
              <FormGroup controlId="province" bsSize="large">
                <ControlLabel>Province</ControlLabel>
                <FormControl
                  value={this.state.province}
                  onChange={this.handleChange}
                  type="province"
                  readOnly="true"
                />
              </FormGroup>
              
              <FormGroup controlId="projectnumber" bsSize="large">
                <ControlLabel>Project Number</ControlLabel>
                <FormControl
                  type="projectnumber"
                  value={this.state.projectnumber}
                  onChange={this.handleChange}
                  readOnly="true"
                />
              </FormGroup>
              <FormGroup controlId="facilityname" bsSize="large">
                <ControlLabel>Facility Name</ControlLabel>
                <FormControl
                  type="facilityname"
                  value={this.state.facilityname}
                  onChange={this.handleChange}
                 
                />
              </FormGroup>
              <FormGroup controlId="facilitynumber" bsSize="large">
                <ControlLabel>Facility Number</ControlLabel>
                <FormControl
                  type="facilitynumber"
                  value={this.state.facilitynumber}
                  onChange={this.handleChange}
                  
                />
              </FormGroup>
              <FormGroup controlId="municipality" bsSize="large">
                <ControlLabel>Local Municipality</ControlLabel>
                <FormControl
                  value={this.state.municipality}
                  onChange={this.handleChange}
                  type="municipality"
                  readOnly="true"
                />
              </FormGroup>
              <FormGroup controlId="ward" bsSize="large">
                <ControlLabel>Ward</ControlLabel>
                <FormControl
                  componentClass="select"
                  placeholder="All"
                  inputRef={(ref) => {
                    this.inputRef = ref;
                  }}
                  onChange={this.onChangeListWard}
                >
                  <option value="None">--select--</option>
                  <option value="1">Ward 1</option>
                  <option value="2">Ward 2</option>
                  <option value="3">Ward 3</option>
                  <option value="4">Ward 4</option>
                  <option value="5">Ward 5</option>
                  <option value="6">Ward 6</option>
                  <option value="7">Ward 7</option>
                  <option value="8">Ward 8</option>
                  <option value="9">Ward 9</option>
                  <option value="10">Ward 10</option>
                  <option value="11">Ward 11</option>
                  <option value="12">Ward 12</option>
                  <option value="13">Ward 13</option>
                  <option value="14">Ward 14</option>
                  <option value="15">Ward 15</option>
                  <option value="16">Ward 16</option>
                  <option value="17">Ward 17</option>
                  <option value="18">Ward 18</option>
                  <option value="19">Ward 19</option>
                  <option value="20">Ward 20</option>
                  <option value="21">Ward 21</option>
                  <option value="22">Ward 22</option>
                  <option value="23">Ward 23</option>
                  <option value="24">Ward 24</option>
                  <option value="25">Ward 25</option>
                </FormControl>
              </FormGroup>
              <FormGroup controlId="district" bsSize="large">
                <ControlLabel>District</ControlLabel>
                <FormControl
                  componentClass="select"
                  placeholder="All"
                  inputRef={(ref) => {
                    this.inputRef = ref;
                  }}
                  onChange={this.onChangeListDistrict}
                >
                  <option value="None">--select--</option>
                  <option value="disctrict 2">Alfred Nzo District</option>
                </FormControl>
              </FormGroup>
            </form>

            <Button onClick={this.handleSubmit}>Save</Button>
          </div>
          <div>
            <LocationFinder lat = {this.state.finalLat} longi={this.state.finalLongi}/>
            <div>
              <TextField
                id="lat"
                value={this.state.lat}
                label="Latitude"
                variant="outlined"
                onChange={this.handleChange}
                type="lat"
              />
              <TextField
                id="longi"
                value={this.state.longi}
                label="Longitude"
                variant="outlined"
                onChange={this.handleChange}
                type="longi"
              />
              <Button onClick={this.getCordinates}>Load Coordinates</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

 
export default LocationInput