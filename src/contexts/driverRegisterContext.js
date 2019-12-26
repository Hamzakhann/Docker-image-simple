import React, { Component, createContext } from 'react';
import {BASE_URL}from '../Config/baseUrl';
import FormData from 'form-data';
import axios from 'axios';

export const DriverRegisterContext = createContext();

class DriverRegisterContextProvider extends Component {
    state = {
        firstStep: {
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            email: '',
            phone: '',
            password: '',
            confirmPass: '',
            province: '',
            postalCode: '',
            dob: '1-1-1995'
        },
        secondStep: {
            questionnaire_1:'no',
            questionnaire_2:'no',
            questionnaire_3:'no',
            questionnaire_4:'no',
            questionnaire_5:'no',
            questionnaire_6:'no',
            questionnaire_7:'no',
            questionnaire_8:'no',
        },
        thirdStep: {
            driverLicense:'',
            pImage : '',
            policeCertificate:'',
            driverAbs : '',
            validInsurance:'',
            govId:'',
            reason:'',
            validInsurancePermission:false,
            uberRatingRep:'',
            lyftRatingRep:'',
            yearsDrivingLyft:'',
            yearsDrivingUber:''
        },
        firstStepErrors:{
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            email: '',
            phone: '',
            password: '',
            confirmPass: '',
            province: '',
            postalCode: '',
            dob: ''
        },
        thirdStepErrors:{
            driverLicense:'',
            pImage : '',
            policeCertificate:'',
            driverAbs : '',
            validInsurance:'',
            govId:'',
            uberRatingRep:'',
            lyftRatingRep:'',
            yearsDrivingLyft:'',
            yearsDrivingUber:'',
            reason:''
    },
    isLoading:false,
    submitError :''
    }

    firstInputChange = (e) => {
        const { firstStep , firstStepErrors } = { ...this.state };
        const currentState = firstStep;
        const currentErrors = firstStepErrors
        const { name, value } = e.target
        currentState[name] = value;
        currentErrors[name] = '';
        this.setState({ firstStep: currentState, firstStepErrors:currentErrors })

    }

    firstDateChange = (e, date) => {
        const { firstStep ,firstStepErrors} = { ...this.state };
        const currentState = firstStep;
        const currentErrors = firstStepErrors
        currentState['dob'] = date
        currentErrors['dob'] = '';
        this.setState({ firstStep: currentState  , firstStepErrors:currentErrors})
    }

    firstSelectChange = (e) => {
        const { firstStep ,firstStepErrors} = { ...this.state };
        const currentState = firstStep;
        const currentErrors = firstStepErrors
        currentState['province'] = e
        currentErrors['province'] = ''
        this.setState({ firstStep: currentState ,  firstStepErrors:currentErrors })
    }
    firstStepErrorsCheck = (errors) =>{
        const { firstStepErrors } = { ...this.state };
        const currentState = firstStepErrors;
        this.setState({firstStepErrors:{...currentState,...errors}})
    }
    thirdStepErrorsCheck = (errors) =>{
        const { thirdStepErrors } = { ...this.state };
        const currentState = thirdStepErrors;
        this.setState({thirdStepErrors:{...currentState,...errors}})
    }

    secondInputChange = (e) =>{
        const { secondStep } = { ...this.state };
        const currentState = secondStep;
        const { name, value } = e.target
        currentState[name] = value;
        this.setState({ secondStep: currentState})
    }
    thirdFileUpload = (e) =>{
        const { thirdStep , thirdStepErrors } = { ...this.state };
        const currentState = thirdStep;
        const currentErrors = thirdStepErrors;
        const { name, files } = e.target
        if(name === 'validInsurance'){
            currentState[name] = files[0];
            currentErrors[name] = '';
            currentState.validInsurancePermission=true
            this.setState({ thirdStep: currentState})
        }else{
            currentState[name] = files[0];
            currentErrors[name] = '';
            this.setState({ thirdStep: currentState})
        }
    }
    thirdInputChange = (e)=>{
        const { thirdStep , thirdStepErrors } = { ...this.state };
        const currentState = thirdStep;
        const currentErrors = thirdStepErrors;
        const { name, value } = e.target;
        currentState[name] = value;
        currentErrors[name] = '';
        this.setState({ thirdStep: currentState , thirdStepErrors:currentErrors})
    }

    submitDataToServer = ()=>{
        this.setState({isLoading:true , submitError:''})
        const finalData = {...this.state.firstStep, ...this.state.secondStep, ...this.state.thirdStep}
        let data = new FormData();
        for (let i in finalData){
            data.append(i ,finalData[i])
          }
         axios.post(BASE_URL+"/api/driver/register" ,  data, {
            headers: {
              'accept': 'application/json',
              'Accept-Language': 'en-US,en;q=0.8',
              'Content-Type': `multipart/form-data; boundary=${data._boundary} `, 
            }
         
          }).then((response)=>{
              if(response.data){
                  this.setState({isLoading:false})
                  localStorage.setItem('driver',true)
                  window.location.href = '/thankyou'
              }
          }).catch((err)=>{
              console.log(err.response)
              this.setState({isLoading:false , submitError:err.response.data.error})
          })
    }
    render() {
        return (
            <DriverRegisterContext.Provider 
            value={{ 
                ...this.state, 
                firstInputChange: this.firstInputChange, 
                firstDateChange:this.firstDateChange,
                firstSelectChange:this.firstSelectChange,
                firstStepErrorsCheck:this.firstStepErrorsCheck,
                secondInputChange:this.secondInputChange,
                thirdFileUpload:this.thirdFileUpload,
                thirdInputChange:this.thirdInputChange,
                thirdStepErrorsCheck:this.thirdStepErrorsCheck,
                submitDataToServer:this.submitDataToServer
                }} >
                {this.props.children}
            </DriverRegisterContext.Provider>
        )
    }
}

export default DriverRegisterContextProvider;