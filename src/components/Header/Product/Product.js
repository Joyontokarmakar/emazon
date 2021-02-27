import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {img, name, seller, price, stock} = props.product
    return (
        <div className="product">
            <div>
                <img className="product_img" src={img} alt=""/>
            </div>
            <div>
                <h4 className="product_name">{name}</h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>$ {price}</p>
                <p><small>Only <b>{stock}</b> left in stock - Order Soon</small></p>
                <button className="cart_btn" onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;