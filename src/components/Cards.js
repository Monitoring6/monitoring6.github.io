import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
	return (
		<div className="cards">
			<div className="container">
				<div className="cards__wrapper">
					{/* <ul className="cards__items">
						<CardItem src="images/12345.jpeg" path="/vision" />
					</ul> */}
					<ul className="cards__items">
						<CardItem src="images/mainpage.png" path="/culture" />
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
