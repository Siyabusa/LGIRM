import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Menu from '@mui/material/Menu';
import './project-cost.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Projectcost = () => {
  const [budgetp, setBudgetp] = useState("");
  const [primaryfundingsource, setPrimaryfundingsource] = useState("");
  const [natureofinvestment, setNatureofinvestment] = useState("");
  const [fundingstatus, setFundingstatus] = useState("");

//budget programme

  const [anchorEl_education, setAnchorEl_education] = useState(null);
  const [anchorEl_roads, setAnchorEl_roads] = useState(null);
  const [anchorEl_agri, setAnchorEl_agri] = useState(null);
  const [anchorEl_trans, setAnchorEl_trans] = useState(null);
  const [anchorEl_human, setAnchorEl_human] = useState(null);
  const open_education = Boolean(anchorEl_education);
  const open_roads = Boolean(anchorEl_roads);
  const open_agri = Boolean(anchorEl_agri);
  const open_trans = Boolean(anchorEl_trans);
  const open_human = Boolean(anchorEl_human);
  const handleClick_education = (event) => {
    setAnchorEl_education(event.currentTarget);
  };
  const handleClick_roads = (event) => {
    setAnchorEl_roads(event.currentTarget);
  };
  const handleClick_agri = (event) => {
    setAnchorEl_agri(event.currentTarget);
  };
  const handleClick_trans = (event) => {
    setAnchorEl_trans(event.currentTarget);
  };
  const handleClick_human = (event) => {
    setAnchorEl_human(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl_education(null);
    setAnchorEl_roads(null);
    setAnchorEl_human(null);
    setAnchorEl_trans(null);
    setAnchorEl_agri(null);

    setAnchorEl_infra(null);
    setAnchorEl_com(null);
    setAnchorEl_heri(null);
    setAnchorEl_other(null);
  };



  //Nature of Investment

  const [anchorEl_infra, setAnchorEl_infra] = useState(null);
  const [anchorEl_com, setAnchorEl_com] = useState(null);
  const [anchorEl_heri, setAnchorEl_heri] = useState(null);
  const [anchorEl_other, setAnchorEl_other] = useState(null);
  const open_infra = Boolean(anchorEl_infra);
  const open_com = Boolean(anchorEl_com);
  const open_heri = Boolean(anchorEl_heri);
  const open_other = Boolean(anchorEl_other);

  const handleClick_infra = (event) => {
    setAnchorEl_infra(event.currentTarget);
  };
  const handleClick_com = (event) => {
    setAnchorEl_com(event.currentTarget);
  };
  const handleClick_heri = (event) => {
    setAnchorEl_heri(event.currentTarget);
  };
  const handleClick_other = (event) => {
    setAnchorEl_other(event.currentTarget);
  };

  const handleChange = (event) => { setBudgetp(event.target.value) };

  return (
    <div className="cost-main">
      <div>
        <h5>Total Cost</h5>
        <Paper elevation={2}>
          <div className="cost-main">
            <div>
              <h6>Professional Fees :</h6>
              <br />
              <h6>Construction Fees :</h6>
              <br />
              <h6>Variation Orders :</h6>
              <br />
              <h6>Total :</h6>
            </div>
            <div>
              <TextField
                id="standard-basic"
                type="number"
                label="R"
                variant="standard"
              />
              <br />
              <TextField
                id="standard-basic"
                type="number"
                label="R"
                variant="standard"
              />
              <br />
              <TextField
                id="standard-basic"
                type="number"
                label="R"
                variant="standard"
              /> <br />
              <TextField
                id="standard-basic"
                type="number"
                label="R"
                variant="standard"
              /> <br />
            </div>
          </div>
        </Paper>
      </div>

      <div>
        <h5>Budget And Funding Information</h5>
        <Paper elevation={2}>
          <div className="cost-main">
            <div>
              <h6>Funding Source :</h6>
              <br />
              <h6>Nature Of Investment :</h6>
              <br />
              <h6>Funding Status :</h6>
            </div>
            <div>
              
              <br />

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label-pfs">
                  Funding Source
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label-pfs"
                  id="demo-simple-select"
                  value={primaryfundingsource}
                  label="primaryfundingsource"
                  onChange={(event) =>
                    setPrimaryfundingsource(event.target.value)
                  }
                >
                  <MenuItem value={1}>External Loans</MenuItem>
                  <MenuItem value={2}>Asset Financing Reserve</MenuItem>
                  <MenuItem value={3}>Surplus Cash</MenuItem>
                  <MenuItem value={4}>public Contributions/Donations</MenuItem>
                  <MenuItem value={5}>National Government Transfers & Grants</MenuItem>
                  <MenuItem value={6}>Provincial Government Tranfers & Grants</MenuItem>
                  <MenuItem value={7}>District Municipality Transfers & Grants </MenuItem>
                  <MenuItem value={8}>Leases</MenuItem>
                  <MenuItem value={9}>Other Transfers & Grants</MenuItem>
                  <MenuItem value={10}>Internally Generated Funds</MenuItem>
                  <MenuItem value={11}>Other</MenuItem>
                </Select>
              </FormControl>
              <br />

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label-noi">
                  Nature Of Investment
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label-noi"
                  id="demo-simple-select"
                  value={natureofinvestment}
                  label="natureofinvestment"
                  onChange={(event) =>
                    setNatureofinvestment(event.target.value)
                  }
                >
                  <MenuItem aria-controls={open_infra ? 'Infra-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open_infra ? 'true' : undefined}
                    onClick={handleClick_infra}>
                    Infrastructure
                  </MenuItem>
                  <Menu
                    id="Infra-menu"
                    anchorEl={anchorEl_infra}
                    open={open_infra}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem value={1} onClick={handleClose}>Roads, Pavements, Bridges & Storm Waters</MenuItem>
                    <MenuItem value={2} onClick={handleClose}>Water Reservoirs & Reticulation</MenuItem>
                    <MenuItem value={3} onClick={handleClose}>Car parks, Bus terminals and Taxi Ranks</MenuItem>
                    <MenuItem value={4} onClick={handleClose}>Electricity Reticulation</MenuItem>
                    <MenuItem value={5} onClick={handleClose}>Sewerage Purification & Reticulation</MenuItem>
                    <MenuItem value={6} onClick={handleClose}>Housing</MenuItem>
                    <MenuItem value={7} onClick={handleClose}>Street Lighting</MenuItem>
                    <MenuItem value={8} onClick={handleClose}>Refuse Sites</MenuItem>
                    <MenuItem value={9} onClick={handleClose}>Gas</MenuItem>
                    <MenuItem value={10} onClick={handleClose}>Other</MenuItem>
                  </Menu>
                  <MenuItem aria-controls={open_com ? 'Com-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open_com ? 'true' : undefined}
                    onClick={handleClick_com}>
                    Community
                  </MenuItem>
                  <Menu
                    id="Com-menu"
                    anchorEl={anchorEl_com}
                    open={open_com}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem value={1} onClick={handleClose}>Establishment of parks & Gardens</MenuItem>
                    <MenuItem value={2} onClick={handleClose}>Sport Fields</MenuItem>
                    <MenuItem value={3} onClick={handleClose}>Community Halls</MenuItem>
                    <MenuItem value={4} onClick={handleClose}>Libraries</MenuItem>
                    <MenuItem value={6} onClick={handleClose}>Recreational Facilities</MenuItem>
                    <MenuItem value={7} onClick={handleClose}>Clinics</MenuItem>
                    <MenuItem value={8} onClick={handleClose}>Museums & Art Galaries</MenuItem>
                    <MenuItem value={9} onClick={handleClose}>Other</MenuItem>
                  </Menu>
                  <MenuItem aria-controls={open_heri ? 'Heri-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open_heri ? 'true' : undefined}
                    onClick={handleClick_heri}>Heritage Assets</MenuItem>
                    <Menu
                    id="Heri-menu"
                    anchorEl={anchorEl_heri}
                    open={open_heri}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem value={1} onClick={handleClose}>Heritage Assets</MenuItem>
                    
                  </Menu>
                  <MenuItem aria-controls={open_other ? 'Other-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open_other ? 'true' : undefined}
                    onClick={handleClick_other}>
                    Other Assets
                  </MenuItem>
                  <Menu
                    id="Other-menu"
                    anchorEl={anchorEl_other}
                    open={open_other}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem value={1} onClick={handleClose}>Abattoirs</MenuItem>
                    <MenuItem value={2} onClick={handleClose}>Markets</MenuItem>
                    <MenuItem value={3} onClick={handleClose}>Airports</MenuItem>
                    <MenuItem value={4} onClick={handleClose}>Civic Land and Buildings</MenuItem>
                    <MenuItem value={5} onClick={handleClose}>Other Land and Buildings</MenuItem>
                    <MenuItem value={6} onClick={handleClose}>Other</MenuItem>
                  </Menu>
                </Select>
              </FormControl>
              <br />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label-fs">
                  Funding Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label-fs"
                  id="demo-simple-select"
                  value={fundingstatus}
                  label="fundingstatus"
                  onChange={(event) => setFundingstatus(event.target.value)}
                >
                  <MenuItem value={10}>Emergency</MenuItem>
                  <MenuItem value={20}>Not Tabled</MenuItem>
                  <MenuItem value={30}>Tabled</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Projectcost;
