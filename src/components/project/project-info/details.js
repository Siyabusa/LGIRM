import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {

  return (
    
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '25ch' },
      }}
      Validate
      autoComplete="off"
    >
      <TextField required error  id="outlined-basic" label="Project #" variant="outlined" />
      <TextField id="filled-basic" label="Name" variant="outlined" />
      <TextField id="standard-basic" label="Type" variant="outlined" />
      <TextField id="outlined-basic" label="Province" variant="outlined" />
      <TextField id="filled-basic" label="Function or Vote" variant="outlined" />
      <TextField id="standard-basic" label="Delivery Mechanism" variant="outlined" />
      <TextField id="standard-basic" label="Project Manager" variant="outlined" />
    </Box>
  );
}
