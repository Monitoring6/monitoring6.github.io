import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection.js";
import Cards from "../Cards.js";
import Footer from "../Footer";

function Home() {
	return (
		<div>
			<HeroSection />
			<Cards />
			<Footer></Footer>
		</div>
	);
}

export default Home;
