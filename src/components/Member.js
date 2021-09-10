import React from "react";
import "./Member.css";

const Member = () => {
	return (
		<div>
			<div>
				<h1 className="culture">Our Culture</h1>
				<div className="text-on-image-culture">
					<div className="face-container1">
						<div className="william">
							<img className="face" src="images/W.h2.JPG" alt="William" />
							{/* <div className="william-hover"></div> */}
						</div>
						<div className="william">
							<img className="face" src="images/Juy2.JPG" alt="Juy" />
							<div></div>
						</div>
						<div className="william">
							<img className="face" src="images/K.y.JPG" alt="KY" />
							<div></div>
						</div>
					</div>
					<div className="face-container2">
						<div className="william">
							<img className="face" src="images/S.j.JPG" alt="Sanju" />
						</div>
						<div className="william">
							<img className="face" src="images/G.h.JPG" alt="Kyeonghyeon" />
						</div>
						<div className="william">
							<img className="face" src="images/J.H.JPG" alt="Junhyeok" />
						</div>
					</div>
					<div className="face-container3">
						<div className="william">
							<img className="face" src="images/J.s.JPG" alt="Jongsub" />
						</div>
						<div className="william">
							<img className="face" src="images/Y.m.JPG" alt="Youngmin" />
						</div>
						<div className="william">
							<img className="face" src="images/M.h.JPG" alt="Minho" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Member;
