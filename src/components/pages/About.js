import React from "react";
import "../../App.css";
import "./About.css";
import Footer from "../Footer";

export default function About() {
	return (
		<div>
			<div className="container">
				<h1 className="about">About M6</h1>
			</div>
			<div>
				<div className="text-on-image">
					<div className="text-on-image-1">
						<h2>
							기술이 자라는 회사
							<p className="p1">
								기술이 자라요 <br />
								<span className="space">
									# 그 누구보다 빠르게 남들과는 다르게
								</span>
							</p>
						</h2>

						<h2>
							직원이 자라는 회사
							<p className="p2">직원이 자라요</p>
						</h2>
					</div>
					<div className="text-on-image-3">
						<h2>
							안전이 자라는 회사
							<p className="p3">안전이 자라요</p>
						</h2>

						<h2>
							자율성이 자라는 회사
							<p className="p4">
								자율성이 자라요 <br /> #자유와 방종 사이
							</p>
						</h2>
					</div>
				</div>
				<div className="vl"></div>
			</div>
			<Footer></Footer>
		</div>
	);
}
