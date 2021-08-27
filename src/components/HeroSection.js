import React from "react";
import Button from "./Button";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
	return (
		<div className="hero-container">
			<video autoPlay muted loop>
				<source src="/videos/video-3.mp4" type="video/mp4"></source>
			</video>
			<h1>ADVENTURE WAITING</h1>
			<p>What Are You Waiting For?</p>
			<div className="hero-btns">
				<Button
					className="btns"
					buttonStyle="btn--outline"
					buttonSize="btn--large"
				>
					GET STARTED
				</Button>
				<Button
					className="btns"
					buttonStyle="btn--primary"
					buttonSize="btn--large"
				>
					WATCH TRAILER<i className="far fa-play-circle"></i>
				</Button>
			</div>
		</div>
	);
}

export default HeroSection;
