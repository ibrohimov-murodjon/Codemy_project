import React from "react";
import AboutHead from './Container/AboutHead';
import AboutText from './Container/AboutText';
import AboutBtn from './Container/AboutBtn';
import './Container/About.css'
function About() {
    return <div className='about-body'>
        <div className='about-container'>
            <div className="about-grid1">
                <AboutHead/>
            </div>
            <div className="about-grid2">
                <AboutText/>
                <AboutBtn/>
            </div>
        </div>
    </div>;
}

export default About;
