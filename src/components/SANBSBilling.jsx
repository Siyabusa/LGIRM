import React, { Component } from 'react'
import Step1 from '../Steps/Step1';
import Step2 from '../Steps/Step2';
import Step3 from '../Steps/Step3';
import Stepper from 'react-stepper-horizontal';

export default class SanbsBilling extends Component {
  constructor() {
    super();
    this.state = {
      steps: [{
        title: 'Details',
        onClick: (e) => {
          e.preventDefault()
          this.setState({currentStep : 0})
        }
      }, {
        title: 'Hospital',
        onClick: (e) => {
          e.preventDefault()
          this.setState({currentStep : 1})
        }
      }, {
        title: 'Billing',
        onClick: (e) => {
          e.preventDefault()
          this.setState({currentStep : 2})
        }
      }, {
        title: 'Finish',
        onClick: (e) => {
          e.preventDefault()
          
        }
      }],
      currentStep: 0,
    };
    this.onClickNext = this.onClickNext.bind(this);
  }

  onClickNext() {
    const { currentStep } = this.state;
    this.setState({
      currentStep: currentStep + 1,
    });
  }

  setStepper = (stepper) => {
    if(stepper === 0){
        return (
          <Step1/>
        )
    }else if(stepper === 1){
      return (
        <Step2/>
      )
    }else if(stepper === 2){
      return (
        <Step3/>
      )
    }else{
      return (
        <Step1/>
      )
    }
  }
 

    render(){
      const { steps, currentStep } = this.state;
      const buttonStyle = { background: '#E0E0E0', width: 200, padding: 16, textAlign: 'center', margin: '0 auto', marginTop: 32 };
      const stepperSelect = this.setStepper(this.state.currentStep);
  
      return (
        <div>
          <Stepper steps={ steps } activeStep={ currentStep } />
          <div className="ster">
              {stepperSelect}
          </div>
          <div style={ buttonStyle } onClick={ this.onClickNext }>Next</div>
        </div>
      );
    }
}

