import React, { Component } from 'react';
import './driving.css';
import { Skeleton, Alert } from 'antd';
class Documents extends Component {
    render() {
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
            validInsurancePermission,
            actions,
            submitError,
            loading
        } = this.props;
        const { thirdStepErrors } = this.props
        if (loading) {
            return <>
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
            </>
        } else {
            return (
                <div className='container-fluid' >
                    <div className='row' >
                        <div className='col-sm col-md-12' >
                            <h4 className='text-center mt-3'>
                                Documents Needed
                            </h4>
                          {submitError ?
                            <Alert
                                message="Submission Error"
                                description={submitError}
                                type="error"
                                closable
                            />:
                            ""
                          }  
                        </div>
                    </div>
                    <br />
                    <div className='container' >
                        <div className='step-3-form' >
                            <div className='row'>
                                <div className='col-sm col-md-4 mb-4 text-center d-flex flex-column justify-content-center align-items-center' >
                                    <div className='input-label-text mb-3' >Valid G driver’s license </div>
                                    <div class="card upload-card">
                                        <div className='image-prev' >
                                            {driverLicense ? (
                                                <img
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",

                                                    }}
                                                    className="img img-fluid"
                                                    src={URL.createObjectURL(driverLicense)}
                                                    alt="pic"
                                                />
                                            ) : (
                                                    <i class="fas fa-image upload-img-icon"></i>
                                                )}
                                        </div>
                                        <div class="card-body upload-body">
                                            <label className='upload-container' >
                                                <input
                                                    type='file'
                                                    name='driverLicense'
                                                    accept="image/x-png,image/gif,image/jpeg"
                                                    className='upload-doc'
                                                    onChange={actions.thirdFileUpload}
                                                />

