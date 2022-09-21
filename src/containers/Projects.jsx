import React, { Component } from 'react'
import logo from '../images/find.png'
import { Image } from 'react-bootstrap'
import './PatientSearchResults.css';
import Loader from 'react-loader-spinner';
import ProjectResults from '../components/ProjectResults'
export default class Projects extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
            data: [],
            isLoading: false,
          isAdmin : false,
          userid : ''
        };
      }

      async getProjects(){
        this.setState({isLoading: true});
        
            if(sessionStorage.getItem("role") === "System Administrator"){
                try{
                    const first = await fetch('http://localhost:9000/projects');
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
        this.setState({isLoading:true});
        this.getProjects();
      }

      async componentDidMount() {
        this.setState({isLoading:true});
        this.getProjects();
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
                <h2>Projects</h2>
                <div className="ul">
                    <ProjectResults value={data}/>
                </div>
            </div>
        );
    }
}