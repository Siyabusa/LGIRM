import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ContractorInput() {


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
      <TextField required id="outlined-basic" label="Role" variant="outlined" />
      <TextField id="filled-basic" label="Organization" variant="outlined" />
      <TextField id="standard-basic" label="CIDB Grading" variant="outlined" />
      <TextField id="outlined-basic" label="Contact Name" variant="outlined" />
      <TextField id="filled-basic" type="number" label="Phone" variant="outlined" />
      <TextField id="standard-basic" required validate={validateEmail} label="Email" variant="outlined" />
    </Box>
  );
}
