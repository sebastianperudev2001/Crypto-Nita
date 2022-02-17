import ButtonLink from "../components/botonEnlace.component"
import Listado from "../components/listaDatos.component"
import Navegador from "../components/NavBar.component"
const InicioClientes=()=>{
    const listaClientes=[
        {id: 10, nombre: "Ricardo", correo:"@gmail.com", telefono: "999 999 999" }
        ,{id: 11, nombre: "Sebastián", correo:"@gmail.com", telefono: "999 999 999" }
    ]
    return <div className="container">
        <Navegador></Navegador>
        <div className="row mt-4">
            <div className="col-4">
                <input type="input" placeholder="buscar" className="form-control" />
            </div>
        </div>
        <Listado clientes={listaClientes} modo={"cliente"}></Listado>
        
    </div>
}
export default InicioClientes