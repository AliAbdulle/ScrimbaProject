import React, { Component } from 'react';


class Conditional extends Component {
    constructor(){
        super()
        this.state = {
            isLoading: true
        }
    }
     componentDidMount(){
         setTimeout(() => {
            this.setState({
                isLoading: false
            })
         })
     }

}


export default Conditional;