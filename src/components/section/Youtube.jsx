import React from "react";

const Youtube = (props) => {
    return (
        <section id="youtubeSection" className={props.attr}>
            <div className="youtube__inner container">
                <div className="youtube__text ">
                    <h3>유튜브 추천</h3>
                    <p>
                        더 다양한 강의는 유튜브를 통해 제공하고 있습니다.
                        <br /> 구독과 좋아요! 부탁드립니다.
                    </p>
                    <a href="/">자세히 보기</a>
                </div>
                <div className="youtube__item">
                    <div className="youtube__img">
                        <img
                            src="./assets/images/youtube/youtube_1.png"
                            alt="유튜브사진1"
                        />
                    </div>
                    <div className="youtube__img">
                        <img
                            src="./assets/images/youtube/youtube_2.png"
                            alt="유튜브사진2"
                        />
                    </div>
                    <div className="youtube__img">
                        <img
                            src="./assets/images/youtube/youtube_3.png"
                            alt="유튜브사진3"
                        />
                    </div>
                    <div className="youtube__img">
                        <img
                            src="./assets/images/youtube/youtube_4.png"
                            alt="유튜브사진4"
                        />
                    </div>
                    <div className="youtube__img">
                        <img
                            src="./assets/images/youtube/youtube_1.png"
                            alt="유튜브사진5"
                        />
                    </div>
                    <div className="youtube__img">
                        <img
                            src="./assets/images/youtube/youtube_2.png"
                            alt="유튜브사진6"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Youtube;
