import React, { Component } from 'react';

class Login extends Component {
    constructor(){
        super()
        this.state = {
            isLoggedIn : true
        }
    }

    render(){
        return (
            <div>
                <button className="log">Log In</button>
            </div>
        )
    }
}

export default Login;