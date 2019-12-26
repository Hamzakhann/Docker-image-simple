import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Website from '../screens/website/Website';
import DrivingForm from '../screens/drivingForm/DrivingForm';
import ThankYou from '../screens/thankyou/ThankYou';
import Faq from '../screens/faq/Faq';
const Routes = () => {
    return (
        <Router>
            <div>
                <Route axact path="/" exact component={Website} />
                <Route axact path='/faq' exact component={Faq} />
                <Route axact path='/driver/form' exact component ={DrivingForm}/>
                <Route axact path='/thankyou' exact component ={ThankYou}/>
            </div>
        </Router>
    )
}

export default Routes;