                                                <i class="fas fa-plus"></i>
                                            </label>
                                        </div>
                                    </div>
                                    <small className='d-block ml-4 mb-2 mt-2 text-danger' >{thirdStepErrors.driverLicense ? thirdStepErrors.driverLicense : ''}</small>
                                </div>
                                <div className='col-sm col-md-4 mb-4 text-center d-flex flex-column justify-content-center align-items-center'>
                                    <div className='input-label-text mb-3' >Your Profile picture</div>
                                    <div class="card upload-card">
                                        <div className='image-prev' >
                                            {pImage ? (
                                                <img
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",

                                                    }}
                                                    className="img img-fluid"
                                                    src={URL.createObjectURL(pImage)}
                                                    alt="pic"
                                                />
                                            ) : (
                                                    <i class="fas fa-image upload-img-icon"></i>
                                                )}
                                        </div>
                                        <div class="card-body upload-body">
                                            <label className='upload-container' >
                                                <input
                                                    type='file'
                                                    name='pImage'
                                                    className='upload-doc'
                                                    accept="image/x-png,image/gif,image/jpeg"
                                                    onChange={actions.thirdFileUpload}
                                                />
                                                <i class="fas fa-plus"></i>
                                            </label>
                                        </div>
                                    </div>
                                    <small className='d-block ml-4 mb-2 mt-2 text-danger' >{thirdStepErrors.pImage ? thirdStepErrors.pImage : ''}</small>

                                </div>
                                <div className='col-sm col-md-4 mb-4 text-center d-flex flex-column justify-content-center align-items-center' >
                                    <div className='input-label-text mb-3' >Police Certificate</div>
                                    <div class="card upload-card">
                                        <div className='image-prev' >
                                            {policeCertificate ? (
                                                <img
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",

                                                    }}
                                                    className="img img-fluid"
                                                    src={URL.createObjectURL(policeCertificate)}
                                                    alt="pic"
                                                />
                                            ) : (
                                                    <i class="fas fa-image upload-img-icon"></i>
                                                )}
                                        </div>
                                        <div class="card-body upload-body">
                                            <label className='upload-container' >
                                                <input
                                                    type='file'
                                                    name='policeCertificate'
                                                    className='upload-doc'
                                                    accept="image/x-png,image/gif,image/jpeg"
                                                    onChange={actions.thirdFileUpload}
                                                />
                                                <i class="fas fa-plus"></i>
                                            </label>
                                        </div>
                                    </div>
                                    <small className='d-block ml-4 mb-2 mt-2 text-danger' >{thirdStepErrors.policeCertificate ? thirdStepErrors.policeCertificate : ''}</small>

                                </div>
                            </div>
                            <hr />
                            <div className='row'>
                                <div className='col-sm col-md-4 mb-4 text-center d-flex flex-column justify-content-center align-items-center' >
                                    <div className='input-label-text mb-3' >3 year Driver abstract</div>
                                    <div class="card upload-card">
                                        <div className='image-prev' >
                                            {driverAbs ? (
                                                <img
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",

                                                    }}
                                                    className="img img-fluid"
                                                    src={URL.createObjectURL(driverAbs)}
                                                    alt="pic"
                                                />
                                            ) : (
                                                    <i class="fas fa-image upload-img-icon"></i>
                                                )}
                                        </div>
                                        <div class="card-body upload-body">
                                            <label className='upload-container' >
                                                <input
                                                    type='file'
                                                    name='driverAbs'
                                                    className='upload-doc'
                                                    accept="image/x-png,image/gif,image/jpeg"
                                                    onChange={actions.thirdFileUpload}
                                                />
                                                <i class="fas fa-plus"></i>
                                            </label>
                                        </div>
                                    </div>
                                    <small className='d-block ml-4 mb-2 mt-2 text-danger' >{thirdStepErrors.driverAbs ? thirdStepErrors.driverAbs : ''}</small>

                                </div>
                                <div className='col-sm col-md-4 mb-4 text-center d-flex flex-column justify-content-center align-items-center' >
                                    <div className='input-label-text mb-3' >Uber Rating Report</div>
                                    <div class="card upload-card">
                                        <div className='image-prev' >
                                            {uberRatingRep ? (
                                                <img
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",

                                                    }}
                                                    className="img img-fluid"
                                                    src={URL.createObjectURL(uberRatingRep)}
                                                    alt="pic"
                                                />
                                            ) : (
                                                    <i class="fas fa-image upload-img-icon"></i>
                                                )}
                                        </div>
                                        <div class="card-body upload-body">
                                            <label className='upload-container' >
                                                <input
                                                    type='file'
                                                    name='uberRatingRep'
                                                    className='upload-doc'
                                                    accept="image/x-png,image/gif,image/jpeg"
                                                    onChange={actions.thirdFileUpload}
                                                />
                                                <i class="fas fa-plus"></i>
                                            </label>
                                        </div>
                                    </div>
                                    <small className='d-block ml-4 mb-2 mt-2 text-danger' >{thirdStepErrors.uberRatingRep ? thirdStepErrors.uberRatingRep : ''}</small>

                                </div>
                                <div className='col-sm col-md-4 mb-4 text-center d-flex flex-column justify-content-center align-items-center' >
                                    <div className='input-label-text mb-3' >Lyft Rating Report</div>
                                    <div class="card upload-card">
                                        <div className='image-prev' >
                                            {lyftRatingRep ? (
                                                <img
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",

                                                    }}
                                                    className="img img-fluid"
                                                    src={URL.createObjectURL(lyftRatingRep)}
                                                    alt="pic"
                                                />
                                            ) : (
                                                    <i class="fas fa-image upload-img-icon"></i>
                                                )}
                                        </div>
                                        <div class="card-body upload-body">
                                            <label className='upload-container' >
                                                <input
                                                    type='file'
                                                    name='lyftRatingRep'
                                                    className='upload-doc'
                                                    accept="image/x-png,image/gif,image/jpeg"
                                                    onChange={actions.thirdFileUpload}
                                                />
                                                <i class="fas fa-plus"></i>
                                            </label>
                                        </div>
                                    </div>
                                    <small className='d-block ml-4 mb-2 mt-2 text-danger' >{thirdStepErrors.lyftRatingRep ? thirdStepErrors.lyftRatingRep : ''}</small>
                                </div>

                            </div>
                            <hr />
                            <div className='row'>
                                <div className='col-sm col-md-4 mb-5 text-center d-flex flex-column justify-content-center align-items-center' >
                                    <div className='input-label-text mb-3' >Valid Insurance and Vehicle ownership </div>

                                    <div class="card upload-card">
                                        <div className='image-prev' >
                                            {validInsurance ? (
                                                <img
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",

                                                    }}
                                                    className="img img-fluid"
                                                    src={URL.createObjectURL(validInsurance)}
                                                    alt="pic"
                                                />
                                            ) : (
                                                    <i class="fas fa-image upload-img-icon"></i>
                                                )}
                                        </div>
                                        <div class="card-body upload-body">
                                            <label className='upload-container' >
                                                <input

                                                    type='file'
                                                    name='validInsurance'
                                                    className='upload-doc'
                                                    accept="image/x-png,image/gif,image/jpeg"
                                                    onChange={actions.thirdFileUpload}
                                                />
                                                <i class="fas fa-plus"></i>
                                            </label>
                                        </div>
                                    </div>
                                    <small className='d-block ml-4 mb-2 mt-2 text-danger' >{thirdStepErrors.validInsurance ? thirdStepErrors.validInsurance : ''}</small>
                                </div>
                                <div className='col-sm col-md-4 mb-5 text-center d-flex flex-column justify-content-center align-items-center' >
                                    <div className='input-label-text mb-3' >Second piece of government id</div>
                                    <div class="card upload-card">
                                        <div className='image-prev' >
                                            {govId ? (
                                                <img
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",

                                                    }}
                                                    className="img img-fluid"
                                                    src={URL.createObjectURL(govId)}
                                                    alt="pic"
                                                />
                                            ) : (
                                                    <i class="fas fa-image upload-img-icon"></i>
                                                )}
                                        </div>
                                        <div class="card-body upload-body">
                                            <label className='upload-container' >
                                                <input
                                                    disabled
                                                    type='file'
                                                    name='govId'
                                                    className='upload-doc'
                                                    accept="image/x-png,image/gif,image/jpeg"
                                                    onChange={actions.thirdFileUpload}
                                                />
                                                <i class="fas fa-plus"></i>
                                            </label>
                                        </div>
                                    </div>
                                    <small className='d-block ml-4 mb-2 mt-2 text-danger' >{thirdStepErrors.govId ? thirdStepErrors.govId : ''}</small>

                                </div>
                                <div className='col-sm col-md-4 mb-5 text-center d-flex flex-column justify-content-center align-items-center' >
                                    <div>
                                        <div className='input-label-text' >Years of driving on Lyft</div>
                                        <input
                                            type='number'
                                            min="1"
                                            name='yearsDrivingLyft'
                                            value={yearsDrivingLyft}
                                            className='text-input'
                                            onChange={actions.thirdInputChange}
                                        />
                                        <small className='d-block ml-4 mb-2 mt-2 text-danger' >{thirdStepErrors.yearsDrivingLyft ? thirdStepErrors.yearsDrivingLyft : ''}</small>
                                    </div>
                                    <br />
                                    <div>
                                        <div className='input-label-text' >Years of driving on Uber</div>
                                        <input
                                            type='number'
                                            min="1"
                                            name='yearsDrivingUber'
                                            value={yearsDrivingUber}
                                            className='text-input'
                                            onChange={actions.thirdInputChange}
                                        />
                                        <small className='d-block ml-4 mb-2 mt-2 text-danger' >{thirdStepErrors.yearsDrivingUber ? thirdStepErrors.yearsDrivingUber : ''}</small>
                                    </div>
                                </div>
                            </div>
                            {
                                validInsurancePermission ? (
                                    <div className='row' >
                                        <div className='col-sm col-md-8 mb-2 text-center d-flex flex-column justify-content-center align-items-center' >
                                            <div className='input-label-text' >Reason</div>
                                            <small className='text-danger' >Please Specify the reason</small>
                                            <textarea
                                                name='reason'
                                                value={reason}
                                                className='textarea-input'
                                                onChange={actions.thirdInputChange}
                                            ></textarea>
                                            <small className='d-block ml-4 mb-2 mt-2 text-danger' >{thirdStepErrors.reason ? thirdStepErrors.reason : ''}</small>

                                        </div>
                                    </div>
                                ) : ''
                            }
                        </div>
                    </div>
                </div>
            );
        }

    }
}

export default Documents;