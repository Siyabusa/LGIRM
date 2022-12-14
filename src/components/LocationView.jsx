import React, { Component } from 'react';
import './LocationView.css';
import ProjectLocation from '../components/project/project-info/ProjectLocation';
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import { Button } from "react-bootstrap";

const URL = process.env.REACT_APP_URL;

class LocationView extends Component {


    constructor(props) {
        super(props);
        this.state = {
            locationData: [],
            contractorData: [],
            facilityname: "",
            facilitynumber: "",
            projectnumber: "",
            projectname : "",
            province:"",
            municipality: "",
            ward: "", 
            lat: "",
            lng: "",
            isLoading: false
        };
    }

    async fetchLocation(pnumber) {
        try {
            const options = { method: 'GET' };
            const first = await fetch("http://" + URL + ":9000/locationbypnumber?pnumber=" + pnumber, options);
            const response = await first.json();
            this.setState({ locationData: response[0] });

            const {FacilityName, FacilityNumber, Latitude, Longitude, Name, ProjectNumber, WardNumber} = response[0];
            this.setState({facilityname: FacilityName, facilitynumber : FacilityNumber, lat:Latitude, lng: Longitude, projectname: Name, projectnumber: ProjectNumber, ward: WardNumber, province: sessionStorage.getItem("province"), municipality: sessionStorage.getItem("municipality")});

        } catch (err) {
            console.log(err);

        }
    }

    async componentDidMount() {

        this.setState({isLoading: true});
        console.log("checking location view")
        this.fetchLocation(sessionStorage.getItem("pnumber"));
        this.setState({isLoading: false});
    }

    onChangeListWard = (event) => {
      this.setState({ ward: event.target.value });
    };

    handleChange = (event) => {
      this.setState({
        [event.target.id]: event.target.value,
      });
    };

    render() {
        const display = this.state.isLoading ? (<div>Loading....</div>) : ( <div className="grid">
         <div>
          <form>
          <FormGroup controlId="facilityname" bsSize="large">
            <ControlLabel>Facility Name</ControlLabel>
            <FormControl
              type="facilityname"
              value={this.state.facilityname}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="facilitynumber" bsSize="large">
            <ControlLabel>Facility No.</ControlLabel>
            <FormControl
              value={this.state.facilitynumber}
              onChange={this.handleChange}
              type="facilitynumber"
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
            <FormControl componentClass="select" readOnly="true" placeholder="All" inputRef={(ref) => {this.inputRef = ref}}
                 onChange={this.onChangeListWard}>
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
            <FormControl componentClass="select" readOnly="true" placeholder="All" inputRef={(ref) => {this.inputRef = ref}}
                 onChange={this.onChangeList}>
                 <option value="None">--select--</option>
                <option value="disctrict 2">Alfred Nzo District</option>
            </FormControl>
            </FormGroup>
          </form>
          
          <Button>Save</Button>
        </div>
        <div>
            <h3>Project Location</h3>
            <ProjectLocation details={this.state.locationData} />
            <div><TextField id="outlined-basic" value="" label="Latitude" variant="outlined" /><TextField id="outlined-basic" value="" label="Longitude" variant="outlined" /><Button>Load Coordinates</Button></div>
        </div>
        
       
    </div>);
        return (
            <>
               {display}
            </>
        );
    }


}

export default LocationView;