import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import CasesRoundedIcon from '@mui/icons-material/CasesRounded';
import React from 'react';
export const TotalCustomers = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            TOTAL PROJECTS
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            96
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56
            }}
          >
            <CasesRoundedIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
      </Box>
    </CardContent>
  </Card>
);
