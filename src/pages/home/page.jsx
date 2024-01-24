import { useEffect, useState } from "react"
import GridMovies from "../../components/gridMovies/gridMovie"
import Slider from "../../components/slider/Slider"
const Home = ()=>{
    

    return(
        <section>
            <Slider/>
            <GridMovies/>
        </section>
    )
}
export default Home