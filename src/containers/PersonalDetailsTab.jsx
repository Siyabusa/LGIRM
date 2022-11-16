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
                                <dt>Project Number</dt>
                                <dd>{this.props.details.details.selected.Number}</dd>

                                <dt>Project Name</dt>
                                <dd>{this.props.details.details.selected.Name}</dd>


                                <dt>Province</dt>
                                <dd>{this.props.details.details.selected.Province}</dd>


                                <dt>Project Manager</dt>
                                <dd>{this.props.details.details.selected.ProjectLeader}</dd>
        
                            </dl>
                        </div>
                        );
    }

    render(){

        const display = this.props.details.length === 0 ? this.defaultValue() : this.getValues();
        return(
            <div>{display }</div>
        );
    }
}