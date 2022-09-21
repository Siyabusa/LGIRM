

import React, { Component } from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Col} from 'react-bootstrap';


export default class Step2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
        Product : '',
        Quantity : 0,
        Unit_of_Measure : '',
        Doctor : 0, 
        Diagnosis : 0,
        Date_Of_Requisition : ''
    };
    }

  componentDidMount() {}

  

  render() {
    const {Product, Quantity, Unit_of_Measure,Doctor, Diagnosis,Date_Of_Requisition} = this.state;
    return (
        <div className=" row step step3">
            <Form horizontal className="col-sm-12 offset-sm-8">
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={4}>
                            Product:
                            </Col> { ' ' }
                            <Col sm={8}>
                                <FormControl {...Product} type="text" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={4}>
                            Quantity:
                            </Col>  { ' ' } 
                            <Col sm={8}>
                                <FormControl {...Quantity} type="number" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={4}>
                            Unit of Measure:
                            </Col> { ' ' }
                            <Col sm={8}>
                                <FormControl {...Unit_of_Measure} type="text" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={4}>
                            Doctor:
                            </Col>  { ' ' } 
                            <Col sm={8}>
                                <FormControl {...Doctor} type="text" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={4}>
                            Diagnosis:
                            </Col> { ' ' }
                            <Col sm={8}>
                                <FormControl {...Diagnosis} type="text" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={4}>
                            Date Of Requisition:
                            </Col> { ' ' }
                            <Col sm={8}>
                                <FormControl {...Date_Of_Requisition} type="date" />
                            </Col>
                        </FormGroup>
                    </Form>
        </div>
        
    )
  }
}
