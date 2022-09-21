import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import LocationFinder from './locationFinder';





export default function LocationInput() {

  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(true);
    setShow(true);
  }

  return (
    <div className="Container">
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '20ch' },
      }}
      Validate
      autoComplete="off"
    >
      <TextField required id="outlined-basic" label="Project No" variant="outlined" />
      <TextField id="filled-basic" label="Name" variant="outlined" />
      <TextField id="standard-basic" label="Municipality" variant="outlined" />
      <TextField id="outlined-basic" label="Ward" variant="outlined" />
      <TextField id="filled-basic" label="District" variant="outlined" />
      <TextField id="standard-basic" label="Province" variant="outlined" />
      
      <Modal size="lg" show={show} fullscreen='true' onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LocationFinder/>
        </Modal.Body>
      </Modal>
    </Box>
    <Button variant="primary" onClick={() => handleShow()}>
        Find Location
    </Button>
    </div>
    
  );
}
