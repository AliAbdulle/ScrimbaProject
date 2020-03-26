import React, { Component } from 'react'

class Apps extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }
    
    handleClick() {
        this.setState
    }
    render() {
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this}>Change!</button>
            </div>
        )
    }

}
export default Apps