import "./App.css";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import About from "./components/pages/About";
import Culture from "./components/pages/Culture";
import Vision from "./components/pages/Vision";
import Home from "./components/pages/Home";

function App() {
	return (
		<div className="App">
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
