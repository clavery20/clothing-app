import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KRBgdLXr0m0dyErkEp9ryXttxyY1yWeWIsoZqHZMqLcX1lix4Xd4gaSeBF63w9BamzB40Ti42R2VLD0epTglmIr00bvA4c1fD'

    const onToken = token => {
        console.log(token);
        alert('Payment successful');
    }

    return (
        // Should we accept bitcoin??
        <StripeCheckout 
            label = 'Pay Now'
            name = 'Crwn Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;