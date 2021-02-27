import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, pd) => total + pd.price, 0);
    // let total = 0;
    // for(let i = 0; i < cart.length; i++){
    //     const product = cart[i];
    //     total = total + product.price;
    // }

    let shipping = 0;
    if(total > 35){
        shipping = 0; 
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }
    const tax = total / 10;
    const roundNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h3>Order Summery</h3>
            <p>Items ordered: {cart.length}</p>
            <p>Product price: {roundNumber(total)}</p>
            <p>Tax and VAT: {tax}</p>
            <p><small>Shipping cost: {shipping}</small></p>
            <p><b>Total: {total + shipping + tax}</b></p>
        </div>
    );
};

export default Cart;