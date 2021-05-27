import React from "react";
import { Link } from "react-router-dom";

import "./ButtonComponent.css";

const ButtonComponent = (props) => {
	return (
    <>
      <Link
        to={props.path || "/FlipkartClone"}
        className={`btn-primary ${props.orangeBtn} ${props.yellowBtn} ${props.widthAuto}`}
      >
        {props.children}
      </Link>
    </>
  );
};

export default ButtonComponent;
