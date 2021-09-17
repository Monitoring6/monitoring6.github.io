import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener("resize", showButton);

	return (
		<nav className="navbar">
			<div className="navbar-container">
				<Link to="/" className="navbar-logo">
					<img src="images/M6_Logo white png.png" alt="" className="logo" />
				</Link>
				<div className="menu-icon" onClick={handleClick}>
					<i className={click ? "fas fa-times" : "fas fa-bars"}></i>
				</div>
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<Link to="/about" className="nav-links" onClick={closeMobileMenu}>
							ABOUT
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/Culture" className="nav-links" onClick={closeMobileMenu}>
							CULTURE
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/vision" className="nav-links" onClick={closeMobileMenu}>
							VISION
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
export default Navbar;
