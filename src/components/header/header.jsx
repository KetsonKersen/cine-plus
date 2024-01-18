import {Header_Style} from "./style"
import { FaSearch, FaUser  } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = ()=>{
    const location = useLocation()
    const navigate = useNavigate()
    const [state,setState] = useState('')

    const Submit = (event)=>{
        event.preventDefault()
        if(state !== ''){
            navigate(`/search?q=${state}`)
            setState('')
        }
    }

    return(
        <Header_Style className="center-row">
            <div className="max-width between-row">
                <div className="container-btn-header">
                    {location.pathname === '/profile' || location.pathname === '/search' ? <Link to="/"><button className="card-button"><FaArrowLeft size={18}/></button></Link> : ''}
                    <button className="card-button">FILMES</button>
                    <button className="card-button">SERIES</button>
                </div>
                {location.pathname === '/profile' ? '' : <div className="container-search-user">
                    <form onSubmit={(e)=>Submit(e)}>
                        <label className="card-button">
                            <input type="text" value={state}  onChange={(e)=>setState(e.target.value)}/>
                            <button><FaSearch size={18}/></button>
                        </label>
                    </form>
                    <Link to="/profile">
                        <button className="card-button"><FaUser size={18}/></button>
                    </Link>
                </div>}
                {location.pathname === '/profile' ? <button className="card-button"><IoMdSettings  size={18}/></button> : ''}
            </div>
        </Header_Style>
    )
}
export default Header