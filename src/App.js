import "./App.css";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import { Trans, useTranslation } from "react-i18next";

function App() {
	const { t, i18n } = useTranslation();

	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
	};

	return (
		<div className="App">
			{/* <button onClick={() => changeLanguage("en")}>En</button>
			<button onClick={() => changeLanguage("kr")}>Kr</button>
			<hr />
			<Trans i18nKey="description.part1">
				To get started, edit <code>src/App.js</code> and save to reload.
			</Trans>
			<div>{t("description.part2")}</div> */}
			<Router>
				<Navbar></Navbar>
				<Switch>
					<Route path="/" exact component={Home}></Route>
					<Route path="/services" component={Services}></Route>
					<Route path="/products" component={Products}></Route>
					<Route path="/signup" component={SignUp}></Route>
				</Switch>
			</Router>
		</div>
	);
}
export default App;
