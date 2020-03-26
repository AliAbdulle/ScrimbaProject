import React, { Component } from 'react'

class Apps extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClicked = this.handleClicked.bind(this)
    }
    
    handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    handleClicked() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }
    render() {
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
                <button onClick={this.handleClicked}>Nagative!</button>
            </div>
        )
    }

}
export default Apps