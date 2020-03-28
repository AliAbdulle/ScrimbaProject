import React, { Component } from 'react'

class AppAPI extends Component {
    constructor() {
        super()
        this.setState = {

        }
    }
    
    componentDidMount() {
        fetch("https://swapi.co/api/people/1")
        .then(response => response.json())
        .then(data => console.log(data))
    }

    render(){
        return (
            <div>
                Code goes here
            </div>
        )
    }
}

export default AppAPI
