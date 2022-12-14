import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Image } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import logo from "../images/NT.png";
import "./Login.css";
import { withRouter } from "react-router-dom";

class NewProjectModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: false,
      isAdmin: false,
      projectname: "",
      projectrefnumber: "",
      province: "",
      sector: "",
      metro: "",
      hasMetro: false,
      district: "",
      local: "",
      pnumber: "",
      projectmanager: "",
    };
  }
  onChangeList = (event) => {
    this.setState({ sector: this.inputRef.value });
  };

  onChangeListProvince = (event) => {
    this.setState({ province: event.target.value });
  };

  onChangeListMetros = (event) => {
    this.setState({ metro: event.target.value });
  };

  onChangeListDistricts = (event) => {
    this.setState({ district: event.target.value });
  };

  onChangeListLocal = (event) => {
    this.setState({ local: event.target.value });
  };
  validateForm() {
    return this.state.province.length > 0;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

    handleSubmit = async (event) => {
      event.preventDefault();
      this.setState({ isLoading: true });
      sessionStorage.setItem("projectname", this.state.projectname);
      sessionStorage.setItem("province", this.state.province);

      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: '{"Name":"' + this.state.projectname + '","Province":"' + this.state.province + '","Department":"Water","Sector":"' + this.state.sector + '","ProjectType":"Test Project Type 1","Description":"test project","ScopeOfWork":"Test project scope","DeliveryMechanism":"Standard Project","ProjectLeader":"' + this.state.projectmanager + '","Comments":"project comments","Municipality":"' + this.state.district + '", "MetroMunicipality":"' + this.state.metro + '", "DistrictMunicipality":"' + this.state.district + '","ProjectRefNumber":"' + this.state.projectrefnumber + '"}',
      };

      await fetch("http://localhost:9000/createproject", options)
        .then((response) => response.json())
        .then((response) => {
          this.setState({pnumber: response});
          sessionStorage.setItem("pnumber", this.state.pnumber);
          console.log(response)})
        .catch((err) => console.error(err));

      this.setState({ isLoading: false });
      if(this.state.pnumber.length > 0){
        alert("Project successfully created with project number: " + this.state.pnumber);
        try {
          this.props.history.push({
            pathname: "/newproject",
            state: {
              projectname: this.state.projectname,
              province: this.state.province,
            },
          });
        } catch (e) {
          alert(e.message);
          this.setState({ isLoading: false });
        }
      }else{
        alert("Something went wrong, retry again");
      }
      
    };

  componentDidMount() {
    this.setState({ isLoading: true });
    console.log(sessionStorage.getItem("province"));
    sessionStorage.removeItem("projectname");
    sessionStorage.removeItem("province");
    sessionStorage.removeItem("pnumber");
    this.setState({ isLoading: false });
    //this.setState({province: sessionStorage.getItem("province")});
  }

  hasMetroCheck(province) {
    if (
      province === "KZN" ||
      province === "Free State" ||
      province === "Western Cape" ||
      province === "Eastern Cape" ||
      province === "Gauteng"
    ) {
      return true;
    }
    return false;
  }

  getMetroValue() {
    if (this.state.province === "KZN") {
      return this.kzn_metros();
    } else if (this.state.province === "Free State") {
      return this.free_state_metros();
    } else if (this.state.province === "Western Cape") {
      return this.western_cape_metros();
    } else if (this.state.province === "Eastern Cape") {
      return this.eastern_cape_metros();
    } else if (this.state.province === "Gauteng") {
      return this.gauteng_metros();
    } else {
      return "";
    }
  }

  getLocalValue() {
    if (this.state.district === "Alfred Nzo") {
      return this.alfred_local();
    } else if (this.state.district === "Amathole") {
      return this.amathole_local();
    } else if (this.state.district === "Chris Hani") {
      return this.chris_local();
    } else if (this.state.district === "Joe Gqabi") {
      return this.joe_local();
    } else if (this.state.district === "OR Tambo") {
      return this.OR_local();
    } else if (this.state.district === "Sarah Baartman") {
      return this.sarah_local();
    } else {
      return "";
    }
  }

  returnDistrict() {
    const dis = this.eastern_cape_districts();

    return (
      <FormGroup controlId="district" bsSize="large">
        <ControlLabel>District Municipality</ControlLabel>
        {dis}
      </FormGroup>
    );
  }

  returnMetros(value) {
    const metro = this.getMetroValue();

    return (
      <FormGroup controlId="province" bsSize="large">
        <ControlLabel>Metro Municipality</ControlLabel>
        {metro}
      </FormGroup>
    );
  }

  returnLocal() {
    const loc = this.getLocalValue();

    return (
      <FormGroup controlId="local" bsSize="large">
        <ControlLabel>Local Municipality</ControlLabel>
        {loc}
      </FormGroup>
    );
  }

  eastern_cape_districts() {
    return (
      <FormControl
        componentClass="select"
        placeholder="All"
        inputRef={(ref) => {
          this.inputRef = ref;
        }}
        onChange={this.onChangeListDistricts}
      >
        <option value="None">--select--</option>
        <option value="Alfred Nzo">Alfred Nzo District</option>
        <option value="Amathole">Amathole District</option>
        <option value="Chris Hani">Chris Hani District</option>
        <option value="Joe Gqabi">Joe Gqabi District</option>
        <option value="OR Tambo District Municipality">OR Tambo District</option>
        <option value="Sarah Baartman">Sarah Baartman District</option>
      </FormControl>
    );
  }

  /*Metros*/

  kzn_metros() {
    return (
      <FormControl
        componentClass="select"
        placeholder="All"
        inputRef={(ref) => {
          this.inputRef = ref;
        }}
        onChange={this.onChangeListMetros}
      >
        <option value="None">--select--</option>
        <option value="Ethekweni">Ethekweni Metropolitan</option>
      </FormControl>
    );
  }

  free_state_metros() {
    return (
      <FormControl
        componentClass="select"
        placeholder="All"
        inputRef={(ref) => {
          this.inputRef = ref;
        }}
        onChange={this.onChangeListMetros}
      >
        <option value="None">--select--</option>
        <option value="Mangaung">Mangaung Metropolitan</option>
      </FormControl>
    );
  }

  western_cape_metros() {
    return (
      <FormControl
        componentClass="select"
        placeholder="All"
        inputRef={(ref) => {
          this.inputRef = ref;
        }}
        onChange={this.onChangeListMetros}
      >
        <option value="None">--select--</option>
        <option value="City of Cape town">
          City of Cape town Metropolitan
        </option>
      </FormControl>
    );
  }

  eastern_cape_metros() {
    return (
      <FormControl
        componentClass="select"
        placeholder="All"
        inputRef={(ref) => {
          this.inputRef = ref;
        }}
        onChange={this.onChangeListMetros}
      >
        <option value="None">--select--</option>
        <option value="Buffalo City">Buffalo City Metropolitan</option>
        <option value="Nelson Mandela Bay Metropolitan">
          Nelson Mandela Bay Metropolitan
        </option>
      </FormControl>
    );
  }

  gauteng_metros() {
    return (
      <FormControl
        componentClass="select"
        placeholder="All"
        inputRef={(ref) => {
          this.inputRef = ref;
        }}
        onChange={this.onChangeListMetros}
      >
        <option value="None">--select--</option>
        <option value="City of Ekurhuleni">
          City of Ekurhuleni Metropolitan
        </option>
        <option value="City of Johannesburg">
          City of Johannesburg Metropolitan
        </option>
        <option value="City of Tshwane">City of Tshwane Metropolitan</option>
      </FormControl>
    );
  }

  /*local*/

  alfred_local() {
    return (
      <FormControl
        componentClass="select"
        placeholder="All"
        inputRef={(ref) => {
          this.inputRef = ref;
        }}
        onChange={this.onChangeListLocal}
      >
        <option value="None">--select--</option>
        <option value="Matatiele">Matatiele Local</option>
        <option value="Ntabankulu">Ntabankulu Local</option>
        <option value="Umzimvubu">Umzimvubu Local</option>
        <option value="Winnie Madikizela-Mandela">
          Winnie Madikizela-Mandela Local
        </option>
      </FormControl>
    );
  }

  amathole_local() {
    return (
      <FormControl
        componentClass="select"
        placeholder="All"
        inputRef={(ref) => {
          this.inputRef = ref;
        }}
        onChange={this.onChangeListLocal}
      >
        <option value="None">--select--</option>
        <option value="Amahlathi">Amahlathi Local</option>
        <option value="Great Kei">Great Kei Local</option>
        <option value="Mbhashe">Mbhashe Local</option>
        <option value="Mnquma">Mnquma Local</option>
        <option value="Ngqushwa">Ngqushwa Local</option>
        <option value="Raymond Mhlaba">Raymond Mhlaba Local</option>
      </FormControl>
    );
  }

  chris_local() {
    return (
      <FormControl
        componentClass="select"
        placeholder="All"
        inputRef={(ref) => {
          this.inputRef = ref;
        }}
        onChange={this.onChangeListLocal}
      >
        <option value="None">--select--</option>
        <option value="Emalahleni">Emalahleni Local</option>
        <option value="Engcobo">Engcobo Local</option>
        <option value="Enoch Mgijima">Enoch Mgijima Local</option>
        <option value="Intsika Yethu">Intsika Yethu Local</option>
        <option value="Inxuba Yethemba">Inxuba Yethemba Local</option>
        <option value="Sakhisizwe">Sakhisizwe Local</option>
      </FormControl>
    );
  }

  joe_local() {
    return (
      <FormControl
        componentClass="select"
        placeholder="All"
        inputRef={(ref) => {
          this.inputRef = ref;
        }}
        onChange={this.onChangeListLocal}
      >
        <option value="None">--select--</option>
        <option value="Elundini">Elundini Local</option>
        <option value="Sengu">Sengu Local</option>
        <option value="Walter Sisulu">Walter Sisulu Local</option>
      </FormControl>
    );
  }

  OR_local() {
    return (
      <FormControl
        componentClass="select"
        placeholder="All"
        inputRef={(ref) => {
          this.inputRef = ref;
        }}
        onChange={this.onChangeListLocal}
      >
        <option value="None">--select--</option>
        <option value="Ingquza Hill">Ingquza Hill Local</option>
        <option value="King Sabata Dalidyebo">
          King Sabata Dalidyebo Local
        </option>
        <option value="Mhlontlo">Mhlontlo Local</option>
        <option value="Nyandeni">Nyandeni Local</option>
        <option value="Port St Johns">Port St Johns Local</option>
      </FormControl>
    );
  }

  sarah_local() {
    return (
      <FormControl
        componentClass="select"
        placeholder="All"
        inputRef={(ref) => {
          this.inputRef = ref;
        }}
        onChange={this.onChangeListLocal}
      >
        <option value="None">--select--</option>
        <option value="Blue Crane Route">Blue Crane Route Local</option>
        <option value="Dr Beyers Naude">Dr Beyers Naude Local</option>
        <option value="Kouga">Kouga Local</option>
        <option value="Koukamma">Koukamma Local</option>
        <option value="Makana">Makana Local</option>
        <option value="Ndlambe">Ndlambe Local</option>
        <option value="Sundays River Valley">Sundays River Valley Local</option>
      </FormControl>
    );
  }

  render() {
    const disMetro = this.hasMetroCheck(this.state.province)
      ? this.returnMetros()
      : "";
    const disDistrict =
      this.state.metro === "Nelson Mandela Bay Metropolitan" ? this.returnDistrict() : "";
    const munic = this.state.district.length > 0 ? this.getLocalValue() : "";

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
          <FormGroup controlId="projectrefnumber" bsSize="large">
            <ControlLabel>Project Ref Number</ControlLabel>
            <FormControl
              autoFocus
              type="projectrefnumber"
              value={this.state.projectrefnumber}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="province" bsSize="large">
            <ControlLabel>Province</ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="All"
              inputRef={(ref) => {
                this.inputRef = ref;
              }}
              onChange={this.onChangeListProvince}
            >
              <option value="None">--select--</option>
              <option value="Limpopo">Limpopo</option>
              <option value="KZN">Kwazulu-Natal</option>
              <option value="Free State">Free State</option>
              <option value="Western Cape">Western Cape</option>
              <option value="Eastern Cape">Eastern Cape</option>
              <option value="Gauteng">Gauteng</option>
              <option value="Mpumalanga">Mpumalanga</option>
              <option value="Northen Cape">Northen Cape</option>
              <option value="North West">North West</option>
            </FormControl>
          </FormGroup>
          {disMetro}
          {disDistrict}
          {munic}
          <FormGroup controlId="formControlsSelect2" bsSize="large">
            <ControlLabel>Sector</ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="All"
              inputRef={(ref) => {
                this.inputRef = ref;
              }}
              onChange={this.onChangeList}
            >
              <option value="None">--select--</option>
              <option value="health">health</option>
              <option value="Community & Social Services">
                Community & Social Services
              </option>
              <option value="Housing">Housing</option>
              <option value="Public Safety">Public Safety</option>
              <option value="Sports & Recreation">Sports & Recreation</option>
              <option value="Environmental Protection">
                Environmental Protection
              </option>
              <option value="Waste Water Management">
                Waste Water Management
              </option>
              <option value="Roads">Road Transport</option>
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
