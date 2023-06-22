import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./components/pages/Home";
import IntroPage from "./components/pages/IntroPage";
import PortPage from "./components/pages/PortPage.jsx";
import YoutubePage from "./components/pages/YoutubePage.jsx";
import MoviePage from "./components/pages/MoviePage.jsx";
import UnsplashPage from "./components/pages/UnsplashPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Header attr={["header__wrap", "Nanum5", "bg-blue"]} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/intro" element={<IntroPage />} />
                <Route path="/port" element={<PortPage />} />
                <Route path="/youtube" element={<YoutubePage />} />
                <Route path="/movie" element={<MoviePage />} />
                <Route path="/unsplash" element={<UnsplashPage />} />
            </Routes>
            <Footer attr={["footer__wrap", "Nanum5", "section", "bg-blue"]} />
        </BrowserRouter>
    );
};

export default App;
