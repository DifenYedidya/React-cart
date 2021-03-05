import React from 'react';
import "../styles/Product.css";

function Product (props) {
    return(
        <div className="product" onClick={() => props.onClickHandler()}>
            <h1>{props.data.name}</h1>
            <p>Rp. 30000</p>
        </div>
    );
}

export default Product;