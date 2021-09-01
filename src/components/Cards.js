import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
	return (
		<div className="cards">
			{/* <h1>Check out these Epic Destinations!</h1> */}
			<div className="container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem src="images/12345.jpeg" path="/products" />
					</ul>
					<ul className="cards__items">
						<CardItem src="images/1234.jpeg" path="/services" />
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
