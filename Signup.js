import React, { Component } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
class Signup extends Component {
    render() {
        return (
            <div>
                <Navbar />
            <div className="signup-container">
                
                <h2>Sign Up</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password:</label>
                        <input type="password" id="confirm-password" name="confirm-password" />
                    </div>
                    <div className="form-group">
                        <ul>
                        <li><button type="submit">Sign Up</button></li>
                        <li><Link to="/login"><button type="submit">Login</button></Link></li>
                        </ul>
                    </div>
                </form>
            </div>
            </div>
        );
    }
}

export default Signup;
