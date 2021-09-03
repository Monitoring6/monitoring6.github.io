import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

const ButtonMailto = ({
	mailto,
	label,
	type,
	onClick,
	buttonStyle,
	buttonSize,
}) => {
	const checkButtonStyle = STYLES.includes(buttonStyle)
		? buttonStyle
		: STYLES[0];

	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
	return (
		<Link
			to="#"
			onClick={(e) => {
				window.location = mailto;
				e.preventDefault();
			}}
			className="btn-mobile"
		>
			<button
				className={`btn ${checkButtonStyle} ${checkButtonSize}`}
				onClick={onClick}
				type={type}
			>
				{label}
			</button>
		</Link>
	);
};

export default ButtonMailto;
