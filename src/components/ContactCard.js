import React from 'react';

function ContactCard(props) {
    return (
        <div className="contact-card">
            <img onChange={()=> console.log("Hovered")} src={props.imgUrl} alt="doil"/>
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}

export default ContactCard;