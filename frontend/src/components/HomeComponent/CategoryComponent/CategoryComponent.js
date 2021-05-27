import React from "react";
import products from "../../../data";
import CardComponent from "../../CardComponent/CardComponent";
import ProductListComponent from "../../ProductComponent/ProductListComponent/ProductListComponent";

import "./CategoryComponent.css";

const CategoryComponent = (props) => {
	const filteredProducts = products.filter((product) => {
		return product.category === props.category;
	});
	console.log(filteredProducts);

	return (
		<CardComponent padding10="padding-10">
			<div className="category-component__container">
				<h2 className="card-title">{props.categoryTitle}</h2>
				<span className="card-sub-title">{props.categorySubTitle}</span>
				<button className="view-all">VIEW ALL</button>
				<hr className="hr" />

				<ProductListComponent
					category={props.category}
					filteredProducts={filteredProducts}
				/>
			</div>
		</CardComponent>
	);
};

export default CategoryComponent;
