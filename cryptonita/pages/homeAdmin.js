import Navegador from "../components/NavBar.component"

const HomeAdmin=()=>{
    const clasesNav=["nav-link active","nav-link","nav-link","nav-link" ]
    return <div className="container">
        <Navegador lisClass={clasesNav}></Navegador>
        <div className="row mt-5">
            <h1 className="text-center">Bienvenido Administrador</h1>
            <div className="col"/>
            <div className="col">
                
            </div>
            <div className="col"/>
        </div>
    </div>
}
export default HomeAdmin