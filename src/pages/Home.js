import React from "react";

import Header from "../components/Header"
import Footer from "../components/Footer";
import HomeMoviesList from "../components/HomeMoviesList";

import * as S from "../style/home"

const Home = () => {
    return(
        <S.Container>
            <Header />
            <HomeMoviesList />
            <Footer />
        </S.Container>
    )
}

export default Home