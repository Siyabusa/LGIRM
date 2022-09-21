import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TimeFrame() {

  return (
    
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField required id="outlined-basic" type="date" label="Project Start Date" variant="outlined" />
      <TextField required id="filled-basic" type="date" label="Estimated Construction Start date" variant="outlined" />
      <TextField required id="standard-basic" type="date" label="Contruction Start Date" variant="outlined" />
      <TextField required id="outlined-basic" type="date" label="Estimated Completion Date" variant="outlined" />
      <TextField required id="filled-basic" type="date" label="Contracted Construction End Date" variant="outlined" />
      <TextField required id="standard-basic" type="date" label="Revised Construction End Date" variant="outlined" />
      <TextField id="standard-basic" type="date" label="Project Completion Date" variant="outlined" />
    </Box>
  );
}
