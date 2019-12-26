import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ReactTypingEffect from 'react-typing-effect';
import StepForm from './Steps';
import './driving.css'
const DrivingForm = ()=>{
        return (
            <div className='container-fluid p-0' id='ai-page' >
                <div className='ai-service-page-background' >
                    <ReactTypingEffect
                        text="BECOME A DRIVER" //text=["Hello.", "World!"]
                        className='typed-text'
                    />
                </div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/#home" className='breadcrumb-nav'><i className="fas fa-home mr-1"></i>Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Become Driver</li>
                    </ol>
                </nav>
                <div className='container' >
                    <StepForm />
                </div>
            </div>
        );
    }

export default DrivingForm;