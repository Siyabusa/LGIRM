import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Projectcost from './project-fin/project-cost';
import Projectestimates from './project-fin/cost-estimates';
import Cashflow from './project-fin/cash-flow-in-year';

const steps = ['Project Cost', 'Project Estimates', 'Cash Flow in Year'];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="project creation main tabs">
          <Tab label="Project Cost" {...a11yProps(0)} />
          <Tab label="Project Estimates" {...a11yProps(1)} />
          <Tab label="CashFlow" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Projectcost/>
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Projectestimates/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Cashflow/>
      </TabPanel>
    </Box>
  );
}
