import React from 'react';
import currency from 'react-currency-format';


function Product(props) {
    const currency = require('react-currency-format')
    return (
        <div>
            <h2>{props.product.name}</h2>
            <p>{props.product.price}
            - {props.product.description} </p>
        </div>
    )
}

export default Product;