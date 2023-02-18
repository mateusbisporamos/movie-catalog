import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Movie from "./Movie";

import getPopularMovies from "../services/services"

import * as S from "../style/home-movies-list"

const HomeMoviesList = () => {
    const params = useParams()
    const currentPageNumber = params.page === null || params.page === undefined || params.page < 1 ? 1 : parseInt(params.page)

    const [moviesList, setMoviesList] = useState([])
    const [dataList, setDataList] = useState([])
    const [pagesNumber, setPagesNumber] = useState([])

    const fetchMovies = (page) => {
        getPopularMovies(page).then(res => {
            setMoviesList(res.results)
            setDataList(res)
        })
    }

    useEffect(() => {
        const pagesArr = [
            currentPageNumber >= 3 ? {number: 1, type: "firstPage", selected: false, visible: true, disable: true} : {number: null, type: "firstPage", selected: false, visible: false, disable: true}, // firstPage
            currentPageNumber - 1 <= 0 ? {number: currentPageNumber - 1, type: "previousPage", selected: false, visible: true, disable: true} : {number: currentPageNumber - 1, type: "previousPage", selected: false, visible: true, disable: true}, // previousPage
            {number: currentPageNumber, type: "currentPage", selected: true, visible: true, disable: false}, // currentPage
            currentPageNumber + 1 >= 500 ? {number: null, selected: false, visible: false, disable: true} : {number: currentPageNumber + 1, type: "nextPage", selected: false, visible: true, disable: false}, // nextPage
            currentPageNumber + 2 >= 500 ? {number: null, selected: false, visible: false, disable: true} : {number: currentPageNumber + 2, type: "nextPage", selected: false, visible: true, disable: false}, // nextPage
            currentPageNumber + 3 >= 500 ? {number: null, selected: false, visible: false, disable: true} : {number: currentPageNumber + 3, type: "nextPage", selected: false, visible: true, disable: false}, // nextPage
            currentPageNumber + 4 >= 500 ? {number: null, selected: false, visible: false, disable: true} : {number: currentPageNumber + 4, type: "nextPage", selected: false, visible: true, disable: false}, // nextPage
            currentPageNumber === 500 ? {number: null, selected: false, visible: false, disable: true} : {number: 500, type: "lastPage", selected: false, visible: true, disable: true} // lastPage
        ]
        setPagesNumber(pagesArr)
        
        fetchMovies(currentPageNumber)
    }, [moviesList])
    
    return(
        <S.Container>
            <S.PagesConatiner>
                <S.PageSelector>
                    { pagesNumber.map((page) => page.number != null ? <Link to={`/${page.number <= 0 ? 1 : page.number}`} key={page.number}> <S.PageNumber selected={page.selected} visible={page.visible} disable={page.disable}>{page.number}</S.PageNumber> </Link> : "") }
                </S.PageSelector>
                <p>Total Results: {dataList.total_results} Movies</p>
            </S.PagesConatiner>

            <S.MoviesContainer>
                { moviesList.map((movie) => <Movie key={movie.id} id={movie.id} title={movie.title} posterURL={movie.poster_path} />) }
            </S.MoviesContainer>

            <S.PagesConatiner>
                <S.PageSelector>
                    { pagesNumber.map((page) => page.number != null ? <Link to={`/${page.number}`} key={page.number}> <S.PageNumber selected={page.selected} visible={page.visible} disable={page.disable}>{page.number}</S.PageNumber> </Link> : "") }
                </S.PageSelector>
                <p>Total Results: {dataList.total_results} Movies</p>
            </S.PagesConatiner>
        </S.Container>
    )
}

export default HomeMoviesList