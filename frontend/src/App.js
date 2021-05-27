import React from "react";
import "./util/util.css";

import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

import "./App.css";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import NavBarComponent from "./components/NavComponent/NavBarComponent/NavBarComponent";
import BuyNowPage from "./pages/BuyNowPage/BuyNowPage";
import OrderPlacedPage from "./pages/OrderPlacedPage/OrderPlacedPage";

const App = () => {
	return (
		<BrowserRouter>
			<NavBarComponent />
			<Switch>
				<Route path="/" component={HomePage} />
				<Route path="/product/:id" exact component={ProductDetailPage} />

				<Route path="/product/buy-now/:id" exact component={BuyNowPage} />
				<Route
					path="/product/buy-now/order-placed/:id"
					exact
					component={OrderPlacedPage}
				/>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
