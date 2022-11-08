import React, { Component } from 'react'
import logo from '../images/find.png'
import { Image } from 'react-bootstrap'
import Loader from 'react-loader-spinner';
import UserResults from '../components/UserResults'
export default class Users extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
            data: [],
            isLoading: false,
          isAdmin : false,
          userid : ''
        };
      }

      async getUsers(){
        this.setState({isLoading: true});
            if(sessionStorage.getItem("role") === "System Administrator"){
                try{
                    const first = await fetch('http://83.229.71.39:9000/users');
                    const response = await first.json();
                    console.log(response.recordset[0]);
                    this.setState({data: response.recordset, isLoading : false});
                }catch(err){
                    console.log("something went wrong");
                }
        
                this.setState({isLoading: false});
            }
            this.setState({isLoading:false});
      }

      async UNSAFE_componentWillReceiveProps() {
        //console.log('checking something :' + sessionStorage.getItem("role"));
        this.getUsers();
      }

      async componentDidMount() {
        this.setState({isLoading:true});
        this.getUsers();
      }
    


    render(){
        const {data, isLoading} = this.state;
        return (
            isLoading ? <Loader height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass/> : 
            <div className="patients">
                <Image className="imagesize center" src={logo} responsive />
                <h2>Users</h2>
                <div className="ul">
                    <UserResults value={data}/>
                </div>
            </div>
        );
    }
}