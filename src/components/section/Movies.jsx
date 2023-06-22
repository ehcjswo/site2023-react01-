import React from "react";

const Movies = (props) => {
    return (
        <section id="moviesSection" className={props.attr}>
            <div className="movies__inner">
                <div className="movies__text">
                    <h3>개발자를 위한 추천 영화</h3>
                    <p>
                        더 다양한 강의는 유튜브를 통해 제공하고 있습니다.
                        <br />
                        구독과 좋아요! 부탁드립니다.
                    </p>
                    <a href="/">자세히 보기</a>
                </div>
                <div className="movies__item">
                    <div className="movies__img">
                        <img
                            src="./assets/images/movie/movie_1.png"
                            alt="영화추천 이미지1"
                        />
                    </div>
                    <div className="movies__img">
                        <img
                            src="./assets/images/movie/movie_2.png"
                            alt="영화추천 이미지2"
                        />
                    </div>
                    <div className="movies__img">
                        <img
                            src="./assets/images/movie/movie_3.png"
                            alt="영화추천 이미지3"
                        />
                    </div>
                    <div className="movies__img">
                        <img
                            src="./assets/images/movie/movie_4.png"
                            alt="영화추천 이미지4"
                        />
                    </div>
                    <div className="movies__img">
                        <img
                            src="./assets/images/movie/movie_5.png"
                            alt="영화추천 이미지5"
                        />
                    </div>
                    <div className="movies__img">
                        <img
                            src="./assets/images/movie/movie_6.png"
                            alt="영화추천 이미지6"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Movies;
