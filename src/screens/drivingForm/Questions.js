import React, { Component } from 'react';
import { Radio } from 'antd';
class Questions extends Component {


    render() {
        const {
            questionnaire_1,
            questionnaire_2,
            questionnaire_3,
            questionnaire_4,
            questionnaire_5,
            questionnaire_6,
            questionnaire_7,
            questionnaire_8
        } = this.props
        const {secondInputChange} = this.props.actions
        return (
            <div className='container-fluid' >
                <div className='row' >
                    <div className='col-sm col-md-12' >
                        <h4 className='text-center mt-3'>
                            Questionnaire
                        </h4>
                    </div>
                </div>
                <br />
                <div className='container' >
                    <div className='step-2-form' >
                        <div className='row'>
                            <div className='col-sm col-md-6 mb-4' >
                                <div className='input-label-text mb-3' >Have you had any accidents in the last 3 years?</div>
                                <Radio.Group 
                                value={questionnaire_1} 
                                name='questionnaire_1' 
                                buttonStyle="solid"
                                onChange={secondInputChange}
                                >
                                    <Radio.Button value="yes">Yes</Radio.Button>
                                    <Radio.Button value="no">No</Radio.Button>
                                </Radio.Group>
                            </div>
                            <div className='col-sm col-md-6 mb-4' >
                                <div className='input-label-text mb-3' >Have you been convicted of a DUI/OVI in the Last 10 Years?</div>
                                <Radio.Group 
                                value={questionnaire_2} 
                                name='questionnaire_2' 
                                buttonStyle="solid"
                                onChange={secondInputChange}
                                >
                                    <Radio.Button value="yes">Yes</Radio.Button>
                                    <Radio.Button value="no">No</Radio.Button>
                                </Radio.Group>
                            </div>
                        </div>
                        <hr/>
                        <div className='row'>
                            <div className='col-sm col-md-6 mb-4' >
                                <div className='input-label-text mb-3' >Do You Have 2 or More Moving Violations in the Last 3 Years?</div>
                                <Radio.Group 
                                value={questionnaire_3}
                                name='questionnaire_3' 
                                buttonStyle="solid"
                                onChange={secondInputChange}
                                >
                                    <Radio.Button value="yes">Yes</Radio.Button>
                                    <Radio.Button value="no">No</Radio.Button>
                                </Radio.Group>
                            </div>
                            <div className='col-sm col-md-6 mb-4' >
                                <div className='input-label-text mb-3' >Can You Drive Stick / Manual Shift?</div>
                                <Radio.Group 
                                value={questionnaire_4} 
                                name='questionnaire_4' 
                                buttonStyle="solid"
                                onChange={secondInputChange}
                                >
                                    <Radio.Button value="yes">Yes</Radio.Button>
                                    <Radio.Button value="no">No</Radio.Button>
                                </Radio.Group>
                            </div>
                        </div>
                        <hr/>
                        <div className='row'>
                            <div className='col-sm col-md-6 mb-4' >
                                <div className='input-label-text mb-3' >Do you have a Commercial Drivers License (CDL)?</div>
                                <Radio.Group 
                                value={questionnaire_5} 
                                name='questionnaire_5' 
                                buttonStyle="solid"
                                onChange={secondInputChange}
                                >
                                    <Radio.Button value="yes">Yes</Radio.Button>
                                    <Radio.Button value="no">No</Radio.Button>
                                </Radio.Group>
                            </div>
                            <div className='col-sm col-md-6 mb-4' >
                                <div className='input-label-text mb-3' >Are you willing to work nights and weekends?</div>
                                <Radio.Group 
                                value={questionnaire_6} 
                                name='questionnaire_6' 
                                buttonStyle="solid"
                                onChange={secondInputChange}
                                >
                                    <Radio.Button value="yes">Yes</Radio.Button>
                                    <Radio.Button value="no">No</Radio.Button>
                                </Radio.Group>
                            </div>
                        </div>
                        <hr/>
                        <div className='row'>
                            <div className='col-sm col-md-6 mb-4' >
                                <div className='input-label-text mb-3' >Have you had any previous professional driving experience?</div>
                                <Radio.Group 
                                value={questionnaire_7} 
                                name='questionnaire_7' 
                                buttonStyle="solid"
                                onChange={secondInputChange}
                                >
                                    <Radio.Button value="yes">Yes</Radio.Button>
                                    <Radio.Button value="no">No</Radio.Button>
                                </Radio.Group>
                            </div>
                            <div className='col-sm col-md-6 mb-4' >
                                <div className='input-label-text mb-3' >Have you had any previous customer service experience?</div>
                                <Radio.Group 
                                value={questionnaire_8}
                                name='questionnaire_8' 
                                buttonStyle="solid"
                                onChange={secondInputChange}
                                >
                                    <Radio.Button value="yes">Yes</Radio.Button>
                                    <Radio.Button value="no">No</Radio.Button>
                                </Radio.Group>
                            </div>
                        </div>
                    <hr/>
                    </div>
                </div>

                <br />
            </div>
        );
    }
}

export default Questions;