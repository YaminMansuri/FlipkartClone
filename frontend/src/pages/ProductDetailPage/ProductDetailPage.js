import React from "react";
import LeftProductDetailComponent from "../../components/ProductComponent/ProductDetailComponents/LeftProductDetailComponent/LeftProductDetailComponent";
import RightProductDetailComponent from "../../components/ProductComponent/ProductDetailComponents/RightProductDetailComponent/RightProductDetailComponent";
import products from "../../data";

import "./ProductDetailPage.css";

const ProductDetailPage = (props) => {
	const productId = props.match.params.id;
	console.log(productId);
	console.log(props.cartData);

	const product = products.find((product) => {
		console.log(product._id);
		return product._id === productId;
	});
	console.log(product);

	return (
		<div className="container util-flex">
			<span>
				<LeftProductDetailComponent
					product={product}
					key={product._id}
				/>
			</span>
			<span>
				<RightProductDetailComponent product={product} key={product._id} />
			</span>
		</div>
	);
};

export default ProductDetailPage;
