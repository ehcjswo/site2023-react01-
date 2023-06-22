import React from "react";

const Member = (props) => {
    return (
        <section id="membersSection" className={props.attr}>
            <h3>멤버 소개</h3>
            <p>웹디자이너, 웹 퍼블리셔, 프론트앤드 개발자 멤버를 소개합니다.</p>
            <div className="members__inner container">
                <div className="member">
                    <figure className="member__header">
                        <img
                            src="./assets/images/member/profile_1.png"
                            alt="멤버"
                        />
                    </figure>
                    <div className="member__body">
                        <h4 className="title">백종원</h4>
                        <a href="/" className="btn">
                            메뉴 보기
                        </a>
                    </div>
                </div>
                <div className="member">
                    <figure className="member__header">
                        <img
                            src="./assets/images/member/profile_2.png"
                            alt="멤버"
                        />
                    </figure>
                    <div className="member__body">
                        <h4 className="title">이연복</h4>
                        <a href="/" className="btn">
                            메뉴 보기
                        </a>
                    </div>
                </div>
                <div className="member">
                    <figure className="member__header">
                        <img
                            src="./assets/images/member/profile_3.png"
                            alt="멤버"
                        />
                    </figure>
                    <div className="member__body">
                        <h4 className="title">최현석</h4>
                        <a href="/" className="btn">
                            메뉴 보기
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Member;
