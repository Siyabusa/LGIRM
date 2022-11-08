import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next';
import './ProjectCostView.css';


export default class ProjectCostDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
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

    if (nextProps.data2 !== undefined) {
      this.setState({ data2: nextProps.data2 });
    }
  }

  componentDidMount = async () => {
    if (this.props.data !== undefined) {
      this.setState({ data: this.props.data });
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

  totalProjectCost = (columns) => {
    return (
      <div className="default center">
        <BootstrapTable
          striped
          hover
          keyField='ProjectCostID'
          data={this.state.data}
          columns={columns}
        />
      </div>
    );
  }

  budgetFundingInformation = (columns) => {
    return (
      <div className="default center">
        <BootstrapTable
          striped
          hover
          keyField='ProjectBudgetID'
          data={this.state.data2}
          columns={columns}
        />
      </div>
    );
  }

  render() {
    const totalcostcolumns = [{
      dataField: 'ProjectCostID',
      text: 'id',
      hidden: true
    }, {
      dataField: 'ProfessionalFees',
      text: 'Professional Fees'
    }, {
      dataField: 'ConstructionFees',
      text: 'Construction Fees',
      sort: true

    },
    {
      dataField: 'VariationOrders',
      text: 'Variation Orders',
      sort: true
    },
    {
      dataField: 'DateCaptured',
      text: 'Date Captured'
    }
    ];

    const budgetcolumns = [{
      dataField: 'ProjectBudgetID',
      text: 'id',
      hidden: true
    }, {
      dataField: 'BudgetType',
      text: 'Budget Programme'
    }, {
      dataField: 'ProjectFundingSource',
      text: 'Primary Funding Source',
      sort: true

    },
    {
      dataField: 'ProjectInvestment',
      text: 'Nature of Investment'
    },
    {
      dataField: 'FundingStatus',
      text: 'Funding Status'
    }
    ];

    const display = this.props.data.length === 0 ? this.defaultValue() : this.totalProjectCost(totalcostcolumns);
    const display2 = this.props.data2.length === 0 ? this.defaultValue() : this.budgetFundingInformation(budgetcolumns);

    return (

      <div className="projectcost-grid">
        <div>
          <h3>Total Project Cost</h3>
          <div className="item-grid">
            {display}
          </div>
        </div>
        <div>
          <h3>Budget and Funding Information</h3>
          <div className="item-grid">
            {display2}
          </div>
        </div>
      </div>
    );
  }
}