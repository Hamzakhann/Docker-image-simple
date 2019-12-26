import React from 'react';
import './contact.css'

const ContactUs = () => {
    return (
        <div className='container-fluid'  >
            <div className='row' >
                <div className='col-sm-12' >
                    <h1 className='primary-sec-heading' >Contact Us</h1>
                </div>
            </div>
            <div className='main-contact' >
                <div className='contact-us-container' >
                    <div className='row' >
                        <div className='col-sm col-md-6' >
                            <div className='contact-us-left d-none d-md-block d-lg-block d-xl-block' >

                            </div>
                        </div>
                        <div className='col-sm col-md-6'  >
                            <div className='contact-us-right' >

                                <form id='c-form' >
                                    <div>
                                        <div className='input-label-text' >Full Name</div>
                                        <input type='text' className='text-input' />
                                    </div>
                                    <div>
                                        <div className='input-label-text' >Email</div>
                                        <input type='email' className='text-input' />
                                    </div>
                                    <div>
                                        <div className='input-label-text' >Message</div>
                                        <textarea className='textarea-input' ></textarea>
                                    </div>
                                    <div className='mt-3' >
                                    <button className='btn-contact' >Send a Message</button>
                                    </div>
                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactUs;