
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useContext, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Menu from '@mui/material/Menu';
import Select from '@mui/material/Select';
import { multistepcontext } from '../../../StepContext';

export default function BasicTextFields() {

  const { userData, setUserData } = useContext(multistepcontext);

  const [name, setName] = useState("");
  const [projecttype, setProjectType] = useState("");
  const [province, setProvince] = useState("");
  const [vote, setVote] = useState("");
  const [delivery, setDelivery] = useState("");
  const [manager, setManager] = useState("");

  const [anchorEl_public, setAnchorEl_public] = useState(null);
  const [anchorEl_sport, setAnchorEl_sport] = useState(null);
  const open_public = Boolean(anchorEl_public);
  const open_sport = Boolean(anchorEl_sport);


  const handleClick_public = (event) => {
    setAnchorEl_public(event.currentTarget);
  };
  const handleClick_sport = (event) => {
    setAnchorEl_sport(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl_public(null);
    setAnchorEl_sport(null);
  
  };

  return (
    
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '25ch' },
      }}
      Validate
      autoComplete="off"
    >
      <TextField id="filled-basic" value={userData['Name']} onChange={(e) => setUserData({...userData, "Name" : e.target.value})} label="Asset No." variant="outlined" />
      <TextField id="filled-basic" value={userData['Name']} onChange={(e) => setUserData({...userData, "Name" : e.target.value})} label="IDP Ref No." variant="outlined" />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label-province">IDMS Gates</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={userData['Province']}
          label="IDMS Gates"
          onChange={(e) => setUserData({...userData, "Province" : e.target.value})}
        >
          <MenuItem value="Western Cape">--select--</MenuItem>
          <MenuItem value="Initiation pre Feasibility">Initiation pre Feasibility</MenuItem>
          <MenuItem value="Concept Feasibility">Concept Feasibility</MenuItem>
          <MenuItem value="Design Development">Design Development</MenuItem>
          <MenuItem value="Design Documentation">Design Documentation</MenuItem>
          <MenuItem value="Works">Works</MenuItem>
          <MenuItem value="Handover">Handover</MenuItem>
          <MenuItem value="Close Out">Close Out</MenuItem>
          
          
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label-Function">Sub Sector</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={userData['delivery']}
          label="Province"
          onChange={(e) => setUserData({...userData, "delivery" : e.target.value})}
        >
          <MenuItem value="public Toilets">public Toilets</MenuItem>
          <MenuItem value="Sewerage">Sewerage</MenuItem>
          <MenuItem value="Storm Water Management">Storm Water Management</MenuItem>
          
          <MenuItem value="Waste Water Treatment">Waste Water Treatment</MenuItem>
          
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label-delivery">Project Sub Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={userData['delivery']}
          label="Province"
          onChange={(e) => setUserData({...userData, "delivery" : e.target.value})}
        >
          <MenuItem value="Standard Project">Proposed</MenuItem>
          <MenuItem value="Project Packaged with Sub Projects">Active</MenuItem>
          <MenuItem value="Project Packaged with Sub Contracts">Rejected</MenuItem>
        </Select>
      </FormControl>
      <TextField id="filled-basic" value={userData['Name']} onChange={(e) => setUserData({...userData, "Name" : e.target.value})} label="Scope of Work" variant="outlined" />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label-delivery">Project Description</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={userData['delivery']}
          label="Province"
          onChange={(e) => setUserData({...userData, "delivery" : e.target.value})}
        >
          <MenuItem value="Standard Project">New</MenuItem>
          <MenuItem value="Project Packaged with Sub Projects">Repairs & Maintenance</MenuItem>
          <MenuItem value="Project Packaged with Sub Contracts">Refurbishments</MenuItem>
          <MenuItem value="Project Packaged with Sub Contracts">Upgrades</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
