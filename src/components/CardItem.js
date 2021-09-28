import React from "react";

function CardItem(props) {
	return (
		<li className="cards__item">
			<div className="cards__item__link" to={props.path}>
				<div className="cards__item__pic-wrap" data-category={props.label}>
					<img className="cards__item__img" src={props.src} alt="Travel"></img>
					<div className="text-on-image">
						<h1 className="headline"> 당신은 안전한가요? </h1>
						<br />
						<p className="paragraph1">
							시공간의 제약 없는 IoT기반 화재 모니터링 서비스가 <br />
							<span className="span">
								불안으로부터 자유로운 일상을 선사합니다.
							</span>
						</p>
						<p className="paragraph2">
							당신이 언제 어디서나 안심하고 일상을 누릴 수 있도록 <br />{" "}
							Monitoring6는 당신의 여섯번째 감각을 대신합니다.
						</p>
					</div>
				</div>
			</div>
		</li>
	);
}

export default CardItem;
