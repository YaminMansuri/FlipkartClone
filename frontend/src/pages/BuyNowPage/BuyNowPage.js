import React from "react";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import products from "../../data";

import "./BuyNowPage.css";

const BuyNowPage = (props) => {
	const product = products.find((product) => {
		console.log(props);
		return product._id === props.match.params.id;
	});

	console.log(product);

	return (
		<>
			<div className="util-flex">
				<CardComponent marginSide10="margin-side-10">
					<div className="buy-now-page__title">ORDER SUMMARY</div>
					<div className="buy-now-page__container util-flex">
						<div className="buy-now-page__img-container">
							<img src={product.productImage} alt={product.productName} />
						</div>
						<div className="buy-now-page__order-details-container">
							<div className="buy-now-page__product-name">
								{product.productName}
							</div>
							<div className="buy-now-page__product-price">
								₹{product.productPrice}
							</div>
						</div>
					</div>
				</CardComponent>
				<CardComponent marginSide10="margin-side-10">
					<div className="buy-now-page__title">PRICE DETAILS</div>
					<div className="buy-now-page__container">
						<div className="util-flex util-space-between">
							<span>Price</span>
							<span>{product.productPrice}</span>
						</div>
						<div className="util-flex util-space-between">
							<span>Delivery Charges</span>
							<span>Free</span>
						</div>
						<div className="util-flex util-space-between">
							<span>Total Payable</span>
							<span>{product.productPrice}</span>
						</div>
					</div>
				</CardComponent>
			</div>
			<div className="btn">
				<ButtonComponent
					product={product}
					orangeBtn="orange-btn"
					widthAuto="width-auto"
					path={`order-placed/${product._id}`}
				>
					PLACE YOUR ORDER
				</ButtonComponent>
			</div>
		</>
	);
};

export default BuyNowPage;
