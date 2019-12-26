import React from 'react';
import './footer.css';
import logo from '../../assets/logo.png'

const Footer = () => {
    return (


        <footer name="test1" className="footer-distributed">

            <div style={{textAlign:"center"}} className="footer-left">

                <img src={logo} width='140px' height='80px' className='img img-fluid' />
                <p className="footer-company-name"> © Copyright 2019 Lux Ride, All rights reserved.</p>
            </div>

            <div className="footer-center">

                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>21 Revolution Street</span> Paris, France</p>
                </div>

                <div>
                    <i className="fa fa-phone"></i>
                    <p>+1 555 123456</p>
                </div>

                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:support@company.com">support@company.com</a></p>
                </div>

            </div>

            <div className="footer-right">

                <p className="footer-company-about">
                    <span>About the company</span>
                    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
    </p>

                <div className="footer-icons">

                    <a href="#"><i className="fab fa-facebook-square"></i></a>
                    <a href="#"><i className="fab fa-twitter-square"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>

                </div>

            </div>
            <a href='#' className="btn btn-success btn-circle  m-1"><i className="fas fa-arrow-up"></i></a>
        </footer>

    )
}

export default Footer;