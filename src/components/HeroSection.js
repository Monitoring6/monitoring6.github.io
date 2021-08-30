import React from "react";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
	return (
		<div className="hero-container">
			<video autoPlay muted loop>
				<source src="/videos/video-3.mp4" type="video/mp4"></source>
			</video>
			<h1>BEYOND SAFE</h1>
			<p>
				시공간의 제약 없이 <br /> 끊임없는 모니터링
			</p>
		</div>
	);
}

export default HeroSection;
