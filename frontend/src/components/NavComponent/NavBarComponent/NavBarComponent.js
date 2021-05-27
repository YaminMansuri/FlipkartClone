import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import SearchComponent from "../../NavComponent/SearchComponent/SearchComponent";

import "./NavBarComponent.css";

const NavBarComponent = () => {
	return (
		<div className="nav-bar-container">
			<nav className="nav-bar util-flex">
				<Link to="/" className="logo">
					Flipkart
				</Link>
				<SearchComponent />
				<span className="cart">
					<FontAwesomeIcon icon={faShoppingCart} className="icon-cart" />
					<span>Cart</span>
				</span>
			</nav>
		</div>
	);
};

export default NavBarComponent;
