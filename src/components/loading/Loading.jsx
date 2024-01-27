import { Loading_Style } from "./style"
import image from "../../assets/loading.png"

const Loading = ()=>{
    return(
        <Loading_Style>
            <span className="loadingpng" style={{backgroundImage: `url(${image})`}}></span>
        </Loading_Style>
    )
}
export default Loading