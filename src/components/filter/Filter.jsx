import { useEffect } from "react"
import { Filter_Style } from "./style"


const Filter = ()=>{



    useEffect(()=>{
        const btn = document.querySelector('.active')
        const pos = btn.clientWidth / 2
        console.log(pos)
    },[])


    return(
        <Filter_Style className="max-width">
            <div className="categories">
                <ul>
                    <li className="active">POPULARES</li>
                    <li>EM CARTAZ</li>
                    <li>PRÓXIMAS ESTREIAS</li>
                    <li>MAIS BEM AVALIADOS</li>
                    <span className="mark-filter"></span>
                </ul>
            </div>
            <div className="filters">
                <ul>
                    <li>Gêneros</li>
                    <li>Classificação</li>
                    <li>Data de lançamento</li>
                    <li>Pontuação do usuario</li>
                    <li>Duração</li>
                </ul>
                <button>
                    Limpar Filtros
                </button>
            </div>
        </Filter_Style>
    )
}
export default Filter