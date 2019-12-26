import React from 'react';
import Slider from "react-slick";
import Flip from 'react-reveal/Flip';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './hero.css';
import logo from '../../assets/logo.png'
const HeroHeader = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
    };
    return (
        <div className='container-fluid p-0' id='home' >
            <Slider {...settings} className='slider-container' >
                <div >
                    <div className='row no-gutters my-row' >
                        <div className='col-sm col-md-6 hero-left-1' >
                        </div>
                        <div className='col-sm col-md-6 hero-right' >

                            <div className='slider-text-container' >
                                <div>
                                    <Flip top >
                                        <img src={logo} className='img img-fluid carosal-logo' />
                                    </Flip>
                                </div>
                                <Flip top cascade>
                                    <h1 className='text-white text-center mt-4' >
                                        LUX RIDE
                            </h1>
                                </Flip>
                                <Flip top cascade>
                                    <p className='text-white text-center' >
                                        Join a community of developers, attend meetups and collaborate online.
                                        Join a community of developers, attend meetups and collaborate online.
                            </p>
                                </Flip>
                            </div>
                        </div>
                    </div>
                </div>





                <div  >

                    <div className='row no-gutters my-row' >
                        <div className='col-sm col-md-6 hero-left-2' >
                        </div>
                        <div className='col-sm col-md-6 hero-right' >
                            <div className='slider-text-container' >
                                <div>
                                    <img src={logo} className='img img-fluid carosal-logo' />
                                </div>
                                <h1 className='text-white text-center mt-4' >
                                    LUX RIDE
                            </h1>
                                <p className='text-white text-center' >
                                    Join a community of developers, attend meetups and collaborate online.
                                    Join a community of developers, attend meetups and collaborate online.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div  >

                    <div className='row no-gutters my-row' >
                        <div className='col-sm col-md-6 hero-left-3' >
                        </div>
                        <div className='col-sm col-md-6 hero-right' >
                            <div className='slider-text-container' >
                                <div>
                                    <img src={logo} className='img img-fluid carosal-logo' />
                                </div>
                                <h1 className='text-white text-center mt-4' >
                                    LUX RIDE
                            </h1>
                                <p className='text-white text-center' >
                                    Join a community of developers, attend meetups and collaborate online.
                                    Join a community of developers, attend meetups and collaborate online.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    )
}

export default HeroHeader;