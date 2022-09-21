import React, { Component } from 'react'
import { ButtonToolbar, Button, Modal } from 'react-bootstrap'
import PersonalDetailsTab from '../containers/PersonalDetailsTab'
import ContactDetailsTab from '../containers/ContactDetailsTab'
import './PersonalDetailsTabTable.css'
import BootstrapTable from 'react-bootstrap-table-next';


export default class PersonalDetailsTabTable extends Component {

    constructor(props){
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            data : [], 
            show : false, 
            display : undefined,
            selected : ''
        }
    }

    handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }

    componentWillReceiveProps(nextProps){ 
        /*if(nextProps.details.Prescriptions !== undefined){
            var templist = [];
            templist = nextProps.details.Prescriptions[0].PrescriptionDetail;
            this.setState({data : templist});
        }else{
            this.setState({data : []})
        }*/
    }

    componentDidMount = async () => {
        /*if(this.props.details.Prescriptions !== undefined){
            var templist = [];
            templist = this.props.details.Prescriptions[0].PrescriptionDetail;
            this.setState({data : templist});
        }*/
        this.setState({data : this.props.details})
    }

    render(){
        const columns = [ {
            dataField: 'FirstName',
            text: 'FirstName'
          }, {
            dataField: 'LastName',
            text: 'LastName',
            sort: true

          },
          {
            dataField: 'ID',
            text: 'RSA ID Number'
          }, {
            dataField: 'hospital',
            text: 'Hospital',
            sort: true
          }
          ];
          const selectRow = {
            mode: 'radio',
            clickToSelect: true,
            clickToExpand: true
          };

          const expandRow = {
            showExpandColumn: true,
            renderer: row => (
              <div className='center'>
                    <ButtonToolbar>
                        <Button onClick={ () => {

                            this.setState({selected : row, show : true, display : 'personal'});

                        }} bsStyle="info">Personal Details</Button>
                        <Button onClick={ () => {

                        this.setState({selected : row, show : true, display : 'address'});

                        }} bsStyle="info">Patient Address</Button> 
                    </ButtonToolbar>
              </div>
            )
          };

          const cur = this.state.display === 'personal'? <PersonalDetailsTab details={this.state.selected}/> : <ContactDetailsTab details={this.state.selected.ContactDetails}/>;

        return (
         <div>
             <Modal className="phamDiv center" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
            {cur}
            
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        <BootstrapTable 
                    striped
                    hover
                    keyField='hospital' 
                    data={ this.state.data } 
                    columns={ columns }
                    selectRow={ selectRow }
                    expandRow={ expandRow }/>
         </div>
                
        );
    }
}