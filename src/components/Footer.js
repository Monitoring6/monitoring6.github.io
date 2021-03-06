import React from "react";
import "./Footer.css";

function Footer() {
	return (
		<div className="footer-container">
			<section className="footer-subscription">
				<div className="input-areas">
					<div>
						<a href="mailto:ask@monitoring6.com" target="_blank">
							<button className="button-footer">
								문의내용 메일로 남겨주세요
							</button>
						</a>
						<br />
						<a href="https://firem6.com/" target="_blank">
							<button className="button-footer">
								화재 모니터링 서비스 FireM6
							</button>
						</a>
					</div>
				</div>
			</section>
			<section class="social-media">
				<div class="social-media-wrap">
					<div class="footer-logo">
						<img src="images/M6_Logo white png.png" alt="" className="logo" />

						<div className="phone-number1">
							<i class="fas fa-phone-alt"></i>
							<a href="tel:1855-1656">1855-1656</a>
						</div>

						<div>
							<small class="address">
								주소: 서울 영등포구 양평로22길 21 1405호
							</small>{" "}
							<br />
							<small class="website-rights-before">M6 © 2021</small>
						</div>
					</div>
					<div className="space-phone">
						<p className="phone-number2">
							<i class="fas fa-phone-alt"></i>
							<a href="tel:1855-1656">1855-1656</a>
						</p>
					</div>
					<div>
						<small className="website-rights">
							주소: 서울 영등포구 양평로22길 21 1405호
						</small>{" "}
						<br />
						<small class="website-rights">M6 © 2021</small>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Footer;
