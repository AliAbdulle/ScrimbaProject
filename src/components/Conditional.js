import React from 'react';


function Conditional(props) {
    return (

        //Div display conditional render
        <div>
            {props.isLoading ? <h1>Is Loading.....</h1> : <h1> Some cool stuff about conditional rendering</h1>}
        </div>
    )
    // if(props.isLoading === true) {
    //     return (
    //         <h1>Is Loading.....</h1>
    //     )
    // }
    // else {

    //     return (
    //         <h1> Some cool stuff about conditional rendering</h1>
    //     )
    // }
    }

export default Conditional;