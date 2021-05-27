import { faBolt, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ButtonComponent from "../../../ButtonComponent/ButtonComponent";

import "./LeftProductDetailComponent.css";

const LeftProductDetailComponent = (props) => {
	const { product } = props;

	return (
    <div className="left-container">
      <img
        src={product.productDetailImage}
        alt={product.productName}
        className="left__product-image"
      />
      <div className="btn-container">
        <ButtonComponent product={product} yellowBtn="yellow-btn">
          <FontAwesomeIcon icon={faShoppingCart} className="icon" />
          ADD TO CART
        </ButtonComponent>

        <ButtonComponent
          product={product}
          orangeBtn="orange-btn"
          path={`/FlipkartClone/product/buy-now/${product._id}`}
        >
          <FontAwesomeIcon icon={faBolt} className="icon" />
          BUY NOW
        </ButtonComponent>
      </div>
    </div>
  );
};

export default LeftProductDetailComponent;
