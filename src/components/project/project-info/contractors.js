
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useContext, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { multistepcontext } from '../../../StepContext';

export default function ContractorInput() {

  const { contractorData, setContractorData } = useContext(multistepcontext);


    function validateEmail(value) {
        let error;
        if (!value) {
          error = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          error = 'Invalid email address';
        }
        return error;
      }

  return (
    
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label-contractor-role">Contractor Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={contractorData['role']}
          label="role"
          onChange={(e) => setContractorData({...contractorData, "role" : e.target.value})}
        >
          <MenuItem value="Program Implementing Agent">Program Implementing Agent</MenuItem>
          <MenuItem value="Principal Agent">Principal Agent</MenuItem>
          <MenuItem value="Professional Services Providers">Professional Services Providers</MenuItem>
          <MenuItem value="Main Contractor">Main Contractor</MenuItem>
          <MenuItem value="Other Contractor">Other Contractor</MenuItem>
        </Select>
      </FormControl>
      <TextField id="filled-basic" value={contractorData['Organization']} onChange={(e) => setContractorData({...contractorData, "Organization" : e.target.value})}  label="Organization" variant="outlined" />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label-conratctor-grading">CIDB Grading</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={contractorData['CIDBGrading']}
          label="CIDBGrading"
          onChange={(e) => setContractorData({...contractorData, "CIDBGrading" : e.target.value})}
        >
          <MenuItem value="Role Demo Value 1">Grading Demo Value 1</MenuItem>
          <MenuItem value="Role Demo Value 2">Grading Demo Value 2</MenuItem>
          <MenuItem value="Role Demo Value 3">Grading Demo Value 3</MenuItem>
        </Select>
      </FormControl>
      <TextField id="outlined-basic" value={contractorData['Name']} onChange={(e) => setContractorData({...contractorData, "Name" : e.target.value})} label="Contact Name" variant="outlined" />
      <TextField id="filled-basic" value={contractorData['Phone']} onChange={(e) => setContractorData({...contractorData, "Phone" : e.target.value})} type="number" label="Phone" variant="outlined" />
      <TextField id="standard-basic" value={contractorData['Email']} onChange={(e) => setContractorData({...contractorData, "Email" : e.target.value})} required validate={validateEmail} label="Email" variant="outlined" />
    </Box>
  );
}
