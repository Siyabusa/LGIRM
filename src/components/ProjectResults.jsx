import React, { Component } from "react";
import "./ProjectResults.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Button, ButtonToolbar, Panel } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import ToolkitProvider, {
  CSVExport,
  Search,
} from "react-bootstrap-table2-toolkit";
import { Routes, Route, useNavigate, withRouter } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";

import Switch from "react-switch";
import { ToastContainer, toast } from "react-toastify";

class ProjectResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data2: [],
      isLoading: false,
      selected: "",
      isSelected: "",
      role: "",
    };
  }

  submit = () => {
    confirmAlert({
      title: "Delete Project",
      message: "Are you sure you want to delete the Project?",
      buttons: [
        {
          label: "Yes",
          onClick: () => this.deleteProject(),
        },
        {
          label: "No",
        },
      ],
    });
  };

  submitview = (row) => {
    this.props.history.push("/projectview");
    //alert(row.id);
  };

  notify = (message) =>
    toast.info(message, {
      position: toast.POSITION.BOTTOM_CENTER,
    });

    getData(province){
      var temp = [];
      var mydata = this.props.value.map(item =>{
        if(item.Province === province){
          temp.push(item);
        }
      });
      this.setState({data: temp});
    }

  componentDidMount = async () => {
    this.setState({isLoading: true});
    this.getData(this.props.province);
    this.setState({
      role: sessionStorage.getItem("role"),
      isLoading: false
    });
  };

  deleteProject = () => {
    console.log("testing delete project");
  };

  render() {
    const { ExportCSVButton } = CSVExport;
    const { SearchBar } = Search;

    const columns = [
      {
        dataField: "ProjectID",
        text: "Project ID",
        sort: true,
      },
      {
        dataField: "Name",
        text: "Name",
        sort: true,
      },
      {
        dataField: "Number",
        text: "Number",
        sort: true,
      },
      {
        dataField: "Municipality",
        text: "Municipality",
        sort: true,
      },
      {
        dataField: "Province",
        text: "Province",
        sort: true,
        hidden : true,
      },
      {
        dataField: "Department",
        text: "Department",
        sort: true,
      },
      {
        dataField: "Sector",
        text: "Sector",
        sort: true,
      },
    ];

    const customTotal = (from, to, size) => (
      <span className="react-bootstrap-table-pagination-total">
        Showing {from} to {to} of {size} Results
      </span>
    );

    const options = {
      paginationSize: 4,
      pageStartIndex: 0,
      // alwaysShowAllBtns: true, // Always show next and previous button
      // withFirstAndLast: false, // Hide the going to First and Last page button
      // hideSizePerPage: true, // Hide the sizePerPage dropdown always
      // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
      firstPageText: "First",
      prePageText: "Back",
      nextPageText: "Next",
      lastPageText: "Last",
      nextPageTitle: "First page",
      prePageTitle: "Pre page",
      firstPageTitle: "Next page",
      lastPageTitle: "Last page",
      showTotal: true,
      paginationTotalRenderer: customTotal,
      disablePageTitle: true,
      sizePerPageList: [
        {
          text: "5",
          value: 5,
        },
        {
          text: "10",
          value: 10,
        },
        {
          text: "All",
          value: this.state.data.length,
        },
      ], // A numeric array is also available. the purpose of above example is custom the text
    };

    const expandRow = {
      showExpandColumn: true,
      renderer: (row) => (
        <div className="center">
          <ButtonToolbar>
            <Button
              onClick={() => {
                sessionStorage.removeItem("pnumber");
                sessionStorage.setItem("pnumber", row.Number);
                this.props.history.push({
                  pathname: "/projectview",
                  state: {
                    selected: row,
                  },
                });
              }}
              bsStyle="info"
            >
              View
            </Button>
            <Button
              onClick={() => {
                this.setState({
                  selected: row,
                  show: true,
                  display: "billing",
                });
              }}
              variant="outline-danger"
            >
              Delete
            </Button>
          </ButtonToolbar>
        </div>
      ),
    };

    const selectRow = {
      mode: "radio",
      clickToExpand: true,
      hideSelectColumn: true,
      style: { backgroundColor: "#c8e6c9" },
    };

    return (
      <div>
       {this.state.isLoading ? <div>Is Loading....</div> : <ToolkitProvider
                keyField="ProjectID"
                data={this.state.data}
                columns={columns}
                exportCSV
                search
              >
                {(props) => (
                  <div>
                    <ExportCSVButton {...props.csvProps}>
                      Export CSV!!
                    </ExportCSVButton>{" "}
                    
                    <SearchBar {...props.searchProps} />
                    <hr />
                    <BootstrapTable
                      selectRow={selectRow}
                      pagination={paginationFactory(options)}
                      noDataIndication={"no results found"}
                      expandRow={expandRow}
                      {...props.baseProps}
                    />
                  </div>
                )}
              </ToolkitProvider>}
      </div>
    );
  }
}

export default withRouter(ProjectResults);
