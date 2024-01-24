import { useEffect, useState } from "react"
import {GetMoviesGrid, SearchMovies} from "../../config/Get"
import { useSearchParams } from "react-router-dom"
import CardMovie from "../cardMovie/cardMovie"
import { GidMovie_Style } from "./style"

const GridMovies = ()=>{
    const [state,setState] = useState([])
    const [params] = useSearchParams()
    const query = params.get("q")
    const preLoadGrid = async ()=>{
        if(query === null){
            const data = await GetMoviesGrid()
            setState(data)
        }else{
            const data = await SearchMovies(query)
            setState(data.results)
        }
     
    }

    useEffect(()=>{
        preLoadGrid()
    },[query])

    
    return(
        <GidMovie_Style id="grid">
            <div className="max-width container-grid">
                {state.length === 0 ? 
                <p>Nad encontrado!</p> 
                : 
                state.map((movie,index)=>{
                    return <div key={index}><CardMovie movie={movie} index={index}/></div>
                })
                }
            </div>
        </GidMovie_Style>
    )
}
export default GridMovies