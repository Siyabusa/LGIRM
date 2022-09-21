

import React, { Component } from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Col} from 'react-bootstrap';


export default class Step1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
        Ward : '',
        Reference_document : 0,
        Hospital : '',
        Hospital_Number : ''
        
    };

    
  }
  handleFormSubmit({Ward,Reference_document}){
    console.log(Ward,Reference_document);
}

  componentDidMount() {}

  componentWillUnmount() {}

  

  render() {
    const {Ward, Reference_document, Hospital,Hospital_Number} = this.state;
    return (
        <div className=" row step step3">
            <Form horizontal className="col-sm-12 offset-sm-8" onSubmit={this.handleFormSubmit.bind(this)}>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={4}>
                            Ward:
                            </Col> { ' ' }
                            <Col sm={8}>
                                <FormControl {...Ward} type="text" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={4}>
                            Reference document:
                            </Col>  { ' ' } 
                            <Col sm={8}>
                                <FormControl {...Reference_document} type="number" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={4}>
                            Hospital:
                            </Col> { ' ' }
                            <Col sm={8}>
                                <FormControl {...Hospital} type="text" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={4}>
                            Hospital Number:
                            </Col>  { ' ' } 
                            <Col sm={8}>
                                <FormControl {...Hospital_Number} type="text" />
                            </Col>
                        </FormGroup>
                    
                        
                    </Form>
        </div>
        
    )
  }
}
