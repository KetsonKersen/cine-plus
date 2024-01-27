import { useEffect, useState } from "react"
import GridMovies from "../../components/gridMovies/gridMovie"
import Slider from "../../components/slider/Slider"
import Filter from "../../components/filter/Filter"
const Home = ()=>{
    

    return(
        <section>
            <Slider/>
            <Filter/>
            <GridMovies/>
        </section>
    )
}
export default Home