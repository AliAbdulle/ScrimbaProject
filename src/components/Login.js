import React, { Component } from 'react';

class Login extends Component {
    constructor(){
        super()
        this.state = {
            isLoggedIn : true
        }
        this.handleChanged = this.handleChanged.bind(this)
    }
    handleChanged(){
        this.setState(prevState => {
                return{
                    isLoggedIn: !prevState.isLoggedIn
                }
        })
    }

    render(){
        let textWritten = this.state.isLoggedIn ? "Logout" : "Login"
        let textDisplay = this.state.isLoggedIn ? "Logged in" : "Logged out"
        return (
            <div>
                <button className="log" onClick={this.handleChanged}>{textWritten}</button>
                
            </div>
        )
    }
}

export default Login;