import React, { Component } from 'react';
import { Steps, Button, message } from 'antd';
import AccountInfo from './AccountInfo';
import Questions from './Questions';
import Documents from './Documents';
import { DriverRegisterContext } from '../../contexts/driverRegisterContext';
import 'antd/dist/antd.css';
import './driving.css'

const { Step } = Steps;



class StepForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 2,
    };
  }




  next() {
    if (this.state.current === 0) {
      var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let errors = {}
      const {
        firstName,
        lastName,
        address,
        city,
        email,
        phone,
        password,
        confirmPass,
        province,
        postalCode,
        dob } = this.context.firstStep;
      if (firstName.trim().length < 3) {
          errors.firstName = 'First Name must be at least 3 characters long'
      }
      if (!firstName.trim()) {
        errors.firstName = 'First Name Is Required'
      }
      if (lastName.trim().length < 3) {
        errors.lastName = 'Last Name must be at least 3 characters long'
      }
      if (!lastName.trim()) {
        errors.lastName = 'Last Name Is Required'
      }
      if (address.trim().length < 8) {
        errors.address = 'Address must be at least 8 characters long'
      }
      if (!address.trim()) {
        errors.address = 'Address Is Required'
      }
      if (!city.trim()) {
        errors.city = 'City Is Required'
      }
      if (!province.trim()) {
        errors.province = 'Province Is Required'
      }
      if (!postalCode.trim()) {
        errors.postalCode = 'Postal Code Is Required'
      }
      if (!dob.trim()) {
        errors.dob = 'D.O.B Is Required'
      }
      if (phone.trim().length !== 11) {
        errors.phone = 'Phone must be 11 Digit'
      }
      if (typeof Number(phone) !== 'number') {
        errors.phone = 'Phone Is Invalid'
      }
      if (!phone.trim()) {
        errors.phone = 'Phone Is Required'
      }
      if (password.trim().length < 5) {
        errors.password = 'Password must be at least 5 characters long'
      }
      if (!password.trim()) {
        errors.password = 'Password Is Required'
      }
      if (confirmPass !== password) {
        errors.confirmPass = 'Password Must Match'
      }
      if (!confirmPass.trim()) {
        errors.confirmPass = 'Confirm Password Is Required'
      }

      if (!re.test(email)) {
        errors.email = 'Email Is Inavlid'
      }
      if (!email.trim()) {
        errors.email = 'Email Is Required'
      }
      if (Object.keys(errors).length === 0) {
        const current = this.state.current + 1;
        this.setState({ current });
      } else {
        this.context.firstStepErrorsCheck(errors)
      }
    } else if (this.state.current === 1) {
      console.log(this.context.secondStep)
      const current = this.state.current + 1;
      this.setState({ current });
    } else {
      let errors = {}
      const {
        driverLicense,
        pImage,
        policeCertificate,
        driverAbs,
        validInsurance,
        govId,
        uberRatingRep,
        lyftRatingRep,
        yearsDrivingLyft,
        yearsDrivingUber,
        reason,
        validInsurancePermission
      } = this.context.thirdStep;
      if(!driverLicense){
        errors.driverLicense = 'Driver License is Required'
      }
      if(!pImage){
        errors.pImage = 'Profile Image is Required'
      }
      if(!policeCertificate){
        errors.policeCertificate = 'Police Certificate is Required'
      }
      if(!driverAbs){
        errors.driverAbs = 'Driver Abstract is Required'
      }
      if(!uberRatingRep){
        errors.uberRatingRep = 'Uber Rating Report is Required'
      }
      if(!lyftRatingRep){
        errors.lyftRatingRep = 'Lyft Rating Report is Required'
      }

      if(typeof Number(yearsDrivingLyft) !== 'number'){
        errors.yearsDrivingLyft = 'Invalid Number'
      }

      if(!yearsDrivingLyft.trim()){
        errors.yearsDrivingLyft = 'Years of Driving is Required'
      }
      
      if(typeof Number(yearsDrivingUber) !== 'number'){
        errors.yearsDrivingUber = 'Invalid Number'
      } 
      if(!yearsDrivingUber.trim()){
        errors.yearsDrivingUber = 'Years of Driving is Required'
      }
      if(validInsurancePermission){
        if(!validInsurance){
          errors.validInsurance = 'Valid Insurance is Required'
        }
        if(!govId){
          errors.govId = 'Govt Id is Required'
        }
        if(reason.trim().length < 25){
          errors.reason = 'At least 25 words are required'
        }
        if(!reason.trim()){
          errors.reason = 'Reason is Required'
        }
      }
      if (Object.keys(errors).length === 0) {
        this.context.submitDataToServer()
      } else {
        this.context.thirdStepErrorsCheck(errors)
      }

    }
  }




  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }



  static contextType = DriverRegisterContext;
  render() {
    const { 
      firstStep,
      secondStep,
      thirdStep,
      firstStepErrors,
      thirdStepErrors,
      firstInputChange,
      firstDateChange,
      firstSelectChange,
      secondInputChange,
      thirdFileUpload,
      thirdInputChange,
    } = this.context
    const steps = [
      {
        title: 'Account Information',
        content: <AccountInfo firstStep={firstStep} firstStepErrors={firstStepErrors} actions={{ firstInputChange, firstDateChange, firstSelectChange }} />,
      },
      {
        title: 'Questionnaire',
        content: <Questions {...secondStep} actions={{secondInputChange}} />,
      },
      {
        title: 'When are you available to drive?',
        content: <Documents {...thirdStep} submitError={this.context.submitError} loading={this.context.isLoading} thirdStepErrors={thirdStepErrors} actions={{thirdFileUpload,thirdInputChange}} />,
      },
    ];
    const { current } = this.state;
    return (
      <div>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">
          {steps[current].content}
        </div>
        <div className='container' style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '10px' }}>
          {current < steps.length - 1 && (
            <Button type="secondary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="secondary" onClick={() => this.next()}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button type="secondary" style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    );
  }
}


export default StepForm;