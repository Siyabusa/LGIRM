
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
      <TextField id="filled-basic" value={userData['Name']} onChange={(e) => setUserData({...userData, "Name" : e.target.value})} label="Name" variant="outlined" />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label-province">Province</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={userData['Province']}
          label="Province"
          onChange={(e) => setUserData({...userData, "Province" : e.target.value})}
        >
          <MenuItem value="Eastern Cape">Eastern Cape</MenuItem>
          <MenuItem value="Eastern Cape">Free State</MenuItem>
          <MenuItem value="Eastern Cape">Gauteng</MenuItem>
          <MenuItem value="KwaZulu-Natal">KwaZulu-Natal</MenuItem>
          <MenuItem value="Limpopo">Limpopo</MenuItem>
          <MenuItem value="Mpumalanga">Mpumalanga</MenuItem>
          <MenuItem value="Northern Cape">Northern Cape</MenuItem>
          <MenuItem value="North West">North West</MenuItem>
          <MenuItem value="Western Cape">Western Cape</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label-Function">Sector_Function</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={userData['delivery']}
          label="Province"
          onChange={(e) => setUserData({...userData, "delivery" : e.target.value})}
        >
          <MenuItem value="Standard Project">health</MenuItem>
          <MenuItem value="Project Packaged with Sub Projects">Community & Social Services</MenuItem>
          <MenuItem value="Project Packaged with Sub Contracts">Housing</MenuItem>
          <MenuItem aria-controls={open_public ? 'Public-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open_public ? 'true' : undefined}
                    onClick={handleClick_public}>Public Safety</MenuItem>
                    <Menu
                    id="Public-menu"
                    anchorEl={anchorEl_public}
                    open={open_public}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem value={1} onClick={handleClose}>Administration</MenuItem>
                    <MenuItem value={2} onClick={handleClose}>Transport Infrastructure</MenuItem>
                    <MenuItem value={3} onClick={handleClose}>Transport Operations</MenuItem>
                    <MenuItem value={4} onClick={handleClose}>Transport Regulation</MenuItem>
                    <MenuItem value={5} onClick={handleClose}>Community based Programmes</MenuItem>
                  </Menu>
          <MenuItem aria-controls={open_sport ? 'Sport-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open_sport ? 'true' : undefined}
                    onClick={handleClick_sport}>Sports & Recreation</MenuItem>
                    <Menu
                    id="Sport-menu"
                    anchorEl={anchorEl_sport}
                    open={open_sport}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem value={1} onClick={handleClose}>Administration</MenuItem>
                    <MenuItem value={2} onClick={handleClose}>Development Planning</MenuItem>
                    <MenuItem value={3} onClick={handleClose}>Housing Development</MenuItem>
                  </Menu>
          <MenuItem value="Environmental Protection">Environmental Protection</MenuItem>
          <MenuItem value="Waste Water Management">Waste Water Management</MenuItem>
          <MenuItem value="Road Transport">Road Transport</MenuItem>
          <MenuItem value="Water Management">Water Management</MenuItem>
          <MenuItem value="Electricity">Electricity</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label-delivery">Delivery Mechanism</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={userData['delivery']}
          label="Province"
          onChange={(e) => setUserData({...userData, "delivery" : e.target.value})}
        >
          <MenuItem value="Standard Project">Standard Project</MenuItem>
          <MenuItem value="Project Packaged with Sub Projects">Project Packaged with Sub Projects</MenuItem>
          <MenuItem value="Project Packaged with Sub Contracts">Project Packaged with Sub Contracts</MenuItem>
        </Select>
      </FormControl>
      <TextField id="standard-basic" value={userData['Manager']} onChange={(e) => setUserData({...userData, "Manager" : e.target.value})} label="Project Manager" variant="outlined" />
    </Box>
  );
}
