import React from "react";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import CardComponent from "../../components/CardComponent/CardComponent";

import "./OrderPlacedPage.css";

const OrderPlacedPage = () => {
	return (
		<>
			<CardComponent>
				<div className="buy-now-page__title">ORDER DETAILS</div>
				<div className="buy-now-page__container">
					Your order has been placed
				</div>
			</CardComponent>
			<div className="back-to-home-btn">
				<ButtonComponent orangeBtn="orange-btn">Back to Home</ButtonComponent>
			</div>
		</>
	);
};

export default OrderPlacedPage;
