import React from "react";

import logo from "../../../images/amazon-logo-white.png";
import indiaIcon from "../../../images/india.png";
import "./HeaderComponent.css";
import SearchComponent from "../SearchComponent/SearchComponent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMapMarkerAlt,
	faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import NavBarComponent from "../NavBarComponent/NavBarComponent";

const HeaderComponent = () => {
	return (
		<>
			<header className="util-flex util-center">
				<div className="nav-logo">
					<img
						className="amazon-logo"
						src={logo}
						alt="amazon-logo"
						height="29px"
					/>
					<span>.in</span>
				</div>
				<div className="location">
					<span className="location-icon">
						<FontAwesomeIcon icon={faMapMarkerAlt} />
					</span>
					<span className="nav-line-1">Deliver to Yamin</span>
					<span className="nav-line-2">Ahmedabad 380051</span>
				</div>
				<SearchComponent />
				<span className="india-icon">
					<img src={indiaIcon} alt="India" />
				</span>
				<div className="account">
					<span className="nav-account-line-1">Hello, YAMIN</span>
					<span className="nav-account-line-2">Account & Lists</span>
				</div>
				<div>
					<span className="nav-account-line-1">Returns</span>
					<span className="nav-account-line-2 returns">& Orders</span>
				</div>
				<FontAwesomeIcon icon={faShoppingCart} size="2x" />
				<span className="cart">Cart</span>
			</header>
			<span className="nav-bar">
				<NavBarComponent />
			</span>
		</>
	);
};

export default HeaderComponent;
