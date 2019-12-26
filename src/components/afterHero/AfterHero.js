import React from 'react';
import Fade from 'react-reveal/Fade';
import {Link} from'react-router-dom';
import './afterHero.css'
import heroCard from '../../assets/hero-after-card.jpg'
const AfterHero = () => {
    return (
        <div className='container mt-4' >
                    <Fade top>
            <div className="card after-hero-card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img height='100%' src={heroCard} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8" style={{backgroundColor:'#69528521'}} >
                        <div className="card-body">
                            <h5 className="card-title">Drive with Lux Ride</h5>
                            <p className="card-text text-justify">
                            We offer drivers the added benefit of registering as a business partner in the company. Drivers can register with us with or without owning a car. The company aspires to cater to a convenient, safe, reliant and feasible option to its drivers. All expense, fuel and maintenance of the car will be paid for by the company. Authorities will be dispatched at a single distress signal. Our concern is your safety and sustainability. 
                            </p>
                        <Link to='driver/form' id='about' className='btn-second' >Become a Driver</Link>
                        </div>
                    </div>
                </div>
            </div>
            </Fade>
        </div>

    )
}

export default AfterHero;