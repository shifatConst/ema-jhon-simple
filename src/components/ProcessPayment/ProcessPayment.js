import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IeDEqSHkwv7z42TUgFPBo7U8UbXWw1ZRbNbI5e9T6pfV8fedpS1Ivv8RBbyuSiqsURd3ou8rUBukH1SrMsvFlNn00YCPC0yH0');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;