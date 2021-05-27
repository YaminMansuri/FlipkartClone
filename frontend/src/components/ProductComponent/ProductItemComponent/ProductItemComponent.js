import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

import "./ProductItemComponent.css";

const ProductItemComponent = (props) => {
	const { product } = props;
	return (
		<div className="product-item">
			<Link to={`product/${product._id}`} className="link">
				<img
					className="product-image"
					src={product.productImage}
					alt={product.productName}
				/>
				<div className="product-name">{product.productName}</div>
				<div>
					<span className="product-ratings">
						{product.productRatings}
						<FontAwesomeIcon icon={faStar} className="faStar" />
					</span>
				</div>
				<div className="product-price">From ₹{product.productPrice}</div>
			</Link>
		</div>
	);
};

export default ProductItemComponent;
