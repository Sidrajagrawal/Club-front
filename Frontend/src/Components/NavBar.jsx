import React from 'react'
import './NavBar.css';
import Logo1 from '../Images/Logo1.png';

const NavBar = () => {
    return (
        <div>
            <div className="row nav">
                <div className="col-md-4">
                    <div className="logo">
                        <img src={Logo1} alt="Logo" />
                        <p>DATUM</p>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="menu">
                        <ul>
                            <li className="li">ABOUT</li>
                            <li className="li">EVENTS</li>
                            <li className="li">TEAM</li>
                            <li className="li">CONTACT</li>
                        </ul>
                    </div>
                    .
                </div>
            </div>
        </div>
    )
}

export default NavBar
