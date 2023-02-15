import React from "react";

import Header from "../components/Header"
import Footer from "../components/Footer";

import * as S from "../style/home"

const Home = () => {
    return(
        <S.Container>
            <Header />

            <main></main>

            <Footer />
        </S.Container>
    )
}

export default Home