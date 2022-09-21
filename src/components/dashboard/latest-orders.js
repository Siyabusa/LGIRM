
import { v4 as uuid } from 'uuid';
import React, {Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import { Audio } from 'react-loader-spinner';
import {
  Box,
  Button,
  Card,
  CardHeader
} from '@mui/material';


class LatestOrders extends Component{

  constructor(props){
    super(props);
    this.state = {
        projects : [],
        isAdmin: false,
        isLoading: false
    }
}

async getProjects(){
  this.setState({isLoading: true});
  if(this.props.isAdmin){
      try{
          const first = await fetch('http://localhost:9000/projects');
          const response = await first.json();
          this.setState({projects: response.recordset, isLoading: false});
      }catch(err){
          console.log("something went wrong");
      }

      this.setState({isLoading: false});
  }
}

  async componentDidMount()  {
    this.getProjects();
    
}

  render(){

    const columns = [{
      dataField: 'ProjectID',
      text: 'Project ID',
      sort: true
    }, {
      dataField: 'Name',
      text: 'Project Name',
      sort: true
      
    }, {
      dataField: 'Number',
      text: 'Project Number',
      sort : true
    },{
      dataField: 'Comments',
      text: 'Comments',
      sort : true
    },{
      dataField: 'ScopeOfWork',
      text: 'Scope  ',
      sort : true
    }
  ];

  const expandRow = {
    renderer: row => (
      <div>
        <Button ClassName='Button'>View</Button>
        <Button ClassName='Button'>Edit</Button>
        <Button ClassName='Button'>Delete</Button>
      </div>
    ),
    showExpandColumn: true
  };

    const selectRow = {
      mode: 'radio',
      clickToSelect: true,
      hideSelectColumn: true,
      style: { backgroundColor: '#c8e6c9' }
    };


    return(this.state.isLoading ? <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="three-dots-loading"
      wrapperStyle
      wrapperClass
    />   : 
      <Card>
    <CardHeader title="Open Projects" />
    <div className="content-center">
          <BootstrapTable keyField='ProjectID' 
          data={ this.state.projects } 
          columns={ columns } 
          noDataIndication={ 'no results found' } 
          expandRow={ expandRow }
          selectRow={ selectRow }/>
        </div>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-center',
        p: 2
      }}
    >
      
    </Box>
  </Card>
    )
  }
}

export default LatestOrders;
