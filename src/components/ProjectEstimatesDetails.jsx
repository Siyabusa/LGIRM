import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next';
import './ProjectCostView.css';


export default class ProjectEstimatesDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data1: [],
      data2: [],
      display2: undefined,
      display: undefined,
      selected: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== undefined) {
      this.setState({ data: nextProps.data });
    }
    if (nextProps.data1 !== undefined) {
      this.setState({ data1: nextProps.data1 });
    }
    if (nextProps.data2 !== undefined) {
      this.setState({ data2: nextProps.data2 });
    }
  }

  componentDidMount = async () => {
    if (this.props.data !== undefined) {
      this.setState({ data: this.props.data });
    }
    if (this.props.data1 !== undefined) {
      this.setState({ data1: this.props.data1 });
    }
    if (this.props.data2 !== undefined) {
      this.setState({ data2: this.props.data2 });
    }
  }

  defaultValue = () => {
    return (
      <div className="default center">
        No data to display
      </div>
    );
  }

  estimates = (columns, data) => {
    return (
      <div className="default center">
        <BootstrapTable
          striped
          hover
          keyField='ProjectEstimateID'
          data={data}
          columns={columns}
        />
      </div>
    );
  }

  render() {
    const columns = [{
      dataField: 'ProjectEstimateID',
      text: 'id',
      hidden: true
    }, {
      dataField: 'ProjectEstimateSubType',
      text: 'Professional Fees'
    },
    {
      dataField: 'Year',
      text: 'Year'
    },
    {
      dataField: 'Value',
      text: 'Total'

    }
    ];



    const ppe = this.state.data.length === 0 ? this.defaultValue() : this.estimates(columns, this.state.data);
    const cpe = this.state.data1.length === 0 ? this.defaultValue() : this.estimates(columns, this.state.data1);
    const pe = this.state.data2.length === 0 ? this.defaultValue() : this.estimates(columns, this.state.data2);


    return (

      <div className="projectcost-grid">
        <div>
          <h3>Project Projected Expenditure</h3>
          {ppe}
        </div>
        <div>
          <h3>Contracted Projected Expenditure</h3>
          {cpe}
        </div>
        <div>
          <h3>Project Expenditure</h3>
          {pe}
        </div>
      </div>
    );
  }
}