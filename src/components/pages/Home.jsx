import React from "react";
import Contents from "../layout/Contents";

import Slider from "../section/Slider";
import Intro from "../section/Intro";
import Portfolio from "../section/Portfolio";
import Youtube from "../section/Youtube";
import Unsplash from "../section/Unsplash";
import Movies from "../section/Movies";

const Home = () => {
    return (
        <>
            <Contents>
                <Slider attr={"slider__wrap nanum5"} />
                <Intro attr={"intro__wrap Nanum5 section bg-blue"} />
                <Portfolio attr={"port__wrap Nanum5 section center bg-blue"} />
                <Youtube attr={"youtube__wrap Nanum5 section"} />
                <Unsplash attr={"unsplash__wrap Nanum5 section bg-blue"} />
                <Movies attr={"movies__wrap Nanum5 container section"} />
            </Contents>
        </>
    );
};

export default Home;
