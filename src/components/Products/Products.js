import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Products.css';
import { Link } from 'react-router-dom';

const Products = (props) => {
    // console.log(props.products);
    const { name, img, seller, price, stock, key } = props.products;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-information'>
                <h3 className="product-name"><Link to={"/products/" + key}>{name}</Link></h3>
                <p>by: {seller}</p>
                <h3>${price}</h3>
                <p>only {stock} left in stock - order soon</p>
                {props.showAddToCart && <button
                    onClick={() => props.handleAddItems(props.products)}
                    className="cart-button">
                    <FontAwesomeIcon icon={faShoppingCart} />
                add to cart
                </button>}
            </div>
        </div>

    );
};

export default Products;