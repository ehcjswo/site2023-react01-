import React from "react";

const Intro = (props) => {
    return (
        <section id="introSection" className={props.attr}>
            <h3 className="blind">한국 유명한 셰프</h3>
            <div className="intro__inner container">
                <div className="intro__title">
                    <h3>
                        한국
                        <br />
                        유명한 셰프
                    </h3>
                    <p>
                        한국에서 유명하고 대표적인 음식
                        <br />
                        여러분들도 도전해보세요!
                    </p>
                </div>
                <div className="intro__desc">
                    <div>
                        <h4 className="icon-bg1">한식</h4>
                        <p>
                            건강하고 균형 잡힌 식단. 한식은 쌀, 김치, 채소, 고기
                            등 다양한 식재료를 사용하여 영양 균형을
                            중요시합니다.
                        </p>
                    </div>
                    <div>
                        <h4 className="icon-bg2">중식</h4>
                        <p>
                            매우 다양한 맛과 향: 중국 음식은 달콤한, 짭짤한,
                            매운, 쓴 맛 등 다양한 맛을 가집니다. 향신료와
                            조미료를 많이 사용하여 풍부한 향을 내며, 지역에 따라
                            맛의 차이가 있습니다.
                        </p>
                    </div>
                    <div>
                        <h4 className="icon-bg3">일식</h4>
                        <p>
                            신선하고 자연스러운 재료를 사용하여 깔끔하고
                            아름다운 음식을 만듭니다. 일본 요리는 장식과
                            조리법에 많은 주의를 기울입니다.
                        </p>
                    </div>
                    <div>
                        <h4 className="icon-bg4">양식</h4>
                        <p>
                            서양의 요리 스타일을 의미하며, 주로 유럽과 미국을
                            기반으로 합니다. 고기, 빵, 치즈, 버터 등이 중요한
                            재료입니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
