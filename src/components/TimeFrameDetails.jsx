import React, { Component } from 'react'

export default class TimeFrameDetails extends Component {


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
                                <dt>Project Start Date</dt>
                                <dd>{this.props.details.Title}</dd>

                                <dt>Project End Date</dt>
                                <dd>{this.props.details.FirstName}</dd>

                                <dt>Construction Start Date</dt>
                                <dd>{this.props.details.LastName}</dd>

                                <dt>Construction End Date</dt>
                                <dd>{this.props.details.MiddleName}</dd>
            
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