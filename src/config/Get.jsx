

import { app, API, search } from "./API";

export const GetMoviesSlider = (ID)=>{
    const data = app.get(`${ID}${API.key}&language=pt-br`).then((req)=>{
        return req.data
    })
    return data
}

export const GetMoviesGrid = ()=>{
    const data = app.get(`/popular${API.key}&language=pt-br`).then((req)=>{
        return req.data.results
    })
    return data
}

export const GetMovieID = (ID)=>{
    const data = app.get(`${ID}${API.key}&language=pt-br`).then((req)=>{
        return req.data
    })
    return data
}
export const GetVideos = (ID)=>{
    const data = app.get(`${ID}/videos${API.key}`).then((req)=>{
        return req.data
    })
    return data
}
export const GetPeople = (ID)=>{
    const data = app.get(`${ID}/credits${API.key}`).then((req)=>{
        return req.data
    })
    return data
}
export const SearchMovies = (query)=>{
    const data = search.get(`/movie${API.key}&query=${query}`).then((req)=>{
        return req.data
    })
    return data
}
