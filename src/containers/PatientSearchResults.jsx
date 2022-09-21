import React, { Component } from 'react'
import logo from '../images/find.png'
import { Image } from 'react-bootstrap'
import './PatientSearchResults.css';
import PatientTable from '../components/PatientSearchResultsTable'

export default class PatientSearchResults extends Component{

    render(){
        return (
            <div className="patients">
                <Image className="imagesize center" src={logo} responsive />
                <h2>Search Results</h2>
                <PatientTable datalist={this.props.location.state}/>
            </div>
        );
    }
}