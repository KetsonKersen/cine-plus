import { useEffect } from "react"
import { Filter_Style } from "./style"


const Filter = ()=>{
    const preLoad = ()=> {
        const firstBtn = document.querySelector('.categories > ul > li:first-of-type')
        const pos = firstBtn.clientWidth / 2
        const Mark = document.querySelector('.mark-filter')
        Mark.style.transform = `translate(${pos}px,0)`
    }
    const toggleBtnMark = (element) =>{
        const btns = document.querySelectorAll('.categories > ul > li')
        btns.forEach((btn)=>{
            btn.classList.remove('active')
        })
        element.classList.add('active')

        const pos = (element.offsetLeft + element.clientWidth / 2)
        const Mark = document.querySelector('.mark-filter')
        Mark.style.transform = `translate(${pos}px, 0)`

    }
    useEffect(()=>{
        const btn = document.querySelector('.active')
        const pos = btn.clientWidth / 2
        preLoad()
    },[])
    return(
        <Filter_Style className="max-width">
            <div className="categories">
                <ul>
                    <li className="active" onClick={(e)=>toggleBtnMark(e.target)}>POPULARES</li>
                    <li onClick={(e)=>toggleBtnMark(e.target)}>EM CARTAZ</li>
                    <li onClick={(e)=>toggleBtnMark(e.target)}>PRÓXIMAS ESTREIAS</li>
                    <li onClick={(e)=>toggleBtnMark(e.target)}>MAIS BEM AVALIADOS</li>
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