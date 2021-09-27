import React from "react";
import "../App.css";
import "./AboutM6.css";

const AboutM6 = () => {
	return (
		<div>
			<div className="container">
				<h1 className="about">About M6</h1>
			</div>
			<div>
				<div className="text-on-image-about">
					<div className="text-on-image-1">
						<h2>
							기술이 자라는 회사
							<p className="p1">
								최신 IoT기술에 기반한 24시간 원격 화재 모니터링 기술과 자사 앱
								지원으로 회사와 소비자를 밀착 연결합니다.
								<p className="p1-1">#껌딱지 모니터링</p>
							</p>
						</h2>

						<h2>
							직원이 자라는 회사
							<p className="p2">
								단순히 직원의 능력을 소모하는 것이 아닌, 실질적인 능력 향상이
								회사 안에서 이루어지도록 다양한 주제의 교육과 월 1회 사내
								기술세미나를 운영합니다.
							</p>
							<p className="p2-1">#소모가 아닌 성장#함께 자라는 회사</p>
						</h2>
					</div>
					<div className="text-on-image-3">
						<h2>
							안전이 자라는 회사
							<p className="p3">
								SSL암호화, VPN등으로 철저한 보안 아래 개발된 M6의 모니터링
								시스템은 실제 화재여부와 오작동을 실시간으로 확인할 수 있어
								화재가 일어나는 즉시 가장 중요한 초기진압을 효과적으로 돕습니다.{" "}
							</p>
							<p className="p3-1">#24시간원격화재감시</p>
						</h2>

						<h2>
							자율성이 자라는 회사
							<p className="p4">
								M6의 사내문화는 철저히 자율성에 기반하여 통제를 최소화하며
								직원의 고유함을 존중하고 각자의 아이덴디티를 극대화하여 일할 수
								있도록 다방면의 지원을 실시합니다.
							</p>
							<p className="p4-1">#정체성존중#자율성극대화</p>
						</h2>
					</div>
				</div>
				<div className="vl"></div>
			</div>
		</div>
	);
};

export default AboutM6;
