import React from "react";

import "./CardComponent.css";

const CardComponent = (props) => {
	return (
		<div className={`card ${props.padding10} ${props.marginSide10}`}>
			{props.children}
		</div>
	);
};

export default CardComponent;
