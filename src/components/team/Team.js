import React from 'react';
import Slide from 'react-reveal/Slide';
import './team.css'
import team1 from '../../assets/team-img.jpg';
import team2 from '../../assets/team-img-2.jpg';
import team3 from '../../assets/team-img-3.jpg';
const Team = () => {
    return (
        <div className='container-fluid team-container' >
            <div className='row' >
                <div className='col-sm-12' >
                    <h1 className='primary-sec-heading' >Our Team</h1>
                </div>
            </div>
            <br/>
            <br/>
            <div className='container' >
                <div className='row' >
                <Slide left>
                    <div className='col-sm col-md-4 mt-4' >
        
                        <div class="card text-center">
                            <div class="card-header">
                                <div className='team-img-container' >
                                    <img src={team1}  className='img img-fluid' />
                                </div>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title font-weight-bold">Nasir</h4>
                                <p class="card-text">
                                    "Ultimately, Lux is what really became the driving force behind the career change.”
                                </p>
                                <h6 className='font-weight-bold' >CEO</h6>
                            </div>
                            <div class="card-footer text-muted">
                                <div className='team-social-icons' >
                                    <span className='s-icon mr-2' ><i class="fab fa-facebook"></i></span>
                                    <span className='s-icon ml-2' ><i class="fab fa-linkedin"></i></span>
                                </div>
                            </div>
                        </div>
             
                    </div>
                    </Slide>
                    <Slide bottom>
                    <div className='col-sm col-md-4 mt-4' >
      
                        <div class="card text-center">
                            <div class="card-header">
                                <div className='team-img-container' >
                                    <img src={team2}  className='img img-fluid' />
                                </div>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title font-weight-bold">Mishal</h4>
                                <p class="card-text">
                                    "Ultimately, Lux is what really became the driving force behind the career change.”
                                </p>
                                <h6 className='font-weight-bold' >CTO</h6>
                            </div>
                            <div class="card-footer text-muted">
                                <div className='team-social-icons' >
                                    <span className='s-icon mr-2' ><i class="fab fa-facebook"></i></span>
                                    <span className='s-icon ml-2' ><i class="fab fa-linkedin"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Slide>
                    <Slide right>
                    <div className='col-sm col-md-4 mt-4' >
                        <div class="card text-center">
                            <div class="card-header">
                                <div className='team-img-container' >
                                    <img src={team3}  className='img img-fluid' />
                                </div>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title font-weight-bold">Shahzad</h4>
                                <p class="card-text">
                                    "Ultimately, Lux is what really became the driving force behind the career change.”
                                </p>
                                <h6 className='font-weight-bold' >Manager</h6>
                            </div>
                            <div class="card-footer text-muted">
                                <div className='team-social-icons' >
                                    <span className='s-icon mr-2' ><i class="fab fa-facebook"></i></span>
                                    <span className='s-icon ml-2' ><i class="fab fa-linkedin"></i></span>
                                </div>
                            </div>
                        </div>
   
                    </div>
                    </Slide>      
                </div>

            </div>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default Team;