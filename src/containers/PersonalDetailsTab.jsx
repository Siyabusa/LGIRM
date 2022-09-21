import React, { Component } from 'react'

export default class PersonalDetailsTab extends Component {


    defaultValue = () => {
        return(
            <div className="default center">
                        No data to display
            </div>
        );
    }

    getValues = () => {
        return(
                <div className="persondetails">
                            <dl className="dl-horizontal">
                                <dt>Title</dt>
                                <dd>{this.props.details.Title}</dd>

                                <dt>FirstName</dt>
                                <dd>{this.props.details.FirstName}</dd>

                                <dt>LastName</dt>
                                <dd>{this.props.details.LastName}</dd>

                                <dt>MiddleName</dt>
                                <dd>{this.props.details.MiddleName}</dd>
                                

                                <dt>RSA ID Number</dt>
                                <dd>{this.props.details.ID}</dd>

                                <dt>BirthDate</dt>
                                <dd>{this.props.details.BirthDate}</dd>

                                <dt>BloodType</dt>
                                <dd>{this.props.details.BloodType}</dd>

                                <dt>Age</dt>
                                <dd>{this.props.details.Age}</dd>

                                <dt>DeathDate</dt>
                                <dd>{this.props.details.DeathDate}</dd>

                                <dt>Race</dt>
                                <dd>{this.props.details.Race}</dd>

                                <dt>Gender</dt>
                                <dd>{this.props.details.Gender}</dd>

                                <dt>Religion</dt>
                                <dd>{this.props.details.Religion}</dd>

                                <dt>Language</dt>
                                <dd>{this.props.details.Language}</dd>

                                <dt>MaritalStatus</dt>
                                <dd>{this.props.details.MaritalStatus}</dd>

                                <dt>Nationality</dt>
                                <dd>{this.props.details.Nationality}</dd>
                                
                            </dl>
                        </div>
                        );
    }

    render(){
        const display = this.props.details === "" ? this.defaultValue() : this.getValues();
        return(
            <div>{display }</div>
        );
    }
}