import React, { Component } from 'react'
import logo from '../images/find.png'
import { Image } from 'react-bootstrap'
import './Projects.css';
import Loader from 'react-loader-spinner';
import ProjectResultsComponent from '../components/ProjectResultsComponent'

export default class Projects extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: false,
            isAdmin: false,
            userid: ''
        };
    }

    async getProjectsByMunicipality(municipality) {

        try {
            const first = await fetch('http://localhost:9000/projectbymunicipality?municipality=' + municipality);
            const response = await first.json();
            this.setState({ data: response.recordset, isLoading: false });
        } catch (err) {
            console.log(err);
        }

        this.setState({ isLoading: false });
    }

    async getProjects() {

        if (sessionStorage.getItem("role") === "System Administrator") {
            try {
                const first = await fetch('http://localhost:9000/projects');
                const response = await first.json();
                this.setState({ data: response.recordset, isLoading: false });
            } catch (err) {
                console.log(err);
            }

            this.setState({ isLoading: false });
        }
        this.setState({ isLoading: false });
    }
    async UNSAFE_componentWillReceiveProps() {


        this.setState({ isLoading: true });
        const role = sessionStorage.getItem("role");
        if (role === 'System Administrator') {
            this.getProjects();
        } else {
            this.getProjectsByMunicipality(sessionStorage.getItem("municipality"));
        }
    }

    async componentDidMount() {
        this.setState({ isLoading: true });
        const role = sessionStorage.getItem("role");
        if (role === 'System Administrator') {
            this.getProjects();
        } else {
            this.getProjectsByMunicipality(sessionStorage.getItem("municipality"));
        }
    }



    render() {
        const { data, isLoading } = this.state;
        return (
            isLoading ? <Loader height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass /> :
                <div className="mainDiv">
                    <Image className="imagesize center" src={logo} responsive />
                    <h2>Projects</h2>
                    <div className="ul">
                        <ProjectResultsComponent value={data} />
                    </div>
                </div>
        );
    }
}