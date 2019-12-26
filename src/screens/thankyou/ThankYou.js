import React from 'react';
import { Result, Button } from 'antd';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png';
function ThankYou(props) {
    return (
        <>
        <div className='container d-flex justify-content-center align-items-center '>
        <img className='img img-fluid' src={logo} />
        </div>
        <Result
        status="success"
        title="Successfully Registered"
        subTitle="Thank you for registered we will get back to you soon"
        extra={[
          <Link to='/'>
            Go Back
          </Link>
        ]}
      />
        </>
        
    );
}

export default ThankYou;