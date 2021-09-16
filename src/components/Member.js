import React from "react";
import "./Member.css";

const Member = () => {
	return (
		<div>
			<div>
				<h1 className="culture">Our Culture</h1>
				<div className="text-on-image-culture">
					<div className="face-container1">
						<div className="face-wrap">
							<img className="face" src="images/W.h2.JPG" alt="William" />
							<div className="william-hover">
								<div className="text-on-hover">정원혁(William)</div>
							</div>
						</div>
						<div className="face-wrap">
							<img className="face" src="images/Juy2.JPG" alt="Juy" />
							<div className="william-hover">
								<div className="text-on-hover">이주영(Juy)</div>
							</div>
						</div>
						<div className="face-wrap">
							<img className="face" src="images/K.y.JPG" alt="KY" />
							<div className="william-hover">
								<div className="text-on-hover">이강연(KY)</div>
							</div>
						</div>
					</div>
					<div className="face-container2">
						<div className="face-wrap">
							<img className="face" src="images/S.j.JPG" alt="Sanju" />
							<div className="william-hover">
								<div className="text-on-hover">Sanju(김산쥬)</div>
							</div>
						</div>
						<div className="face-wrap">
							<img className="face" src="images/G.h.JPG" alt="Kyeonghyeon" />
							<div className="william-hover">
								<div className="text-on-hover">조경현</div>
							</div>
						</div>
						<div className="face-wrap">
							<img className="face" src="images/J.H.JPG" alt="Junhyeok" />
							<div className="william-hover">
								<div className="text-on-hover">권준혁</div>
							</div>
						</div>
					</div>
					<div className="face-container3">
						<div className="face-wrap">
							<img className="face" src="images/J.s.JPG" alt="Jongsub" />
							<div className="william-hover">
								<div className="text-on-hover">최종섭</div>
							</div>
						</div>
						<div className="face-wrap">
							<img className="face" src="images/Y.m.JPG" alt="Youngmin" />
							<div className="william-hover">
								<div className="text-on-hover">박영민</div>
							</div>
						</div>
						<div className="face-wrap">
							<img className="face" src="images/M.h.JPG" alt="Minho" />
							<div className="william-hover">
								<div className="text-on-hover">강민호</div>
							</div>
						</div>
					</div>
					<div className="M6-company">
						<div className="face-wrap">
							<img
								className="bulletin"
								src="images/M6-culture-1.png"
								alt="bulletin board"
							/>
						</div>
						<div className="face-wrap">
							<img
								className="bulletin"
								src="images/M6-culture-2.png"
								alt="bulletin board"
							/>
						</div>
						<div className="face-wrap">
							<img
								className="bulletin"
								src="images/M6-culture-3.png"
								alt="bulletin board"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Member;
