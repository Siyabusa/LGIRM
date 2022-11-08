import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Image, HelpBlock } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import logo from '../images/NT.png';
import axios from "axios";
import "./Login.css";

export default class newUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: false,
      isAdmin: false,
      username: "",
      password: "",
      confirmPassword: "",
      name: "",
      surname: "",
      email: "",
      role: ""
    };
  }

  validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }

  matchEmail() {
    return this.state.password === this.state.confirmPassword;
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  fetchUser = async event => {
    const { username, password } = this.state;
    try {
      const response = await axios.post("http://localhost:9000/login", JSON.stringify({
        UserName: username,
        Password: password
      }), {
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS'
        },
        withCredentials: true
      });

      if (response.data) {
        sessionStorage.setItem("loggedIn", true);
        sessionStorage.setItem("user", response.data[0].Name + " " + response.data[0].Surname);
        sessionStorage.setItem("municipality", response.data[0].Municpality);
        this.props.userHasAuthenticated(true);
        sessionStorage.setItem("role", response.data[0].userRole);
        if (response.data[0].userRole === 'System Administrator') {
          this.setState({ isAdmin: true, data: response.data[0], isLoading: false })
        }
        this.props.history.push({
          pathname: '/',
          state: {
            isAdmin: this.state.isAdmin,
            Role: response.data[0].userRole,
            user: response.data[0].UserName,
            Municpality: response.data[0].Municpality
          }
        });
      }
    } catch (err) {
      //router.push('/overview');
      console.log({ error: err.response.data });
      const msg = err.response.data;
      if (msg === ("user does not exist")) {
        alert(msg);
      } else if (msg === 'login failed, Credentials not found') {
        alert("Invalid credentials");
      } else {
        alert("login failed");
      }

      this.setState({ isLoading: false });

    }
  }



  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });

    try {
      //this.fetchUser();

      //const dataset = await this.getProjects();
      //this.setState({data: dataset});

    } catch (e) {
      alert(e.message);
      this.setState({ isLoading: false });
    }
  }


  render() {
    return (
      <div className="Login">
        <Image className="center" src={logo} responsive />
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              type="username"
              value={this.state.username}
              onChange={this.handleChange}
              required

            />
          </FormGroup>
          <FormGroup controlId="name" bsSize="large">
            <ControlLabel>Name</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </FormGroup>
          <FormGroup controlId="surname" bsSize="large">
            <ControlLabel>Surname</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.surname}
              onChange={this.handleChange}
              required
            />
          </FormGroup>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <FormControl.Feedback />
            <HelpBlock>Validation is based on string length.</HelpBlock>
          </FormGroup>
          <FormGroup controlId="role" bsSize="large">
            <ControlLabel>Role</ControlLabel>
            <FormControl
              value={this.state.role}
              onChange={this.handleChange}
              type="text"
              required
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              required
            />
          </FormGroup>
          <FormGroup controlId="confirmPassword" bsSize="large">
            <ControlLabel>Confirm Password</ControlLabel>
            <FormControl
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              type="password"
              required
            />
          </FormGroup>
          <LoaderButton
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Sign Up"
            loadingText="Signing Up…"
          />
        </form>
      </div>
    );
  }
}