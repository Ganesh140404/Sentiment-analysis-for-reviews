import React, { Component } from "react";
import "./Login.css";
import Navbar from "./Navbar";
class Login extends Component {
    render() {
        return (
            <div>
                <Navbar />
            <div className="login-container">
                <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
            </div>
        );
    }
}

export default Login;
