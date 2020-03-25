import React from 'react'
import JokesData from './JokesData';

function Joke(props.){
    return (
        <div> 
            <h3 style={{display: !props.JokesData.question && "none"}}> question: {props.JokesData.question}</h3>
            <h3 style={{color: !props.JokesData.question && "#888888"}}>Answer: {props.JokesData.punchLine}</h3>
            <hr/>
        </div>
    )
}

export default Joke;