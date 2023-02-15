import React from "react";
import { Link } from "react-router-dom";

import Movie from "./Movie";

import * as S from "../style/home-movies-list"

const HomeMoviesList = () => {
    return(
        <S.Container>
            <S.PagesConatiner>
                <S.PageSelector>
                    <Link> <S.PageNumber>1</S.PageNumber> </Link>
                    <Link> <S.PageNumber selected>2</S.PageNumber> </Link>
                    <Link> <S.PageNumber>3</S.PageNumber> </Link>
                    <Link> <S.PageNumber>4</S.PageNumber> </Link>
                    <Link> <S.PageNumber>5</S.PageNumber> </Link>
                    ...
                    <Link> <S.PageNumber>12170</S.PageNumber> </Link>
                </S.PageSelector>
                <p>Total Results: 243387 Movies</p>
            </S.PagesConatiner>

            <S.MoviesContainer>
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
            </S.MoviesContainer>

            <S.PagesConatiner>
                <S.PageSelector>
                    <Link> <S.PageNumber>1</S.PageNumber> </Link>
                    <Link> <S.PageNumber selected>2</S.PageNumber> </Link>
                    <Link> <S.PageNumber>3</S.PageNumber> </Link>
                    <Link> <S.PageNumber>4</S.PageNumber> </Link>
                    <Link> <S.PageNumber>5</S.PageNumber> </Link>
                    ...
                    <Link> <S.PageNumber>12170</S.PageNumber> </Link>
                </S.PageSelector>
                <p>Total Results: 243387 Movies</p>
            </S.PagesConatiner>
        </S.Container>
    )
}

export default HomeMoviesList