import { CardMovie_Style } from "./style"
import { API } from "../../config/API"
import { FaStar } from "react-icons/fa6";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

let ListFav = []
if(!localStorage.getItem('favorites')){
    localStorage.setItem('favorites','[]')
}else{
    const data = localStorage.getItem('favorites')
    ListFav = JSON.parse(data)
}

const CardMovie = (props)=>{
    const {movie} = props
    const [state,setState] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        if(ListFav.find((IDarray) => IDarray === movie.id)){
            setState(false)
        }else{
            setState(true)
        }
    })

    const addFav = ()=>{
        if(ListFav.find((IDarray) => IDarray === movie.id)){
            const index = ListFav.indexOf(movie.id)
            ListFav.splice(index, 1)
            setState(!state)
        }else{
            ListFav.push(movie.id)
            setState(!state)
        }
        localStorage.setItem('favorites',JSON.stringify(ListFav))
    }

    const OpenMovie = ()=>{
        navigate(`/movie?id=${movie.id}`)
        window.scroll({
            top: 0
        })
    }

    return (
        <CardMovie_Style>
            <button className="btn-favorite" onClick={()=> addFav()}>
                {state ?  <FaRegHeart size={18}/> : <FaHeart size={18}/>}
            </button>
            <div className="content-card between-col" style={{backgroundImage:`url(${API.image}${movie.poster_path})`}} onClick={()=> OpenMovie()}>
                <p className="card-button"><FaStar style={{color:'yellow'}}/>{Number(movie.vote_average).toFixed(1)}</p>
                <span>Assitir agora!</span>
            </div>
        </CardMovie_Style>
    )
}
export default CardMovie