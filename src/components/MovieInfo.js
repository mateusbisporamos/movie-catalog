import React, { useEffect } from "react";

import * as S from "../style/movie-info"

const MovieInfo = () => {
    
    const carouselLoop = () => {
        console.log('out of loop')
        
        setTimeout(() => {
            console.log('loop')
        }, 3000);

        // for (let i = 0; i < Infinity; i++) {
        // }
    }

    useEffect(() => {
        carouselLoop()
    }, [])

    return(
        <S.Container>
            <S.TopContainer>
                <S.CarouselImages>
                    <img src="https://image.tmdb.org/t/p/original/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg" alt="Movie Poster" />
                    <img src="https://image.tmdb.org/t/p/original/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg" alt="Movie Poster" />
                    <img src="https://image.tmdb.org/t/p/original/uu4On1xXiiDGeYwHSbp7BSQBTGv.jpg" alt="Movie Poster" />
                    <img src="https://image.tmdb.org/t/p/original/AnrAdtctqQVksj5riXxzFGGcm8S.jpg" alt="Movie Poster" />
                    <img src="https://image.tmdb.org/t/p/original/h2jp3CSdTPc22mUqps9I8vXDPaN.jpg" alt="Movie Poster" />
                    <img src="https://image.tmdb.org/t/p/original/jvwSZfesS63ErgLnvWTOmjElpUz.jpg" alt="Movie Poster" />
                    <img src="https://image.tmdb.org/t/p/original/g0UfxFPjNCBjuv2G0K15Qu6p7zk.jpg" alt="Movie Poster" />
                    <img src="https://image.tmdb.org/t/p/original/t1ip0DmSXs68pRyz1PPQVWG155L.jpg" alt="Movie Poster" />
                    <img src="https://image.tmdb.org/t/p/original/fSfWloWi5rmqbmC7GhO0HY2TMZW.jpg" alt="Movie Poster" />

                    <S.PosterFilter />
                </S.CarouselImages>

                <S.TopContainerFooter>
                    <p>Black Panther: Wakanda Forever</p>
                </S.TopContainerFooter>
            </S.TopContainer>


        </S.Container>
    )
}

export default MovieInfo