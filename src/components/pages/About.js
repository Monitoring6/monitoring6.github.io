import React from "react";
import "../../App.css";
import "../Pages.css";

export default function About() {
	return (
		<div>
			<div className="container">
				<h1 className="about">About M6</h1>
			</div>
			<div>
				<div className="text-on-image">
					<div className="text-on-image-1">
						<h2>기술이 자라는 회사</h2>

						<h2>직원이 자라는 회사</h2>
					</div>
					{/* <div className="text-on-image-2">
						<h2>직원이 자라는 회사</h2>
					</div> */}
					<div className="text-on-image-3">
						<h2>안전이 자라는 회사</h2>

						<h2>자율성이 자라는 회사</h2>
					</div>
					{/* <div className="text-on-image-4">
						<h2>자율성이 자라는 회사</h2>
					</div> */}
				</div>
				<div className="vl"></div>
			</div>
		</div>
	);
}
