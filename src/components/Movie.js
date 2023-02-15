import React from "react";
import { Link } from "react-router-dom";

import * as S from "../style/movie.js"

const Movie = () => {
    return(
        <Link to="/Movie" style={{ textDecoration: 'none' }}>
            <S.Container>
                <img src="https://image.tmdb.org/t/p/original/kuf6dutpsT0vSVehic3EZIqkOBt.jpg" alt="Poster" />
                <p>Puss in Bots</p>
                <Link to="/Movie" style={{ textDecoration: 'none' }}> <button>SEE MORE</button> </Link>
            </S.Container>
        </Link>
    )
}

export default Movie