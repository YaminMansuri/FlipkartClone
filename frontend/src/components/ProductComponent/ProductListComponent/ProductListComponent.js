import React from "react";
import ProductItemComponent from "../ProductItemComponent/ProductItemComponent";

const ProductListComponent = (props) => {
	return (
		<div className="util-flex">
			{props.filteredProducts.map((product) => {
				return (
					<>
						<ProductItemComponent
							// _id={product._id}
							product={product}
							key={product._id}
						/>
					</>
				);
			})}
		</div>
	);
};

export default ProductListComponent;
