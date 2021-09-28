import React from "react";
import "./Member.css";

const Member = () => {
	return (
		<div>
			<div>
				<h1 className="culture">Our Members</h1>
				<div className="text-on-image-culture">
					<div className="face-container1">
						<div className="face-wrap">
							<img className="face" src="images/W.H.jpg" alt="William" />
							<div className="image-hover">
								<div className="text-on-hover">정원혁(William)</div>
							</div>
						</div>
						<div className="face-wrap">
							<img className="face" src="images/Juy2.jpg" alt="Juy" />
							<div className="image-hover">
								<div className="text-on-hover">이주영(Juy)</div>
							</div>
						</div>
						<div className="face-wrap">
							<img className="face" src="images/K.Y.jpg" alt="KY" />
							<div className="image-hover">
								<div className="text-on-hover">이강연(KY)</div>
							</div>
						</div>
					</div>
					<div className="face-container2">
						<div className="face-wrap">
							<img className="face" src="images/S.J.jpg" alt="Sanju" />
							<div className="image-hover">
								<div className="text-on-hover">Sanju(김산쥬)</div>
							</div>
						</div>
						<div className="face-wrap">
							<img className="face" src="images/G.H.jpg" alt="Gyeonghyeon" />
							<div className="image-hover">
								<div className="text-on-hover">조경현</div>
							</div>
						</div>
						<div className="face-wrap">
							<img className="face" src="images/J.H.jpg" alt="Junhyeok" />
							<div className="image-hover">
								<div className="text-on-hover">권준혁</div>
							</div>
						</div>
					</div>
					<div className="face-container3">
						<div className="face-wrap">
							<img className="face" src="images/J.S.jpg" alt="Jongsub" />
							<div className="image-hover">
								<div className="text-on-hover">최종섭</div>
							</div>
						</div>
						<div className="face-wrap">
							<img className="face" src="images/Y.M.jpg" alt="Youngmin" />
							<div className="image-hover">
								<div className="text-on-hover">박영민</div>
							</div>
						</div>
						<div className="face-wrap">
							<img className="face" src="images/M.H.jpg" alt="Minho" />
							<div className="image-hover">
								<div className="text-on-hover">강민호</div>
							</div>
						</div>
					</div>
					<div className="face-container4">
						<div className="face-wrap">
							<img className="face" src="images/O.Y.jpg" alt="eunyung" />
							<div className="image-hover-1">
								<div className="text-on-hover">송은영</div>
							</div>
						</div>
					</div>
					<div className="M6-company">
						<div className="face-wrap">
							<img
								className="bulletin"
								src="images/M6-culture-1.jpg"
								alt="bulletin board"
							/>
						</div>
						<div className="face-wrap">
							<img
								className="bulletin"
								src="images/M6-culture-2.jpg"
								alt="bulletin board"
							/>
						</div>
						<div className="face-wrap">
							<img
								className="bulletin"
								src="images/M6-culture-3.jpg"
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
