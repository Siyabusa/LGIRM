import React, { Component } from 'react'
import {  Button } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next';
import './ProjectCashflowDetails.css';


export default class ProjectEstimatesDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            data : [],
            data2 : [],
            data3 : [],
            display2 : undefined,
            display : undefined,
            selected : ''
        }
    }

    componentWillReceiveProps(nextProps){ 
      if(nextProps.data !== undefined){
        this.setState({data : nextProps.data});
    }
    }

    componentDidMount = async () => {
        if(this.props.data !== undefined){
            this.setState({data : this.props.data});
        }
    }

    defaultValue = () => {
        return(
            <div className="default center">
                        No data to display
            </div>
        );
    }

    estimates = (columns, data) => {
        return(
            <div className="default center">
                       <BootstrapTable 
                 striped
                 hover
                 keyField='MessageID' 
                 data={data} 
                 columns={ columns }
                 />
            </div>
        );
    }

    render(){
        const columns = [{
            dataField: 'MessageID',
            text: 'id',
            hidden : true
          }, {
            dataField: 'ProfessionalFees',
            text: 'Professional Fees'
          }, {
            dataField: 'Product',
            text: 'Construction Fees',
            sort: true

          },
          {
            dataField: 'Date_Of_Requisition',
            text: 'Year'
          },
          {
            dataField: 'MessageID',
            text: 'Total'
            
          }
          ];

          

          const ppe = this.props.data.length === 0 ? this.defaultValue() :this.estimates(columns, this.state.data);
          const cpe = this.props.data.length === 0 ? this.defaultValue() :this.estimates(columns, this.state.data2);
          const pe = this.props.data.length === 0 ? this.defaultValue() :this.estimates(columns, this.state.data3);


        return (

          <div className="projectcashflow-grid">
                <div>
                    <h3>Project Expenditure</h3>
                    {ppe}
                </div>
                <div>
                    <h3>Actual Expenditure</h3>
                    {cpe}
                </div>
                <div>
                    <h3>Project Expenditure (revised)</h3>
                    {pe}
                </div>
        </div>
      );
    }
}