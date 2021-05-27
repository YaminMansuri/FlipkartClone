import { faSearch, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./SearchComponent.css";

const SearchComponent = () => {
	return (
		<div className=" util-flex">
			<span className="search util-flex">
				<select className="category ">
					<option className="category">All</option>
					<option>Deals</option>
					<option>Shirts</option>
					<option>Beauty products</option>
				</select>
				<span className="custom-arrow util-center">
					<FontAwesomeIcon icon={faSortDown} color="#666666" />
				</span>
			</span>
			<input type="text" className="input-field" />
			<button className="search-btn">
				<FontAwesomeIcon icon={faSearch} />
			</button>
		</div>
	);
};

export default SearchComponent;
