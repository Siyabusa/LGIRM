import React, { Component } from 'react'
import './PatientSearchResultsTable.css'
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Button } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import ToolkitProvider, { CSVExport, Search } from 'react-bootstrap-table2-toolkit';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; 


import Switch from "react-switch";
import { ToastContainer, toast } from 'react-toastify';



export default class ProjectResults extends Component{

  constructor(props){
    super(props);
    this.state = {
      data : [],
      data2:[],
      isLoading : false,
      isSelected : ""
    };
    
  }

  submit = () => {
    confirmAlert({
      title: 'Delete Project',
      message: 'Are you sure you want to delete the Project?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.deleteProject()
        },
        {
          label: 'No',
          
        }
      ]
    });
  };
  

  notify = (message) => toast.info(message, {
    position: toast.POSITION.BOTTOM_CENTER
  });

  componentDidMount = async () => {
    this.setState({data: this.props.value});
  }

  deleteProject = () => {
    console.log("testing delete project");
  }

  render(){

    const { ExportCSVButton } = CSVExport;
    const { SearchBar } = Search;

    const columns = [{
        dataField: 'ProjectID',
        text: 'Project ID',
        sort: true
      }, {
        dataField: 'Name',
        text: 'Name',
        sort: true
        
      }, {
        dataField: 'Number',
        text: 'Number'
      },{
        dataField: 'Municipality',
        text: 'Municipality',
        sort: true
      }, {
        dataField: 'Province',
        text: 'Province',
        sort: true
        
      }, {
        dataField: 'Department',
        text: 'Department'
      },{
        dataField: 'Sector',
        text: 'Sector'
      }];

      const customTotal = (from, to, size) => (
        <span className="react-bootstrap-table-pagination-total">
          Showing { from } to { to } of { size } Results
        </span>
      );

      const options = {
        paginationSize: 4,
        pageStartIndex: 0,
        // alwaysShowAllBtns: true, // Always show next and previous button
        // withFirstAndLast: false, // Hide the going to First and Last page button
        // hideSizePerPage: true, // Hide the sizePerPage dropdown always
        // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
        firstPageText: 'First',
        prePageText: 'Back',
        nextPageText: 'Next',
        lastPageText: 'Last',
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        showTotal: true,
        paginationTotalRenderer: customTotal,
        disablePageTitle: true,
        sizePerPageList: [{
          text: '5', value: 5
        }, {
          text: '10', value: 10
        }, {
          text: 'All', value: this.state.data.length
        }] // A numeric array is also available. the purpose of above example is custom the text
      };

      const expandRow = {
        showExpandColumn: true,
        renderer: row => (
          <div>
            <Button >View</Button>
            <Button >Edit</Button>
            <Button onClick={this.submit}>Delete</Button>
          </div>
        )
      };

      

      const selectRow = {
        mode: 'radio',
        
        clickToExpand: true,
        hideSelectColumn: true,
        style: { backgroundColor: '#c8e6c9' }
      };
    
    return(
      

<ToolkitProvider
  keyField="ProjectID"
  data={ this.state.data }
  columns={ columns }
  exportCSV
  search
   
  
  
>
  {
    props => (
      <div>
        <ExportCSVButton { ...props.csvProps }>Export CSV!!</ExportCSVButton>
        <Button href="/newproject">New Project</Button>
        <SearchBar { ...props.searchProps } />
        <hr />
        <BootstrapTable selectRow={ selectRow } pagination={ paginationFactory(options) }  
  noDataIndication={ 'no results found' } expandRow={ expandRow } { ...props.baseProps } />
      </div>
    )
  }
</ToolkitProvider>

      
    );
  }


}
  