import React, { Component } from "react";
import { Button, Panel, Modal, Glyphicon } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import "./ProjectCostView.css";
import EditContractormodal from "../containers/EditContractormodal";

export default class ProjectConstractorDetails extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      data: [],
      data2: [],
      show: false,
      display2: undefined,
      display: undefined,
      selected: undefined
    };
  }

  handleShow() {
    this.setState({ show: true   });
  }

  handleClose() {
    this.setState({ show: false });
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
  };

  defaultValue = () => {
    return <div className="default center">No data to display</div>;
  };

  ProjectContractor = (columns) => {
    return (
      <div className="default center">
        <BootstrapTable
          striped
          hover
          keyField="ProjectContractorID"
          data={this.state.data}
          columns={columns}
        />
      </div>
    );
  };

  rankFormatter = (cell, row, rowIndex, formatExtraData) => {
    return (
      <div
        style={{ textAlign: "center", cursor: "pointer", lineHeight: "normal" }}
      >
        <Glyphicon
          onClick={() => {
            
            this.setState({selected: row});
            this.handleShow();

            console.log(this.state.selected);
          }}
          glyph="edit"
        ></Glyphicon>
         
      </div>
    );
  };

  budgetFundingInformation = (columns) => {
    return (
      <div className="default center">
        <BootstrapTable
          striped
          hover
          keyField="ProjectContractorID"
          data={this.state.data2}
          columns={columns}
        />
      </div>
    );
  };

  render() {
    const projectcontractorcolumns = [
      {
        dataField: "ProjectContractorID",
        text: "id",
        hidden: true,
      },
      {
        dataField: "ContractorType",
        text: "Role",
      },
      {
        dataField: "ProjectCIDBGradingType",
        text: "ProjectCIDBGradingType",
        sort: true,
      },
      {
        dataField: "Organization",
        text: "Organization",
        sort: true,
      },
      {
        dataField: "ContactName",
        text: "ContactName",
      },
      {
        dataField: "Phone",
        text: "Phone",
      },
      {
        dataField: "Email",
        text: "Email",
      },
      {
        dataField: "edit",
        text: "Edit",
        sort: false,
        formatter: this.rankFormatter,
        headerAttrs: { width: 50 },
        attrs: { width: 50, class: "EditRow" },
      },
    ];

    const budgetcolumns = [
      {
        dataField: "ProjectBudgetID",
        text: "id",
        hidden: true,
      },
      {
        dataField: "BudgetType",
        text: "Budget Programme",
      },
      {
        dataField: "ProjectFundingSource",
        text: "Primary Funding Source",
        sort: true,
      },
      {
        dataField: "ProjectInvestment",
        text: "Nature of Investment",
      },
      {
        dataField: "FundingStatus",
        text: "Funding Status",
      },
    ];

    const display = this.ProjectContractor(projectcontractorcolumns);
    const display2 = this.budgetFundingInformation(projectcontractorcolumns);

    return (
      <div className="projectcost-grid">
        <div>
          <h3>Contractor Details</h3>
          <div className="item-grid">
            {display}
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit Contractor Details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <EditContractormodal />
              </Modal.Body>
              <Modal.Footer></Modal.Footer>
            </Modal>
          </div>
        </div>
        <div>
          <h3>Other Project Agents And Contractors</h3>
          <div className="item-grid">{display2}</div>
        </div>
      </div>
    );
  }
}
