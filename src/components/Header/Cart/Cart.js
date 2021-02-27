import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;

    // total price calculate
    // const total = cart.reduce( (total, prd) => total+prd.price ,0)
    let total = 0;
    for(let i =0; i<cart.length; i++){
        const product = cart[i];
        total = total+product.price
    }

    // Shipping cost calculate
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99
    }

    // tax calculate
    const tax = (total/10).toFixed(2);

    // Grand Total Calculate
    const grandTotal = (total + shipping + Number(tax)).toFixed(2)
    return (
        <div className="order_details">

            <div className="order_head">
                <h3>Order Summery</h3>
                <p>Items Ordered: {cart.length}</p>
            </div>

            <p>Product Price: <span>{total.toFixed(2)}</span></p>
            <p>Shipping Cost: <span>{shipping}</span></p>
            <p>Tax + VAT: <span>{tax}</span></p>
            <p>Total Price: <span>{grandTotal}</span></p>
        </div>
    );
};

export default Cart;