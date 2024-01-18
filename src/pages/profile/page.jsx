import { Profile_Style } from "./style"
import capa from "../../assets/capa.png"
import perfil from "../../assets/perfil.jpg"
const Profile = ()=>{
    return(
        <Profile_Style>
            <div className="cover" style={{backgroundImage: `url(${capa})`}}>
                <div className="max-width">
                    <div className="user">
                        <div className="image-profile" style={{backgroundImage: `url(${perfil})`}}></div>
                        <h2>Ketson Kersen</h2>
                        <p></p>
                    </div>

                </div>
            </div>
        </Profile_Style>
    )
}
export default Profile