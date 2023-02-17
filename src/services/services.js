import Axios from "axios"

const api_key = "bbe768da307d3c0d647ccdd975543c1b"
let language = "en-US"
let region = "US"

async function getPopularMovies(page) {
    console.log(page)
    return Axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=${language}&page=${page}&region=${region}`)
        .then(res => res.data)
}

export default getPopularMovies