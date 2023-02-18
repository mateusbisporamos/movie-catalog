import React from "react";
import { Link } from "react-router-dom";

import * as S from "../style/movie.js"

const Movie = ({ id, title, posterURL }) => {
    return(
        <S.Container>
            <img src={`https://image.tmdb.org/t/p/original${posterURL}`} alt={`${title} Poster`} />
            <p>{title}</p>
            <Link to={`/Movie/${id}`} style={{ textDecoration: 'none' }}> <button>SEE MORE</button> </Link>
        </S.Container>
    )
}

export default Movie