import React from "react";

const Port = (props) => {
    return (
        <section id="portSection" className={props.attr}>
            <h3>대표 메뉴 구경하기</h3>
            <p>세계적으로 유명하고 대표적인 음식 종류</p>
            <div className="port__inner container">
                <div className="port_btn">
                    <span>한식</span>
                    <span>중식</span>
                    <span>일식</span>
                    <span>양식</span>
                </div>
                <div className="port__conts ">
                    <div className="port">
                        <figure className="port__header">
                            <img
                                src="./assets/images/port/koreafood_1.png"
                                alt="한식 사진"
                            />
                        </figure>
                        <div className="port__body">
                            <span>
                                <img
                                    src="./assets/images/port/profileM_1.png"
                                    alt="프로필사진1"
                                />
                            </span>
                            <div>
                                <h4 className="title">김소희</h4>
                                <p className="desc">마스터 셰프</p>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            <img
                                src="./assets/images/port/koreafood_2.png"
                                alt="멤버"
                            />
                        </figure>
                        <div className="port__body">
                            <span>
                                <img
                                    src="./assets/images/port/profileM_2.png"
                                    alt="프로필사진2"
                                />
                            </span>
                            <div>
                                <h4 className="title">차민욱</h4>
                                <p className="desc">대한민국 셰프</p>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            <img
                                src="./assets/images/port/koreafood_3.png"
                                alt="멤버"
                            />
                        </figure>
                        <div className="port__body">
                            <span>
                                <img
                                    src="./assets/images/port/profileM_3.png"
                                    alt="프로필사진3"
                                />
                            </span>
                            <div>
                                <h4 className="title">최현석</h4>
                                <p className="desc">대한민국 셰프</p>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            <img
                                src="./assets/images/port/koreafood_4.png"
                                alt="멤버"
                            />
                        </figure>
                        <div className="port__body">
                            <span>
                                <img
                                    src="./assets/images/port/profileM_4.png"
                                    alt="프로필사진4"
                                />
                            </span>
                            <div>
                                <h4 className="title">백종원</h4>
                                <p className="desc">대한민국 셰프</p>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            <img
                                src="./assets/images/port/koreafood_5.png"
                                alt="멤버"
                            />
                        </figure>
                        <div className="port__body">
                            <span>
                                <img
                                    src="./assets/images/port/profileM_5.png"
                                    alt="프로필사진5"
                                />
                            </span>
                            <div>
                                <h4 className="title">이원일</h4>
                                <p className="desc">대한민국 셰프</p>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            <img
                                src="./assets/images/port/koreafood_6.png"
                                alt="멤버"
                            />
                        </figure>
                        <div className="port__body">
                            <span>
                                <img
                                    src="./assets/images/port/profileM_6.png"
                                    alt="프로필사진6"
                                />
                            </span>
                            <div>
                                <h4 className="title">김풍</h4>
                                <p className="desc">대한민국 셰프</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Port;
