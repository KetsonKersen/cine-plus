import { Slider_Style } from "./style"
import bg from "../../assets/bg.png"
import { SlArrowLeft,SlArrowRight } from "react-icons/sl";
import {GetMoviesSlider} from "../../config/Get"
import { useEffect, useState } from "react";
import { API } from "../../config/API";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const IdMovies = ["872585","899445","695721"]
const ListMovies = []
let count = 0
const Slider = ()=>{
    const [currentMovie,setCurrentMovie] = useState()

    const PreLoadMovies = ()=>{
        IdMovies.forEach(async (id)=>{
            const data = await GetMoviesSlider(id)
            ListMovies.push(data)
            setCurrentMovie(ListMovies[count])
        })

   
    }
    useEffect(()=>{
        PreLoadMovies()
    },[])
    const ToggleSlider = (dir)=>{
        count += dir
        if(count > 2){
            count = 0
        }else if(count < 0){
            count = 2
        }
        setCurrentMovie(ListMovies[count])
    }
    

    return(
        <Slider_Style style={{backgroundImage: `url(${API.image}${currentMovie?.backdrop_path})`}}>
            <button onClick={()=>ToggleSlider(-1)}><SlArrowLeft size={45}/></button>
            <div className="max-width content-movie">
                <p>Duração: 3h 20m</p>
                <div>
                    <p><FaStar/> 6.5</p>
                    <p>categorias</p>
                </div>
                <h3>{currentMovie?.title}</h3>
                <p>{currentMovie?.overview}</p>
                <div className="contaienr-btn">
                    <Link to={`/movie?id=${currentMovie?.id}`}>Assistir</Link>
                    <Link>Adicionar</Link>
                </div>
            </div>
            <button onClick={()=>ToggleSlider(+1)}><SlArrowRight size={45}/></button>
        </Slider_Style>
    )
}
export default Slider