import React from "react";

import * as S from "../style/footer"

const Footer = () => {
    return(
        <S.Container>
            <p>Developed by <a href="https://github.com/mateusbisporamos" target="blank">Mateus Bispo Ramos</a> 
            with the <a href="https://www.themoviedb.org/documentation/api" target="blank">TMDB API</a>.</p>
        </S.Container>
    )
}

export default Footer