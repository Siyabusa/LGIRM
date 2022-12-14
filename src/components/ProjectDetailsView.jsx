import React, { Component } from "react";
import "./ProjectDetailsView.css";
import ProjectLocation from "../components/project/project-info/ProjectLocation";
import ProjectDetails from "../containers/PersonalDetailsTab";
import ContractorDetails from "../components/ProjectContractorView";
import TimeFrameDetails from "../components/TimeFrameDetails";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ButtonToolbar, Button, Modal, Glyphicon } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";

const URL = process.env.REACT_APP_URL;

class ProjectDetailsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      contractorData: [],
      isLoading: false,
      gates: "",
      status: "",
      subStatus: "",
    };
  }

  tableView = (columns) => {
    return (
      <div className="default center">
        <BootstrapTable
          striped
          hover
          keyField="MessageID"
          data={this.state.data}
          columns={columns}
        />
      </div>
    );
  };

  rankFormatter = (cell, row, rowIndex, formatExtraData) => {
    return (
      <div
        style={{ textAlign: "center", cursor: "pointer", lineHeight: "normal" }}
      >
        <Glyphicon
          onClick={() => {
            alert("testing").show();
          }}
          glyph="edit"
        ></Glyphicon>
      </div>
    );
  };

  handleChange = (event) => {
    this.setState({ event: event.target.value });
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    this.setState({ isLoading: false });
  }

  render() {
    const columns = [
      {
        dataField: "InfrastructreDetailsID",
        text: "Id",
        hidden: true,
      },
      {
        dataField: "InfrastructureType",
        text: "Infrastructure Type",
      },
      {
        dataField: "Details",
        text: "Details",
      },
      {
        dataField: "edit",
        text: "Edit",
        sort: false,
        formatter: this.rankFormatter,
        headerAttrs: { width: 50 },
        attrs: { width: 50, class: "EditRow" },
      },
    ];

    const display = this.state.isLoading ? (
      <div>Loading....</div>
    ) : (
      <div className="grid">
        <div className="span-row-3">
          <h3>Project Information</h3>
          <Paper elevation={2}>
            <div className="grid">
              <div>
                <h6>IDM Gates</h6>
                <br />
                <h6>Project Status</h6>
                <br />
                <h6>Project Sub-status</h6>
                <br />
              </div>
              <div>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    IDMS Gates
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.gates}
                    label="IDMS Gates"
                    onChange={this.handleChange}
                  >
                    <MenuItem value="Western Cape">--select--</MenuItem>
                    <MenuItem value="Initiation pre Feasibility">
                      Initiation pre Feasibility
                    </MenuItem>
                    <MenuItem value="Concept Feasibility">
                      Concept Feasibility
                    </MenuItem>
                    <MenuItem value="Design Development">
                      Design Development
                    </MenuItem>
                    <MenuItem value="Design Documentation">
                      Design Documentation
                    </MenuItem>
                    <MenuItem value="Works">Works</MenuItem>
                    <MenuItem value="Handover">Handover</MenuItem>
                    <MenuItem value="Close Out">Close Out</MenuItem>
                  </Select>
                </FormControl>
                <br />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Project Status
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.status}
                    label="Project Status"
                    onChange={this.handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <br />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Project Sub-Status
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.subStatus}
                    label="Project Sub-Status"
                    onChange={this.handleChange}
                  >
                    <MenuItem value="Standard Project">Proposed</MenuItem>
                    <MenuItem value="Project Packaged with Sub Projects">
                      Active
                    </MenuItem>
                    <MenuItem value="Project Packaged with Sub Contracts">
                      Rejected
                    </MenuItem>
                  </Select>
                </FormControl>
                
              </div>
            </div>
          </Paper>
          <Button>Save</Button>
        </div>
        <div className="span-row-2">
          <h3>Infrastracture Details</h3>
          {this.tableView(columns)}
        </div>
      </div>
    );
    return <>{display}</>;
  }
}

export default ProjectDetailsView;
