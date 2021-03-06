import React from "react";
import "./HeroSection.css";
import "../App.css";
import "../setScreenSize";

function HeroSection() {
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
