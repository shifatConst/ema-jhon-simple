import React from 'react';

const ReviewItem = (props) => {
    const {key, name, quantity, price} = props.product;
    // console.log(props.product);
    const reviewItemStyle = {
        borderBottom: '1px solid gray',
        marginBottom: '10px',
        paddingBottom: '10px',
        marginLeft: '100px'
    }
    return (
        <div style={reviewItemStyle}>
            <h4>{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>{price}</small></p>
            <br/>
            <button
            onClick={() => props.removeCart(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;