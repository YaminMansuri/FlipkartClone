import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBarComponent.css";

const NavBarComponent = () => {
	return (
		<nav className="nav util-flex util-center ">
			<ul className="util-flex util-space-between">
				<li>
					<NavLink to="/" className="inactive" activeClassName="active">
						All
					</NavLink>
				</li>
				<li>
					<NavLink to="/fresh" className="inactive" activeClassName="active">
						Fresh
					</NavLink>
				</li>
				<li>
					<NavLink to="/best-sellers" className="inactive" activeClassName="active">
						Best Sellers
					</NavLink>
				</li>
				<li>
					<NavLink to="/prime" className="inactive" activeClassName="active">
						Prime
					</NavLink>
				</li>
				<li>
					<NavLink to="/yamin's-amazon.in" className="inactive" activeClassName="active">
						YAMIN'S Amazon.in
					</NavLink>
				</li>
				<li>
					<NavLink to="/amazon-pay" className="inactive" activeClassName="active">
						Amazon Pay
					</NavLink>
				</li>
				<li>
					<NavLink to="/mobiles" className="inactive" activeClassName="active">
						Mobiles
					</NavLink>
				</li>
				<li>
					<NavLink to="/todays-deals" className="inactive" activeClassName="active">
						Today's Deals
					</NavLink>
				</li>
				<li>
					<NavLink to="/buy-again" className="inactive" activeClassName="active">
						Buy Again
					</NavLink>
				</li>
				<li>
					<NavLink to="/customer-service" className="inactive" activeClassName="active">
						Customer Service
					</NavLink>
				</li>
				<li>
					<NavLink to="/new-releases" className="inactive" activeClassName="active">
						New Releases
					</NavLink>
				</li>
				<li>
					<NavLink to="/electronics" className="inactive" activeClassName="active">
						Electronics
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavBarComponent;
