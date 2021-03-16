import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItems/ReviewItem';
import happyImage from '../../images/giphy.gif'

const Review = () => {
    const [cart, setCart] = useState([]);
    const [placeOrder, setPlaceOrder] = useState(false);
    const history = useHistory();
    const handleCheckout = () => {
        history.push('/shipment');
    }

    const removeCart = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    let thankYou;
    if(placeOrder){
        thankYou = <img src={happyImage} alt=""/>
    }
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product
        });
        setCart(cartProducts);
    }, [])
    return (
        <div className="twin-container">
            <div className="products-container">
                {
                    cart.map(pd =>
                        <ReviewItem
                            removeCart={removeCart}
                            product={pd}
                            key={pd.key}>
                        </ReviewItem>)
                }
                { thankYou }
            </div>
            <div>
                <Cart cart={cart}>
                    <button onClick={handleCheckout}>Proceed Checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;