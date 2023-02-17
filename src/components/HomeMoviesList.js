import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Movie from "./Movie";

import getPopularMovies from "../services/services"

import * as S from "../style/home-movies-list"

const HomeMoviesList = () => {
    const params = useParams()

    const [moviesList, setMoviesList] = useState([])
    const [dataList, setDataList] = useState([])
    const [pageNumber, setPageNumber] = useState(params.page)


    const fetchMovies = (pageNumber) => {
        getPopularMovies(pageNumber).then(res => {
            setMoviesList(res.results)
            setDataList(res)
        })
    }

    useEffect(() => {
        if(params.page === undefined || params.page <= 1){
            setPageNumber(1)
        } else {
            setPageNumber(parseInt(params.page))
        }
        fetchMovies(pageNumber)
    }, [moviesList])

    console.log("Page Selector NOT FINISHED")

    
    return(
        <S.Container>
            <S.PagesConatiner>
                <S.PageSelector>
                    <Link to={`/${pageNumber - 1}`}> <S.PageNumber>{pageNumber - 1}</S.PageNumber> </Link>
                    ...
                    <Link to={`/${pageNumber}`}> <S.PageNumber selected>{pageNumber}</S.PageNumber> </Link>
                    <Link to={`/${pageNumber + 1}`}> <S.PageNumber>{pageNumber + 1}</S.PageNumber> </Link>
                    <Link to={`/${pageNumber + 2}`}> <S.PageNumber>{pageNumber + 2}</S.PageNumber> </Link>
                    <Link to={`/${pageNumber + 3}`}> <S.PageNumber>{pageNumber + 3}</S.PageNumber> </Link>
                    <Link to={`/${pageNumber + 4}`}> <S.PageNumber>{pageNumber + 4}</S.PageNumber> </Link>
                    ...
                    <Link to={`/500`}> <S.PageNumber>500</S.PageNumber> </Link>
                </S.PageSelector>
                <p>Total Results: {dataList.total_results} Movies</p>
            </S.PagesConatiner>

            <S.MoviesContainer>
                { moviesList.map((movie) => <Movie id={movie.id} title={movie.title} posterURL={movie.poster_path} />) }
            </S.MoviesContainer>

            <S.PageSelector>
                    <Link to={`/${pageNumber - 1}`}> <S.PageNumber>{pageNumber - 1}</S.PageNumber> </Link>
                    ...
                    <Link to={`/${pageNumber}`}> <S.PageNumber selected>{pageNumber}</S.PageNumber> </Link>
                    <Link to={`/${pageNumber + 1}`}> <S.PageNumber>{pageNumber + 1}</S.PageNumber> </Link>
                    <Link to={`/${pageNumber + 2}`}> <S.PageNumber>{pageNumber + 2}</S.PageNumber> </Link>
                    <Link to={`/${pageNumber + 3}`}> <S.PageNumber>{pageNumber + 3}</S.PageNumber> </Link>
                    <Link to={`/${pageNumber + 4}`}> <S.PageNumber>{pageNumber + 4}</S.PageNumber> </Link>
                    ...
                    <Link to={`/500`}> <S.PageNumber>500</S.PageNumber> </Link>
            </S.PageSelector>
        </S.Container>
    )
}

export default HomeMoviesList