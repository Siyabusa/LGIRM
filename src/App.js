
import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";
import logo from './images/NT.png';
import "./App.css";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 



class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated: false,
      isAuthenticating: true,
      user : "",
      role: ""
    };
    
  }

  async componentDidMount() {

    try {
      if(sessionStorage.getItem("loggedIn") === 'true'){
        this.userHasAuthenticated(true);
        this.userIsAdmin(sessionStorage.getItem("role"));
        sessionStorage.getItem("role") === 'System Administrator' ? this.userIsAdmin(true) : this.userIsAdmin(false);
        this.userNameDisplay(sessionStorage.getItem("user"));
        this.setState({role: sessionStorage.getItem("role"), user: sessionStorage.getItem("user")});
        
      }else{
        this.userHasAuthenticated(false);
      }
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
  
    this.setState({ isAuthenticating: false });
  }
  
  
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  userIsAdmin = role => {
    this.setState({role: role} );
  }

  userNameDisplay = user => {
    this.setState({user: user});
  }

  submit = () => {
    confirmAlert({
      title: 'Logging out',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.handleLogout()
        },
        {
          label: 'No',
          
        }
      ]
    });
  };
  
  handleLogout = event => {
    this.userHasAuthenticated(false);
    this.userIsAdmin("");
    this.setState({user: ""});
    sessionStorage.clear();
    this.props.history.push("/login");
  }
  

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
      isAdmin: this.state.isAdmin
    };
  
    return (
      !this.state.isAuthenticating &&
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/"><img src={logo} alt="" style={{width:100, marginTop: -7}} />LG IRM</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {this.state.isAuthenticated
                ? <Fragment>
                      <LinkContainer to="/dashboard">
                      <NavItem>Dashboard</NavItem>
                    </LinkContainer>
                      <LinkContainer to="/projects">
                      <NavItem>Projects</NavItem>
                    </LinkContainer>
                     <LinkContainer to="/users">
                      <NavItem>Users</NavItem>
                    </LinkContainer>
                      <MenuItem divider />
                      <LinkContainer to="/profile">
                      <NavItem>Profile</NavItem>
                    </LinkContainer>
                   
                    <NavItem onClick={this.submit}>Sign Out</NavItem>
                    <Navbar.Text>
                      Signed in as: <a href="/profile">{this.state.user}</a>
                    </Navbar.Text>
                  </Fragment>
                : <Fragment>
                    <LinkContainer to="/login">
                      <NavItem>Login</NavItem>
                    </LinkContainer>
                  </Fragment>
              }
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        <Routes childProps={childProps} />
      </div>
    );
  }
  
}

export default withRouter(App);
