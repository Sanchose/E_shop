import React from 'react';
import "./Product.css"

function Product() {
    return (
        <div className="product">
            <div className="product_info">
                <p>Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>30</strong>
                </p>
                <div className='product_rating'>⭐⭐ </div>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" alt="product-image" />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
