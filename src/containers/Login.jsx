import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Image } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import logo from '../images/NT.png';
import axios from "axios";
import "./Login.css";

const URL = process.env.REACT_APP_URL;

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
        isLoading: false,
        isAdmin : false,
        username: "",
        password: ""
    };
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
    const {username, password} = this.state;
      try{
        const response = await axios.post("http://" + URL + ":9000/login",JSON.stringify({
          UserName : username,  
          Password : password
        }), {
          headers : {
            'Content-type' : 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'POST, OPTIONS'
          },
          withCredentials : true
        });

        if(response.data){
          sessionStorage.setItem("loggedIn", true);
          sessionStorage.setItem("user", response.data[0].Name + " " + response.data[0].Surname);
          sessionStorage.setItem("municipality", response.data[0].Municipality);
          sessionStorage.setItem("province", response.data[0].Province);
          this.props.userHasAuthenticated(true);
          sessionStorage.setItem("role", response.data[0].userRole);
          if(response.data[0].userRole === 'System Administrator'){
              this.setState({isAdmin: true,data: response.data[0], isLoading: false})
          }
          this.props.history.push({
            pathname: '/',
            state: { 
              isAdmin : this.state.isAdmin,
              Role : response.data[0].userRole,
              user : response.data[0].UserName,
              Municpality : response.data[0].Municpality
            }
          });
        }
    }catch(err){
      const msg  = err.response.data;
      if(msg === ("user does not exist")){
          alert(msg);
      }else if(msg === 'login failed, Credentials not found'){
        alert("Invalid credentials");
      }else{
        alert("login failed");
      }

      this.setState({isLoading: false});
      
    }
  }

  

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    
    try {
      this.fetchUser();
      
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
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <LoaderButton
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Login"
            loadingText="Logging in…"
            />
        </form>
      </div>
    );
  }
}