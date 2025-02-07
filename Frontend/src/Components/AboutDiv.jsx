import React from 'react'
import './AboutDiv.css';
import aboutdivimg from '../Images/aboutdivimg.png';
const AboutDiv = () => {
    return (
        <div className='aboutdiv'>
            <div className="col-md-8 aboutdiv-left">
                <div className="row">
                    <div className="col-md-8">
                        <span>About</span> <span>Datum</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                    Welcome to the Official Data Science Club, the ultimate destination for aspiring data scientists, analysts, and tech enthusiasts at our college. With a vision to empower the next generation of innovators, we are your gateway to exploring the transformative power of data in a collaborative and dynamic environment.</div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <button className='btn'>Read More</button>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="row">
                <img src={aboutdivimg} alt="not found" />
                </div>
            </div>
        </div>
    )
}

export default AboutDiv
