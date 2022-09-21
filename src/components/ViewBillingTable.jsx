import React, { Component } from 'react'
import { ButtonToolbar, Button, Modal } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next';


export default class ViewBillingTable extends Component {

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
      if(nextProps.data !== undefined){
        this.setState({data : nextProps.data});
    }
    }

    componentDidMount = async () => {
        if(this.props.data !== undefined){
            this.setState({data : this.props.data});
        }
    }

    showMedicalDetails = () => {
      const cur = this.state.selected.MedicalData;
        return(
          <div className="center">
                      <dl className="dl-horizontal">

                          <dt>Patient_Name</dt>
                          <dd>{cur.Patient_Name}</dd>

                          <dt>Patient_Identifier</dt>
                          <dd>{cur.Patient_Identifier}</dd>

                          <dt>Product</dt>
                          <dd>{cur.Product}</dd>

                          <dt>Ward</dt>
                          <dd>{cur.Ward}</dd>

                          <dt>Reference_document</dt>
                          <dd>{cur.Reference_document}</dd>
                          

                          <dt>Hospital</dt>
                          <dd>{cur.Hospital}</dd>

                          <dt>Quantity</dt>
                          <dd>{cur.Quantity}</dd>

                          <dt>Unit_of_Measure</dt>
                          <dd>{cur.Unit_of_Measure}</dd>

                          <dt>Doctor</dt>
                          <dd>{cur.Doctor}</dd>

                          <dt>Hospital_Number</dt>
                          <dd>{cur.Hospital_Number}</dd>

                          <dt>Date_Of_Requisition</dt>
                          <dd>{cur.Date_Of_Requisition}</dd>

                          <dt>Diagnosis</dt>
                          <dd>{cur.Diagnosis}</dd>

                          
                          
                      </dl>
                  </div>
                  );
    }

    showBillingDetails = () => {
      const cur = this.state.selected.BillingData;
      return(

        <div className="divmanin">
            {cur!=null ? <div className="center">
                          <dl className="dl-horizontal">
                          <dt>Financial_Class</dt>
                              <dd>{cur.Financial_Class}</dd>

                              <dt>Net_value</dt>
                              <dd>{cur.Net_value}</dd>

                              <dt>Currency</dt>
                              <dd>{cur.Currency}</dd>

                              <dt>Gr_inv_sls</dt>
                              <dd>{cur.Gr_inv_sls}</dd>

                              <dt>Gr_inv_sls_currency</dt>
                              <dd>{cur.Gr_inv_sls_currency}</dd>
                              

                              <dt>Sales</dt>
                              <dd>{cur.Sales}</dd>

                              <dt>Sales_Currency</dt>
                              <dd>{cur.Sales_Currency}</dd>

                              <dt>Invoice_number</dt>
                              <dd>{cur.Invoice_number}</dd>

                              <dt>Invoice_date</dt>
                              <dd>{cur.Invoice_date}</dd>

                              <dt>Invoice_amount</dt>
                              <dd>{cur.Invoice_amount}</dd>

                              <dt>Institution_Name</dt>
                              <dd>{cur.Institution_Name}</dd>

                              <dt>Bank_Name</dt>
                              <dd>{cur.Bank_Name}</dd>

                              <dt>Account_number</dt>
                              <dd>{cur.Account_number}</dd>

                              <dt>Billing_Document</dt>
                              <dd>{cur.Billing_Document}</dd>
                          </dl>
                              
                    </div> : null }
                </div>
                );
  }

    render(){
        const columns = [{
            dataField: 'MessageID',
            text: 'MessageID',
            hidden : true
          }, {
            dataField: 'Patient_Name',
            text: 'Patient Name'
          }, {
            dataField: 'Product',
            text: 'Product',
            sort: true

          },
          {
            dataField: 'Date_Of_Requisition',
            text: 'Date Of Requisition'
          }
          ];
          const selectRow = {
            mode: 'radio',
            clickToSelect: true,
            clickToExpand: true,
            hideSelectColumn: true,
            style: { backgroundColor: '#c8e6c9' }
          };

          const expandRow = {
            showExpandColumn: true,
            renderer: row => (
              <div className='center'>
                    <ButtonToolbar>
                        <Button onClick={ () => {

                            this.setState({selected : row, show : true, display : 'medical'});

                        }} bsStyle="info">Medical Details</Button>
                        <Button onClick={ () => {

                        this.setState({selected : row, show : true, display : 'billing'});

                        }} bsStyle="info">Billing Details</Button> 
                    </ButtonToolbar>
              </div>
            )
          };

          const cur = this.state.display === 'medical'? this.showMedicalDetails() : this.showBillingDetails();


        return (

          <div className="center">
          <Modal className="center" show={this.state.show} onHide={this.handleClose}>
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
                 keyField='MessageID' 
                 data={ this.state.data } 
                 columns={ columns }
                 selectRow={ selectRow }
                 expandRow={ expandRow }/>
      </div>);
    }
}