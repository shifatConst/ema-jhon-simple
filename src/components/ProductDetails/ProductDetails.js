import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Products from '../Products/Products';

const ProductDetails = () => {
    const {productKey} = useParams();
    const product = fakeData.find(pd => productKey === pd.key);
    // console.log(product);
    return (
        <div>
            <h1>Your product details: </h1>
            <Products showAddToCart={false} products={product}></Products>
        </div>
    );
};

export default ProductDetails;