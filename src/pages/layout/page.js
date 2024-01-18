import { Outlet } from "react-router-dom"
const Layout = ()=>{
    return(
        <>
            <header>HEADER</header>
            <Outlet/>
        </>
    )
}
export default Layout