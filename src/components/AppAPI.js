import React, { Component } from 'react'
//App class
class Appapi extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }
<<<<<<< HEAD
    //loaded the data
=======
    // components added data
>>>>>>> 46fe2139efdc272e7b14e5d16506f4f25bf982e2
    componentDidMount() {
        this.setState({loading: true})
        fetch("https://swapi.co/api/people/1")
        .then(response => response.json())
        .then(data => {
            this.setState({
                loading: false,
                character: data,
                sales: ""
            })
        })
    }

    render(){
        const text =this.state.loading ? "loading...." : this.state.character.name
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
}

export default Appapi
