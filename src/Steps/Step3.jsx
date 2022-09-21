

import React, { Component } from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Col} from 'react-bootstrap';


export default class Step3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fclass : '',
      netValue : 0,
      Currency : '',
      Gr_inv_sls : 0, 
      Gr_inv_sls_currency : 0, 
      Sales : 0, 
      Sales_Currency : '',
      Invoice_number : '',
      Invoice_date : '',
      Invoice_amount : 0,
      Institution_Name : '',
      Bank_Name : '',
      Account_number : 0
    };

    
  }

  componentDidMount() {}

  componentWillUnmount() {}

  

  render() {
    const {fclass, netValue, Currency,Gr_inv_sls, Gr_inv_sls_currency, Sales, Sales_Currency, Invoice_number, Invoice_date, Invoice_amount, Institution_Name, Bank_Name, Account_number} = this.state;
    return (
        <div className=" row step step3">
            <Form horizontal className="col-sm-12 offset-sm-8">
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={4}>
                                Fin Class:
                            </Col> { ' ' }
                            <Col sm={8}>
                                <FormControl {...fclass} type="text" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={4}>
                                Net Value:
                            </Col>  { ' ' } 
                            <Col sm={8}>
                                <FormControl {...netValue} type="number" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={4}>
                            Currency:
                            </Col> { ' ' }
                            <Col sm={8}>
                                <FormControl {...Currency} type="text" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={4}>
                            Gr inv sls:
                            </Col>  { ' ' } 
                            <Col sm={8}>
                                <FormControl {...Gr_inv_sls} type="number" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={4}>
                            Gr_inv_sls currency:
                            </Col> { ' ' }
                            <Col sm={8}>
                                <FormControl {...Gr_inv_sls_currency} type="number" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={4}>
                            Sales:
                            </Col>  { ' ' } 
                            <Col sm={8}>
                                <FormControl {...Sales} type="number" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={4}>
                            Sales Currency:
                            </Col> { ' ' }
                            <Col sm={8}>
                                <FormControl {...Sales_Currency} type="text" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={4}>
                            Invoice number:
                            </Col>  { ' ' } 
                            <Col sm={8}>
                                <FormControl {...Invoice_number} type="number" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={4}>
                            Invoice date:
                            </Col> { ' ' }
                            <Col sm={8}>
                                <FormControl {...Invoice_date} type="date" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={4}>
                            Invoice amount:
                            </Col>  { ' ' } 
                            <Col sm={8}>
                                <FormControl {...Invoice_amount} type="number" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={4}>
                            Institution Name:
                            </Col> { ' ' }
                            <Col sm={8}>
                                <FormControl {...Institution_Name} type="text" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={4}>
                            Bank Name:
                            </Col>  { ' ' } 
                            <Col sm={8}>
                                <FormControl {...Bank_Name} type="text" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={4}>
                            Account number
                            </Col>  { ' ' } 
                            <Col sm={8}>
                                <FormControl {...Account_number} type="number" />
                            </Col>
                        </FormGroup>
                    </Form>
        </div>
        
    )
  }
}
