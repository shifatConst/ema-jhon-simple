import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Products from '../Products/Products';

const ProductDetails = () => {
    const {productKey} = useParams();
    const [product, setProduct] = useState({});
    useEffect(() =>{
        fetch('https://obscure-mountain-57384.herokuapp.com/product/'+ productKey)
        .then(res => res.json())
        .then(data => setProduct(data));
    },[productKey]);
    return (
        <div>
            <h1>Your product details: </h1>
            <Products showAddToCart={false} products={product}></Products>
        </div>
    );
};

export default ProductDetails;