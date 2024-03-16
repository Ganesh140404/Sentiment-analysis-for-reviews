import React, { Component } from "react";
import "./Navbar.css";
import profile from "./profile-icon.png";
class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><a href="#" className="active">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                    <li className="profile-icon"><a href="#"><img src={profile} /></a></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
