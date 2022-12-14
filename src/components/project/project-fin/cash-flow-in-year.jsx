import React, { useState } from "react";
import "./cashflow-in-year.css";
import { TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Panel, Modal } from "react-bootstrap";
import Button from "@mui/material/Button";
import { Component } from "react";

class Cashflow extends Component {
  // create state variables for each input

constructor(props){
 super(props);
 this.handleShow = this.handleShow.bind(this);
 this.handleClose = this.handleClose.bind(this);
 this.state = {
  show: true
 }
}

handleClose() {
  this.setState({ show: false });
}

handleShow() {
  this.setState({ show: true });
}



  

  appform(name) {
    return (
      <div>
        <Panel id="collapsible-panel-example-2">
          <Panel.Heading onClick={this.handleShow}>
            <Panel.Title toggle>{name}</Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>CashFlow Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h5>{name}</h5>
                  <Paper elevation={2}>
                    <div className="cost-main">
                      <div>
                        <h6>Main Budget Appropriation :</h6>
                        <br />
                        <h6>Adjustment :</h6>
                        <br />
                        <h6>Current Budget :</h6>
                        <br />
                        <h6>July 2022</h6>
                        <br />
                        <h6>August 2022</h6>
                        <br />
                        <h6>September 2022</h6>
                        <br />
                        <h6>October 2022</h6>
                        <br />
                        <h6>November 2022</h6>
                        <br />
                        <h6>December 2022</h6>
                        <br />
                        <h6>January 2023</h6>
                        <br />
                        <h6>February 2023</h6>
                        <br />
                        <h6>March 2023</h6>
                        <br />
                        <h6>April 2023</h6>
                        <br />
                        <h6>May 2023</h6>
                        <br />
                        <h6>June 2023</h6>
                      </div>
                      <div>
                        <TextField
                          id="standard-basic"
                          type="number"
                          label="R"
                          variant="standard"
                        />
                        <br />
                        <TextField
                          id="standard-basic"
                          type="number"
                          label="R"
                          variant="standard"
                        />
                        <br />
                        <TextField
                          id="standard-basic"
                          type="number"
                          label="R"
                          variant="standard"
                        />{" "}
                        <br />
                        <TextField
                          id="standard-basic"
                          type="number"
                          label="R"
                          variant="standard"
                        />{" "}
                        <br />
                        <TextField
                          id="standard-basic"
                          type="number"
                          label="R"
                          variant="standard"
                        />{" "}
                        <br />
                        <TextField
                          id="standard-basic"
                          type="number"
                          label="R"
                          variant="standard"
                        />{" "}
                        <br />
                        <TextField
                          id="standard-basic"
                          type="number"
                          label="R"
                          variant="standard"
                        />{" "}
                        <br />
                        <TextField
                          id="standard-basic"
                          type="number"
                          label="R"
                          variant="standard"
                        />{" "}
                        <br />
                        <TextField
                          id="standard-basic"
                          type="number"
                          label="R"
                          variant="standard"
                        />{" "}
                        <br />
                        <TextField
                          id="standard-basic"
                          type="number"
                          label="R"
                          variant="standard"
                        />{" "}
                        <br />
                        <TextField
                          id="standard-basic"
                          type="number"
                          label="R"
                          variant="standard"
                        />{" "}
                        <br />
                        <TextField
                          id="standard-basic"
                          type="number"
                          label="R"
                          variant="standard"
                        />{" "}
                        <br />
                        <TextField
                          id="standard-basic"
                          type="number"
                          label="R"
                          variant="standard"
                        />{" "}
                        <br />
                        <TextField
                          id="standard-basic"
                          type="number"
                          label="R"
                          variant="standard"
                        />{" "}
                        <br />
                        <TextField
                          id="standard-basic"
                          type="number"
                          label="R"
                          variant="standard"
                        />{" "}
                        <br />
                        <TextField
                          id="standard-basic"
                          type="number"
                          label="R"
                          variant="standard"
                        />{" "}
                        <br />
                        <TextField
                          id="standard-basic"
                          type="number"
                          label="R"
                          variant="standard"
                        />{" "}
                        <br />
                        <TextField
                          id="standard-basic"
                          type="number"
                          label="R"
                          variant="standard"
                        />{" "}
                        <br />
                      </div>
                    </div>
                  </Paper>
                  <Button variant="contained">Save</Button>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
              </Modal>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
      </div>
    );
  };

  render(){
    const display = this.appform("Project Expenditure - Construction Costs");
    const display2 = this.appform("Actual Expenditure - Professional Costs");
    const displa3 = this.appform("Actual Expenditure - Construction Costs");
    const displa4 = this.appform("Revised Expenditure - Professional Costs");
    const displa5 = this.appform("Revised Expenditure - Construction Costs");

    return(
      <div class="cashflow-main">
          <div>{display}{display2}{displa3}{displa4}{displa5}</div>
        </div>
    );
  }

};

export default Cashflow;
