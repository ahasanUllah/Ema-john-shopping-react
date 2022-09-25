import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';
const Product = (props) => {
   const { product, handleAddToCart } = props;
   const { img, name, price, seller, ratings } = product;
   return (
      <div className="product">
         <img src={img} alt="" />
         <div className="product-info">
            <p className="product-name">{name}</p>
            <p className="product-price">Price: ${price}</p>
            <div className="product-bottom-info">
               <p>
                  <small>{seller}</small>
               </p>
               <p>
                  <small>Rating: {ratings} start</small>
               </p>
            </div>
         </div>
         <button className="btn-cart" onClick={() => handleAddToCart(product)}>
            <p className="btn-text">Add to cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
         </button>
      </div>
   );
};

export default Product;
