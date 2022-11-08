import React, { Component } from 'react'

export default class ContractorDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: "",
            isLoading: false
        }

    };


    defaultValue = () => {
        return (
            <div className="default center">
                No data to display
            </div>
        );
    }

    getValues = () => {


        return (
            <div className="persondetails">
                <dl className="dl-horizontal">
                    <dt>Contractor Role</dt>
                    <dd>{this.props.details.ContractorType}</dd>

                    <dt>Organization Name</dt>
                    <dd>{this.props.details.Organization}</dd>

                    <dt>CIDB Grading</dt>
                    <dd>{this.props.details.ProjectCIDBGradingType}</dd>

                    <dt>Contact Name</dt>
                    <dd>{this.props.details.ContactName}</dd>


                    <dt>Phone Number</dt>
                    <dd>{this.props.details.Phone}</dd>

                    <dt>Email</dt>
                    <dd>{this.props.details.Email}</dd>

                </dl>
            </div>
        );
    }
    


    render() {
        const display = this.props.details === undefined ? this.defaultValue() : this.getValues();
        return (
            <div>{display}</div>
        );
    }
}
