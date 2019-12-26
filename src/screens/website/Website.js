import React from 'react';
import NavBar from '../../components/Navbar/NavBar';
import HeroHeader from '../../components/heroHeader/HeroHeader';
import AfterHero from '../../components/afterHero/AfterHero';
import AboutUs from '../../components/About/AboutUs';
import WhyLux from '../../components/whyLux/WhyLux';
import Team from '../../components/team/Team';
import Testimonial from '../../components/Testimonial/Testimonial';
import ContactUs from '../../components/contact-us/ContactUs';
import Partners from '../../components/partners/Partners';
// import Footer from '../../components/Footer/Footer';
const Website  = ()=> {
        return (
            <div>
                 <NavBar/>
                <HeroHeader/>
                <AfterHero/>
                <AboutUs/>
                <WhyLux/>
                {/* <Team/> */}
                {/* <Testimonial/> */}
                <ContactUs/>
                {/* <Partners/> */}
            </div>
        );
}

export default Website;