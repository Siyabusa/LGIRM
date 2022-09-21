
import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Image, Radio } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import { withRouter } from 'react-router-dom';
import logo from '../images/find.png';
import SANBSBilling from '../components/SANBSBilling'
import "./MainSearch.css";

class MainSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
        isLoading: false,
      hospital: "All",
      system : "HIS",
      patientIdchecked: true,
      value: undefined
    };
  }

  validateForm() {
    return true;
  }

  getSearchType(){ 
    
    if(this.state.patientIdchecked){
      return "patient"
    }else{
      return "Id"
    }
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    try {
      this.props.history.push({
        pathname: '/patientsearchresults',
        state: { 
          hospital : this.state.hospital,
        searchtype : this.getSearchType(),
        system : this.state.system,
      value :  this.state.value}
      });
    } catch (e) {
      alert(e.message);
      this.setState({ isLoading: false });
    }
  }

  onChangeList = (event) => {
    this.setState({hospital: this.inputRef.value});
  }
  onChangeListSystems = (event) => {
    this.setState({system: event.target.value});
  }

  onSearchChangeSetPatient = e => {
    this.setState({
      patientIdchecked: true
     });
    }
  onSearchChangeSetID = e => {
    this.setState({
      patientIdchecked: false
     });
  }

  RenderPharmaView = () => {
    
    return(
      <div className="pharmacy">
        <FormGroup controlId="Id" bsSize="large">
            <ControlLabel>Id Number</ControlLabel>
            <FormControl
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
              type="number"
            />
          </FormGroup>
      </div>
    );
  }

  RenderHISView = () => {
    
    return(
      <div className="HIS">
        <FormGroup controlId="formControlsSelect2" bsSize="large">
            <ControlLabel>Hospital</ControlLabel>
            <FormControl componentClass="select" placeholder="All" inputRef={(ref) => {this.inputRef = ref}}
                 onChange={this.onChangeList}>
                <option value="All">All</option>
                <option value="Bheki Mlangeni">Bheki Mlangeni</option>
                <option value="Carletonville">Carletonville</option>
                <option value="Charlotte Maxeke">Charlotte Maxeke</option>
                <option value="Chris Hani Baragwanath">Chris Hani Baragwanath</option>
                <option value="Cullinan">Cullinan</option>
                <option value="Dr George Mukhari">Dr George Mukhari</option>
                <option value="Edenvale">Edenvale</option>
                <option value="Heidelberg">Heidelberg</option>
                <option value="Helen Joseph">Helen Joseph</option>
                <option value="Jubilee">Jubilee</option>
                <option value="Fare East Rand">Fare East Rand</option>
                <option value="Germiston">Germiston</option>
                <option value="Kalafong">Kalafong</option>
                <option value="Kopanong">Kopanong</option>
                <option value="Leratong">Leratong</option>
                <option value="Mamelodi">Mamelodi</option>
                <option value="Medunsa">Medunsa</option>
                <option value="Odi">Odi</option>
                <option value="Oral Dental">Oral Dental</option>
                <option value="Pholosong">Pholosong</option>
                <option value="Pretoria West">Pretoria West</option>
                <option value="Rahima Moosa">Rahima Moosa</option>
                <option value="Sizwe">Sizwe</option>
                <option value="South Rand">South Rand</option>
                <option value="Sterkfontein">Sterkfontein</option>
                <option value="Steve Biko">Steve Biko</option>
                <option value="Tambo">Tambo</option>
                <option value="Tara">Tara</option>
                <option value="Tembisa">Tembisa</option>
                <option value="Thelle Mogoerane">Thelle Mogoerane</option>
                <option value="Tshwane">Tshwane</option>
                <option value="Tshwane Rehab">Tshwane Rehab</option>
                <option value="Weskoppies">Weskoppies</option>
                <option value="Wits Oral">Wits Oral</option>
                <option value="Yusuf Dadoo">Yusuf Dadoo</option>
   
            </FormControl>
            </FormGroup>
            <FormGroup>
            <Radio name="radioGroup" inline 
            defaultChecked
            onClick={this.onSearchChangeSetPatient.bind(this)}>
              Patient Identifier
            </Radio>{' '}
            <Radio name="radioGroup" inline onClick={this.onSearchChangeSetID.bind(this)}>
              Identity Number
            </Radio>{' '}
          </FormGroup>
        {this.state.patientIdchecked ? <FormGroup controlId="patientId" bsSize="large">
            <ControlLabel>Patient ID</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
            />
          </FormGroup> : <FormGroup controlId="Id" bsSize="large">
            <ControlLabel>Id Number</ControlLabel>
            <FormControl
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
              type="number"
            />
          </FormGroup>}
      </div>
    );
  }

  RenderSANBS_DemographicsView = () => {
    
    return(
      <div className="HIS">
        <FormGroup controlId="formControlsSelect2" bsSize="large">
            <ControlLabel>Hospital Code</ControlLabel>
            <FormControl componentClass="select" placeholder="select" inputRef={(ref) => {this.inputRef = ref}}
                 onChange={this.onChangeList}>
                <option value="">--select--</option>
                <option value="0540292">Bheki Mlangeni (0540292)</option>
                <option value="5603021">Carletonville (5603021)</option>
                <option value="5601398">Charlotte Maxeke (5601398)</option>
                <option value="5601177">Chris Hani Baragwanath (5601177)</option>
                <option value="5603323">Cullinan (5603323)</option>
                <option value="5602408">Dr George Mukhari (5602408)</option>
                <option value="5601290">Edenvale (5601290)</option>
                <option value="5601274">Heidelberg (5601274)</option>
                <option value="5601649">Helen Joseph (5601649)</option>
                <option value="5604095">Jubilee (5604095)</option>
                <option value="5601339">Fare East Rand (5601339)</option>
                <option value="5601363">Germiston (5601363)</option>
                <option value="5602653">Kalafong (5602653)</option>
                <option value="5601711">Kopanong (5601711)</option>
                <option value="5603285">Leratong (5603285)</option>
                <option value="5604079">Mamelodi (5604079)</option>
                <option value="0157643">Medunsa (0157643)</option>
                <option value="5605032">Odi (5605032)</option>
                <option value="0157651">Oral Dental (0157651)</option>
                <option value="5605199">Pholosong (5605199)</option>
                <option value="5603145">Pretoria West (5603145)</option>
                <option value="5601258">Rahima Moosa (5601258)</option>
                <option value="5602610">Sizwe (5602610)</option>
                <option value="5601622">South Rand (5601622)</option>
                <option value="5602955">Sterkfontein (5602955)</option>
                <option value="5601738">Steve Biko (5601738)</option>
                <option value="5601215">Tambo (5601215)</option>
                <option value="5601665">Tara (5601665)</option>
                <option value="5602793">Tembisa (5602793)</option>
                <option value="0208957">Tshwane (0208957)</option>
                <option value="0454842">Tshwane Rehab (0454842)</option>
                <option value="5602882">Weskoppies (5602882)</option>
                <option value="0157678">Wits Oral (0157678)</option>
                <option value="5601460">Yusuf Dadoo (5601460)</option>
   
            </FormControl>
            </FormGroup>
            <FormGroup controlId="patientId" bsSize="large">
            <ControlLabel>Patient ID</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
            />
          </FormGroup>
      </div>
    );
  }

  renderForSANBSBilling = () => {
    return (
      <div className="sanbsbilling">
          <SANBSBilling/>
      </div>
    );

  }

  renderNotAvaiable = () =>{
    return (
        <div className="notAvailable">
          <h2>View currently not available</h2>
          </div>
    );
  }

  renderInitView = () => {
    if(this.state.system === 'HIS'){
      return this.RenderHISView();
    }else if(this.state.system === 'Pharmacy'){
      return this.RenderPharmaView();
    }else if (this.state.system === 'SANBS') {
      return this.RenderSANBS_DemographicsView();
    }else if (this.state.system === 'SANBS_billing') {
      return this.renderForSANBSBilling();
    }else{
      this.renderNotAvaiable();
    }
  }

  render() {
    const display = this.renderInitView();
    return (
      <div className="MainSearch">
          <Image className="center" src={logo} responsive />
        <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="formControlsSelect1" bsSize="large">
            <ControlLabel>Systems</ControlLabel>
            <FormControl componentClass="select" placeholder="HIS" sysRef={(ref) => {this.sysRef = ref}}
                 onChange={this.onChangeListSystems}>
                <option value="HIS">HIS</option>
                <option value="Pharmacy">Pharmacy</option>
                <option value="HPRS">HPRS</option>
                <option value="SANBS">SANBS</option>
                <option value="SANBS_billing">SANBS Billing</option>
                <option value="SANBS_medical">SANBS Medical</option>
                <option value="NHLS">NHLS</option>
                <option value="PACS">PACS</option>
                <option value="Mental Health">Mental Health</option>
            </FormControl>
            </FormGroup>
            {display}
          <LoaderButton
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Go"
            loadingText="searching…"
            />
        </form>
      </div>
    );
  }
}

export default withRouter(MainSearch);