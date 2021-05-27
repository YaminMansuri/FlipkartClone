import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./RightProductDetailComponent.css";

const RightProductDetailComponent = (props) => {
	const { product } = props;

	return (
		<div className="right-container">
			<h1 className="right__product-name">{product.productName}</h1>
			<div className="right__product-price">₹{product.productPrice}</div>

			<span className="product-ratings">
				{product.productRatings}
				<FontAwesomeIcon icon={faStar} className="faStar" />
			</span>

			<div className="right__product-highlight-container">
				<div className="right__label-product">PRODUCT HIGHLIGHTS</div>
				<div className="right__product-highlights right__product-line-height">
					{product.productHighlights.map((productHighlight) => {
						return (
							<ul>
								<li>{productHighlight}</li>
							</ul>
						);
					})}
				</div>
			</div>

			<div className="right__label-product">PRODUCT DETAILS</div>
			<div className="right__product-details right__product-line-height">
				{product.productDetail}
			</div>
		</div>
	);
};

export default RightProductDetailComponent;
