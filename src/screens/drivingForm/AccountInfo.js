import React, { Component } from 'react';
import moment from 'moment';
import {
    DatePicker,
    Select,
  } from 'antd';
import './driving.css'
const { Option } = Select;
class AccountInfo extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { firstName, 
                lastName,
                address, 
                city , 
                email,
                phone ,
                password,
                confirmPass,
                province,
                postalCode,
                dob
            }  = this.props.firstStep;
        const {firstDateChange , firstInputChange , firstSelectChange} = this.props.actions;
        const {firstStepErrors} = this.props
        console.log('errors' ,firstStepErrors)
        return (
            <div className='container-fluid' >
                <div className='row' >
                    <div className='col-sm col-md-12' >
                        <h4 className='text-center mt-3'>
                            Account Information
                        </h4>
                    </div>
                </div>
                <br />
                <div className='container' >
                    <div className='step-1-form' >
                        <div className='row'>
                            <div className='col-sm col-md-6' >
                                <div className='input-label-text' >First Name</div>
                                <input 
                                type='text' 
                                name='firstName' 
                                value={firstName} 
                                className='text-input'
                                onChange={firstInputChange}
                                />
                                <small className='d-block ml-4 mb-2 text-danger' >{firstStepErrors.firstName ? firstStepErrors.firstName : ''}</small>
                            </div>
                            <div className='col-sm col-md-6' >
                                <div className='input-label-text' >Last Name</div>
                                <input 
                                type='text' 
                                name='lastName' 
                                value={lastName} 
                                className='text-input'
                                onChange={firstInputChange}
                                />
        <small className='d-block ml-4 mb-2 text-danger' >{firstStepErrors.lastName ? firstStepErrors.lastName : ''}</small>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm col-md-6' >
                                <div className='input-label-text' >Address</div>
                                <input 
                                type='text' 
                                name='address' 
                                value={address}
                                className='text-input'
                                onChange={firstInputChange}
                                />
                                <small className='d-block ml-4 mb-2 text-danger' >{firstStepErrors.address ? firstStepErrors.address : ''}</small>
                            </div>
                            <div className='col-sm col-md-6' >
                                <div className='input-label-text' >City</div>
                                <input 
                                type='text' 
                                name='city' 
                                value={city} 
                                className='text-input'
                                onChange={firstInputChange}
                                />
                                <small className='d-block ml-4 mb-2 text-danger' >{firstStepErrors.city ? firstStepErrors.city : ''}</small>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm col-md-6' >
                                <div className='input-label-text' >Email</div>
                                <input
                                type='email' 
                                name='email' 
                                value={email} 
                                className='text-input'
                                onChange={firstInputChange}
                                />
                                <small className='d-block ml-4 mb-2 text-danger' >{firstStepErrors.email ? firstStepErrors.email : ''}</small>
                            </div>
                            <div className='col-sm col-md-6' >
                                <div className='input-label-text' >Phone</div>
                                <input 
                                type='text' 
                                name='phone' 
                                value={phone} 
                                className='text-input' 
                                onChange={firstInputChange}
                                />
                                <small className='d-block ml-4 mb-2 text-danger' >{firstStepErrors.phone ? firstStepErrors.phone : ''}</small>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm col-md-6' >
                                <div className='input-label-text' >Password</div>
                                <input 
                                type='password' 
                                name='password' 
                                value={password} 
                                className='text-input' 
                                onChange={firstInputChange}
                                />
                                <small className='d-block ml-4 mb-2 text-danger' >{firstStepErrors.password ? firstStepErrors.password : ''}</small>
                            </div>
                            <div className='col-sm col-md-6' >
                                <div className='input-label-text' >Confirm Password</div>
                                <input 
                                type='password' 
                                name='confirmPass' 
                                value={confirmPass} 
                                className='text-input' 
                                onChange={firstInputChange}
                                />
                                <small className='d-block ml-4 mb-2 text-danger' >{firstStepErrors.confirmPass ? firstStepErrors.confirmPass : ''}</small>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm col-md-6' >
                                <div className='input-label-text' >Province</div>
                                <span className='c-select' >
                                    <Select
                                    name='province' 
                                    value={province} 
                                    style={{ width: '100%' }}
                                    onChange={(value)=>firstSelectChange(value)}
                                    >
                                        <Option value="Nunavut"> Nunavut</Option>
                                        <Option value="Quebec">Quebec</Option>
                                        <Option value="Northwest_Territories">Northwest Territories</Option>
                                        <Option value="Ontario">Ontario</Option>
                                        <Option value="British_Columbia">British Columbia</Option>
                                        <Option value="Alberta">Alberta</Option>
                                        <Option value="Saskatchewan">Saskatchewan</Option>
                                        <Option value="Manitoba">Manitoba</Option>
                                        <Option value="Yukon">Yukon</Option>
                                        <Option value="Newfoundland_and_Labrador">Newfoundland and Labrador</Option>
                                        <Option value="New_Brunswick">New Brunswick</Option>
                                        <Option value="Nova_Scotia">Nova Scotia</Option>
                                        <Option value="Prince_Edward_Island">Prince Edward Island</Option>
                                    </Select>
                                </span>
                                <small className='d-block ml-4 mb-2 text-danger' >{firstStepErrors.province ? firstStepErrors.province : ''}</small>
                            </div>
                            <div className='col-sm col-md-6' >
                                <div className='input-label-text' >Postal Code</div>
                                <input 
                                type='text'
                                name='postalCode' 
                                value={postalCode} 
                                className='text-input' 
                                onChange={firstInputChange}
                                />
                                <small className='d-block ml-4 mb-2 text-danger' >{firstStepErrors.postalCode ? firstStepErrors.postalCode : ''}</small>
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-sm col-md-6' >
                                <div className='input-label-text' >Date Of Birth</div>
                                <span className='c-date-picker' >
                                    <DatePicker
                                    name='dob' 
                                    value={moment(dob)}
                                    size='large' 
                                    style={{ width: '100%' }}
                                    onChange={(date, dateString)=>firstDateChange(date, dateString)} 
                                    />
                                </span>
                                <small className='d-block ml-4 mb-2 text-danger' >{firstStepErrors.dob ? firstStepErrors.dob : ''}</small>
                            </div>
                            <div className='col-sm col-md-6' >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AccountInfo;