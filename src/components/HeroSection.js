import React from "react";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	let vh = window.innerHeight * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty("--vh", `${vh}px`);

	// We listen to the resize event
	window.addEventListener("resize", () => {
		// We execute the same script as before
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty("--vh", `${vh}px`);
	});

	return (
		<div className="hero-container">
			<img
				src="/images/heroSection.jpg"
				alt="heroSection"
				className="background-img"
			/>
			<h1>BEYOND SAFETY</h1>
			<p>
				시공간의 제약 없이 <br /> 끊임없는 모니터링
			</p>
		</div>
	);
}

export default HeroSection;
