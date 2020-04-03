import React, { Component } from 'react';
import Conditional from './Conditional';


class Tapps extends Component {
    constructor(){
        super()
        this.state = {
            isLoading: true
        }
    }
    // cponenets did mount loaded the page
     componentDidMount(){
         setTimeout(() => {
            this.setState({
                isLoading: false
            })
         }, 1500)
     }

     render(){
         return(
             <div>
                 <Conditional isLoading={this.state.isLoading} />
             </div>
         )
     }

}


export default Tapps;