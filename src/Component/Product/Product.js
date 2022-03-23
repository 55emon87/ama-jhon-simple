import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product)
    const {handleToCart,product}=props;

    const {name,img,ratings,seller,price,ratingsCount,stock,category}=props.product;

    return (
    <div className='product' >
       <img src={img} alt="" />
       <div className="product-info">
       <p className='product-name'>{name}</p>
       <h5>Category:{category}</h5>
       <h4>Price:${price}</h4>
       <p> <small> Seller:{seller} </small> </p>
       <p> <small>Ratings:{ratings}</small> </p>
       <h5>RatingsCount: {ratingsCount} </h5>
       <h5>Stock: {stock}</h5>
       </div>
      <button onClick={()=>props.handleToCart(props.product)} className='button-cart' >
          <p className='btn-text' >Add To Cart</p>
          <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
      </button>

    </div>
    );
};

export default Product;