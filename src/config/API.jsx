import axios from "axios";

export const app = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie"
})
export const search = axios.create({
    baseURL: "https://api.themoviedb.org/3/search/"
})
export const API = {
    key: "?api_key=b156d235d6d7ac45e7bba11e704db76a",
    image: "http://image.tmdb.org/t/p/original"
}
