import React from 'react';
import Fade from 'react-reveal/Fade';
import './about.css'
import safety from '../../assets/safety.png'

const AboutUs = () => {
    return (
        <div className='container-fluid about-main-background' >
            <div className='row' >
                <div className='col-sm-12' >
                    <h1 className='primary-sec-heading' >About Us</h1>
                </div>
            </div>
            <div className='container' >
                <div className='row' >
                    <div className='col-sm col-md-6' >
                        <div className='about-img-grid' >
                            <div className='img-grid-child' >
                                <Fade top cascade>
                                <img src='https://d125fmws0bore1.cloudfront.net/webpack/production/app/components/AboutUs/assets/mission/thumb-03.jpg' className='grid-img mt-5' />
                                </Fade>
                                <Fade top cascade>
                                <img src='https://d125fmws0bore1.cloudfront.net/webpack/production/app/components/AboutUs/assets/mission/thumb-04.jpg' className='grid-img' />
                                </Fade>
                            </div>
                            <div className='img-grid-child' >
                            <Fade bottom cascade>
                                <img src='https://d125fmws0bore1.cloudfront.net/webpack/production/app/components/AboutUs/assets/mission/thumb-04.jpg' className='grid-img' />
                                </Fade>
                                <Fade bottom cascade>
                                <img src='https://d125fmws0bore1.cloudfront.net/webpack/production/app/components/AboutUs/assets/mission/thumb-03.jpg' className='grid-img mt-n5' />
                          </Fade>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm col-md-6' >
                        <div className='mission-container' >
                            <div className='mission-box' >
                                <h3 className='text-white' >Lux Ride Objectives</h3>
                                <p className='text-white text-justify' >
                                Lux Car Service is the newest car service which aims to provide luxurious, comfortable, and efficient journey to its passengers. It is the new elevated riding experience available at a single click.
                                We strive to bring you the highest quality riding experience with capable, expert drivers and a range of deluxe car options to ensure a smooth and secure travel.
                            </p>
                            </div>
                        </div>
                        <div class="arrow bounce">
                            <a class="fa fa-arrow-down fa-2x" href="#story"></a>
                        </div>
                    </div>

                </div>
            </div>
            <div className='container'  >
                <div className='safety-container' >
                        <div className='about-side-text' >
                            <h3>Safety & Security</h3>
                        <p>
                        What distinguishes our company among the others is the superb quality of our vehicles. Carrying our policy of transparency over to the quality of our luxury cars, we assure you that none of our cars are over three years old, and have no hidden damages in either mechanism or design. Each of our cars is equipped with a tablet with unlimited internet access, dash cam footage with coverage inside and outside the vehicle. Along with that, any SOS call will directly be dispatched to the authorities.
                        </p>
                        </div>


                        <div className='p-3' >
                            <img src={safety} className='img img-fluid img-safety' />
                        </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;






// For our passengers safety, we choose only the top tier drivers, with high ratings on previous ride sharing apps and a stellar driving record. Each driver is screened so that you can rest easy and ride safely.