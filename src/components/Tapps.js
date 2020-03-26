import React, { Component } from 'react';


class Tapps extends Component {
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
         }, 1500)
     }

     render(){
         return(
             <div>
                 <Tapps isLoading={this.state.isLoading} />
             </div>
         )
     }

}


export default Tapps;