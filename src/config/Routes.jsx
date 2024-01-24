import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "../pages/layout/page"
import Home from "../pages/home/page"
import Search from "../pages/search/page"
import Profile from "../pages/profile/page"
import NotFound from "../pages/notfound/page"
import Movie from "../pages/movie/page"

const Routs = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                   <Route index element={<Home/>}/>
                   <Route path="/search" element={<Search/>}/>
                   <Route path="/profile" element={<Profile/>}/>
                   <Route path="/movie" element={<Movie/>}/>
                   <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Routs