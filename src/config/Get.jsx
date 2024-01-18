

import { app, API } from "./API";

export const GetMoviesSlider = async (ID)=>{
    const data = await app.get(`/${ID}${API.key}&language=pt-br`).then((req)=>{
        return req.data
    })
    return data
}