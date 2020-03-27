import React from 'react';


function Conditional(props) {
    if(props.isLoading) {
        return (
            <h1>Is Loading.....</h1>
        )
    }
    else {

        return (
            <h1> Some cool stuff about conditional rendering</h1>
        )
    }
    }

export default Conditional;