import React, { useState } from 'react';
import './cashflow-in-year.css';
import { TextField } from "@mui/material";

const Cashflow = () => {
  // create state variables for each input

  const [formName, setFormName] = useState("");
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    //handleClose();
  };




  const appform = (name) => {
    return (
      <div>
        <h5>{name}</h5>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Main Budget Appropriation"
            variant="filled"
            required
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <br />
          <TextField
            label="Adjustment"
            variant="filled"
            required
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
          <br />
          <TextField
            label="Current Budget"
            variant="filled"
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <br />
          <TextField
            label="July 2022"
            variant="filled"
            type="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <br />
          <TextField
            label="August 2022"
            variant="filled"
            required
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <br />
          <TextField
            label="September 2022"
            variant="filled"
            required
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
          <br />
          <TextField
            label="October 2022"
            variant="filled"
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <br />
          <TextField
            label="November 2022"
            variant="filled"
            type="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <br />
          <TextField
            label="December 2022"
            variant="filled"
            required
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <br />
          <TextField
            label="January 2023"
            variant="filled"
            required
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
          <br />
          <TextField
            label="February 2023"
            variant="filled"
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <br />
          <TextField
            label="March 2023"
            variant="filled"
            type="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <br />
          <TextField
            label="April 2023"
            variant="filled"
            required
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <br />
          <TextField
            label="May 2023"
            variant="filled"
            required
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
          <br />
          <TextField
            label="June 2023"
            variant="filled"
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <br />
          
        </form></div>
    );
  }


  return (
    <>
      <div class="cashflow-main">
        <div>{appform("Project Expenditure - Professional Fees")}</div>
        <div>{appform("Project Expenditure - Construction Costs")}</div>
        <div>{appform("Actual Expenditure - Professional Costs")}</div>
        <div>{appform("Actual Expenditure - Construction Costs")}</div>
        <div>{appform("Revised Expenditure - Professional Costs")}</div>
        <div>{appform("Revised Expenditure - Construction Costs")}</div>
      </div>
    </>
  );
}

export default Cashflow;
