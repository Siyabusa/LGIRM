import React, { Component } from "react";
import { ButtonToolbar, Button, Modal, Glyphicon } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";

export default class JobCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      show: false,
      display: undefined,
      isLoading: false,
      selected: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== undefined) {
      this.setState({ data: nextProps.data });
    }
  }

  componentDidMount = async () => {
    if (this.props.data !== undefined) {
      this.setState({ data: this.props.data });
    }
  };

  defaultValue = () => {
    return <div className="default center">No data to display</div>;
  };

  tableView = (columns) => {
    return (
      <div className="default center">
        <BootstrapTable
          striped
          hover
          keyField="MessageID"
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
        <Glyphicon onClick={() =>{
          alert('testing').show();
        }} glyph="edit"></Glyphicon>
      </div>
    );
  };

  render() {
    const columns = [
      {
        dataField: "ProjectJobCreationID",
        text: "Id",
        hidden: true,
      },
      {
        dataField: "JobsCreated",
        text: "# of Jobs",
        hidden: true,
      },
      {
        dataField: "YouthEmployed",
        text: "# of Youth",
      },
      {
        dataField: "WomenEmployed",
        text: "# of Women",
        sort: true,
      },
      {
        dataField: "DisabledEmployed",
        text: "# of Disabled",
      },
      {
        dataField: "FTEEmployed",
        text: "# of FTEs",
        hidden: true,
      },
      {
        dataField: "PeopleTrained",
        text: "# of Trained",
      },
      {
        dataField: "DaysWorked",
        text: "Worked days",
        sort: true,
      },
      {
        dataField: "AvgEmployPeriod",
        text: "Average Employment Period",
      },
      {
        dataField: "MinWage",
        text: "Minimum Wage",
      },
      {
        dataField: "edit",
        text: "Edit",
        sort: false,
        formatter: this.rankFormatter,
        headerAttrs: { width: 50 },
        attrs: { width: 50, class: "EditRow" },
      }
    ];

    const display =
        this.tableView(columns);

    return <div className="center">{display}</div>;
  }
}
