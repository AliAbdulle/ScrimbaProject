import React, { Component } from 'react';
// import TodoItem from './TodoItem';
// import todosData from "./todosData"
import randomcolor from "randomcolor";

class Apps extends Component {


    // constructor() {
    //     super()
    //     this.state = {
    //         todos: todosData
    //     }
    //     this.handleChange = this.handleChange.bind(this)
    // }
    
    // handleChange(id) {
    //     this.setState(prevState => {
    //         const updateState = prevState.todos.map(todo => {
    //             if (todo.id === id) {
    //                 return {
    //                         ...todo,
    //                         completed: !todo.completed
    //                 } 
    //             }
    //             return todo
    //         })
    //         return{
    //             todos: updateState
    //         } 
    //     })
    //     // Update state so that the item with the given id flips `completed` from false to true (or vise versa)
    //     // Remember not to modify prevState directly, but instead to return a new version of state with the change you want included in that update. (Think how you might use the `.map` method to do this)
    // }
    
    // render() {
    //     const todoItems= this.state.todos.map(item => <TodoItem key={item.id} item={item}
    //     handleChange={this.handleChange}/>)
        
    //     return (
    //         <div className="todo-list">
    //             {todoItems}
    //         </div>
    //     )    
    // }










    constructor(){
        super()
        this.state = {
            count: 0,
            color: ""
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

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !==this.state.count) {
            const newColor = randomcolor()
            this.setState({color: newColor})

        }
    }


    render() {
        return(
            <div>
                <h1 style={{color:this.state.color}}>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
                <button onClick={this.handleClicked}>Nagative!</button>
            </div>
        )
    }

}
export default Apps