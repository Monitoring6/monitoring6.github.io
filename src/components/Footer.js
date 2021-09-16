import React from "react";
import "./Footer.css";

function Footer() {
	return (
		<div className="footer-container">
			<section className="footer-subscription">
				<div className="input-areas">
					<div>
						<a className="question" href="mailto:ask@monitoring6.com">
							문의하실거나 궁금한거 있으면 남겨주세요
						</a>{" "}
						<br />
						<a href="https://firem6.com/" className="firem6">
							FireM6
						</a>
					</div>
				</div>
			</section>
			<section class="social-media">
				<div class="social-media-wrap">
					<div class="footer-logo">
						<img src="images/M6_Logo white png.png" alt="" className="logo" />
						<p className="phone-number1">1855-1656</p>
						<small class="website-rights-before">M6 © 2020</small>
					</div>
					<div className="space-phone">
						<p className="phone-number2">1855-1656</p>
					</div>
					<small class="website-rights">M6 © 2020</small>
				</div>
			</section>
		</div>
	);
}

export default Footer;
