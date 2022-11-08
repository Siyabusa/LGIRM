import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { multistepcontext } from '../../../StepContext';

export default function TimeFrame() {

  const { timeframes, setTimeframes } = useContext(multistepcontext);

  return (
    
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField required id="outlined-basic" value={timeframes['StartDate']} onChange={(e) => setTimeframes({...timeframes, "StartDate" : e.target.value})} type="date" label="Project Start Date" variant="outlined" />
      <TextField required id="filled-basic" value={timeframes['EstimatedConstructionStartdate']} onChange={(e) => setTimeframes({...timeframes, "EstimatedConstructionStartdate" : e.target.value})} type="date" label="Estimated Construction Start date" variant="outlined" />
      <TextField required id="standard-basic" value={timeframes['ContructionStartDate']} onChange={(e) => setTimeframes({...timeframes, "ContructionStartDate" : e.target.value})} type="date" label="Contruction Start Date" variant="outlined" />
      <TextField required id="outlined-basic" value={timeframes['EstimatedCompletionDate']} onChange={(e) => setTimeframes({...timeframes, "EstimatedCompletionDate" : e.target.value})} type="date" label="Estimated Completion Date" variant="outlined" />
      <TextField required id="filled-basic" value={timeframes['ContractedConstructionEndDate']} onChange={(e) => setTimeframes({...timeframes, "ContractedConstructionEndDate" : e.target.value})} type="date" label="Contracted Construction End Date" variant="outlined" />
      <TextField required id="standard-basic" value={timeframes['RevisedConstructionEndDate']} onChange={(e) => setTimeframes({...timeframes, "RevisedConstructionEndDate" : e.target.value})} type="date" label="Revised Construction End Date" variant="outlined" />
      <TextField id="standard-basic" value={timeframes['ProjectCompletionDate']} onChange={(e) => setTimeframes({...timeframes, "ProjectCompletionDate" : e.target.value})} type="date" label="Project Completion Date" variant="outlined" />
    </Box>
  );
}
