import React from "react";

import "./SearchComponent.css";

const SearchComponent = () => {
	return (
		<div className="util-flex util-flex-1">
			<input
				type="text"
				className="input-field"
				placeholder="&#xf002; Search for Products, brands and more"
			/>
			{/* <FontAwesomeIcon icon={faSearch} className="icon-search" size="2x" /> */}
		</div>
	);
};

export default SearchComponent;
