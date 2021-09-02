import "./App.css";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import About from "./components/pages/About";
import Culture from "./components/pages/Culture";
import Vision from "./components/pages/Vision";
import { Trans, useTranslation } from "react-i18next";
import Home from "./components/pages/Home";

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
					<Route path="/about" component={About}></Route>
					<Route path="/culture" component={Culture}></Route>
					<Route path="/vision" component={Vision}></Route>
				</Switch>
			</Router>
		</div>
	);
}
export default App;
