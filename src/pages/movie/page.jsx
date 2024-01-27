import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { GetMovieID, GetPeople, GetVideos} from "../../config/Get"
import { Movie_Style } from "./style"
import { API } from "../../config/API"
import { FaStar } from "react-icons/fa"
import Loading from "../../components/loading/Loading"
const img = new Image()

const Movie = ()=>{
    const [params] = useSearchParams()
    const [currentMovie,setCurrentMovie] = useState()
    const [idVideos,setIdVideos] = useState([])
    const [cast,setCast] = useState([])

    const setMovie = async () =>{
        const ID = params.get('id')
        const data_movies = await GetMovieID(ID)
        setCurrentMovie(data_movies)

        const data_videos = await GetVideos(ID)
        setIdVideos(data_videos.results[0])

        const data_cast = await GetPeople(ID)
        setCast(data_cast.cast)
    }

    useEffect(()=>{
        setMovie()
    },[])

    
    const [stateLoading,setStateLoading] = useState(false)
    img.src = API.image+currentMovie?.backdrop_path
    img.onload = ()=>{
        setStateLoading(true)
    }
  

    
    return(
        stateLoading ? 
        <Movie_Style>
            <div className="bg-movie center-col" style={{backgroundImage: `url(${API.image}${currentMovie?.backdrop_path})`}}>
                <div className="max-width">
                    <p>Duração: 3h 20m</p>
                    <div>
                        <p><FaStar/> 6.5</p>
                        <p>categorias</p>
                    </div>
                    <h3>{currentMovie?.title}</h3>
                    <p>{currentMovie?.overview}</p>
                </div>
            </div>
            <div className="container center-col">

                <h3 className="max-width">TRAILER</h3>
                <div className="max-width trailer">
                    <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${idVideos?.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                
                <h3 className="max-width">ELENCO</h3>
                <div className="container-person">
                    <div className="content-perseon">
                        {cast.map((person)=>{
                            return (
                                <div className="card-person" style={{backgroundImage: `url(${API.image}${person.profile_path})`}}>
                                    <p className="card-button">{person.name}</p>
                                    <p className="card-button">{person.character}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Movie_Style>
        :
        <Loading/>
    )
}
export default Movie