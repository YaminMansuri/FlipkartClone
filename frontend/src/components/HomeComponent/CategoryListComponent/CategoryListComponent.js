import React from "react";
import CategoryComponent from "../CategoryComponent/CategoryComponent";

const CategoryListComponent = () => {
	return (
		<div>
			<CategoryComponent
				category="phone"
				categoryTitle="Best Battery Phones"
				categorySubTitle="More than 4000 mAh"
			/>
			<CategoryComponent
				category="shoes"
				categoryTitle="Shoes Bestsellers"
				categorySubTitle="From ₹999"
			/>
			<CategoryComponent
				category="laptop"
				categoryTitle="Best Gaming Laptops"
				categorySubTitle="From ₹50000"
			/>
		</div>
	);
};

export default CategoryListComponent;
