import React, { useState } from "react";
import "./cashflow-in-year.css";
import { TextField } from "@mui/material";
import Paper from "@mui/material/Paper";

const Cashflow = () => {
  // create state variables for each input

  const [formName, setFormName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    //handleClose();
  };

  const appform = (name) => {
    return (
      <div>
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
        </div>
    );
  };

  return (
    <>
      <div class="cashflow-main">
        
        <div>{appform("Project Expenditure - Construction Costs")}</div>
        <div>{appform("Actual Expenditure - Professional Costs")}</div>
        <div>{appform("Actual Expenditure - Construction Costs")}</div>
        <div>{appform("Revised Expenditure - Professional Costs")}</div>
        <div>{appform("Revised Expenditure - Construction Costs")}</div>
      </div>
    </>
  );
};

export default Cashflow;
