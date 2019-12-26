import React from 'react';
import Fade from 'react-reveal/Fade';
import './why.css'
const WhyLux = () => {

    return (
        <div className='container-fluid whylux-container' >
            <div className='row' >
                <div className='col-sm-12' >
                    <div className='primary-sec-heading'>
                        <h1 className='text-white' >Why Choose Us</h1>
                        <br />
                    </div>
                </div>
            </div>
            <div className='container' >
                <div className='row ' >
                    <div className='col-sm col-md-4 d-flex justify-content-center mt-3' >
                    <Fade up  >
                        <div
                            class="card bg-light mb-3 why-card" style={{ maxWidth: '18rem' }}>
                            <div class="card-header why-card-header"><span className='why-icon-box' ><i class="fas fa-dollar-sign"></i></span></div>
                            <div class="card-body why-card-body">
                                <h6 class="card-title">Earn with less overheads</h6>
                                {/* <p class="card-text">Drive with Bolt and earn extra income..</p> */}
                            </div>
                        </div>
                        </Fade>
                    </div>
                    <div className='col-sm col-md-4 d-flex justify-content-center mt-3' >
                    <Fade down  >
                        <div
                            class="card bg-light mb-3  why-card" style={{ maxWidth: '18rem' }}>
                            <div class="card-header why-card-header"><span className='why-icon-box' ><i class="far fa-clock"></i></span></div>
                            <div class="card-body why-card-body">
                                <h6 class="card-title">Maximize ride share potentials</h6>
                                {/* <p class="card-text">Work with your own schedule. No minimum hours and no boss.</p> */}
                            </div>
                        </div>
                        </Fade>
                    </div>
                    <div className='col-sm col-md-4 d-flex justify-content-center mt-3' >
                    <Fade up>
                        <div
  
                            class="card bg-light mb-3 why-card" style={{ maxWidth: '18rem' }}>
                            <div class="card-header why-card-header">
                                <span className='why-icon-box' ><i class="fas fa-receipt"></i></span>

                            </div>
                            <div class="card-body why-card-body">
                                <h6 class="card-title">No risk, you only pay when you earn.</h6>
                                {/* <p id='team' class="card-text">No risk, you only pay when you earn.</p> */}
                            </div>
                        </div>
                        </Fade>
                    </div>
                </div>
            </div>
            <br />
            <br />
        </div>
    )
}


export default WhyLux;



