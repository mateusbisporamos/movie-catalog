import React from "react";

import Header from "../components/Header"
import Footer from "../components/Footer";
import MovieInfo from "../components/MovieInfo"

import * as S from "../style/about-movie"

const AboutMovie = () => {
    return(
        <S.Container>
            <Header />
            <MovieInfo />
            <Footer />
        </S.Container>
    )
}

export default AboutMovie