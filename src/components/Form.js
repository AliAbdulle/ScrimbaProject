import React, { Component } from 'react';

class Form extends Component {
    state = { 
        firstName : ""
     }
    render() { 
        return ( 
            <form>
                <input type="text" placeholder="First Name" />
            </form>
         );
    }
}
 
export default Form;
