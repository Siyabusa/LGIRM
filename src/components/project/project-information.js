import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ContractorInput from "./project-info/contractors";
import TimeFrame from "./project-info/time-frames";
import Location from "./project-info/location";
import Details from "./project-info/details"
import { multistepcontext } from "../../StepContext";
const steps = [
  "Infrastructure Details",
  "Location",
  "Contractors",
  "Time Frames",
];

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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="project creation main tabs"
        >
          <Tab label="Infrastructure Details" {...a11yProps(0)} />
          <Tab label="Location" {...a11yProps(1)} />
          <Tab label="Contractor Information" {...a11yProps(2)} />
          <Tab label="Time Frames" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Details/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Location details={props} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ContractorInput />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TimeFrame />
      </TabPanel>
    </Box>
  );
}
