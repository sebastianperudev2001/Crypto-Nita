import Listado from "../components/listaDatos.component"
import Navegador from "../components/NavBar.component"
import { useEffect, useState } from 'react';
import EditarCliente from "../components/modaledit.component";

const InicioClientes=()=>{
    const clasesNav=["nav-link active","nav-link","nav-link" ]
    const listaClientes=[
        {id: 10, nombre: "Ricardo", correo:"@gmail.com", telefono: "999 999 999" }
        ,{id: 11, nombre: "Sebastián", correo:"@gmail.com", telefono: "999 999 999" }
    ]
    const [debeMostrarModal, setDebeMostrarModal] = useState(false)
    const [posicion, setPosicion]=useState(0)
    const [listadoProyectos, setListadoProyectos] = useState([])
    const [modoFormulario, setModoFormulario] = useState("nuevo") // modo: nuevo | edicion
    const [mostrarContenido,setMostrarContenido] = useState(false)

  useEffect(async () => {
    const admin = localStorage.getItem("esAdmin")
    if(admin != "true"){
      location.href="/"
      return
    }
    setMostrarContenido(true)
  }, [])

    const butNuevoOnClick = (pos) => {
        setModoFormulario("nuevo")
        setDebeMostrarModal(true)
        setPosicion(pos)
    }

    const onModalClose = () => {
        setDebeMostrarModal(false)
    }

    /*const editarProyectoModalHandler = (id) => {
        setModoFormulario("edicion")
        setDebeMostrarModal(true)
    }*/

    if(mostrarContenido != true){
        return <div></div>
      }
      
    return <div className="container">
        <Navegador lisClass={clasesNav}></Navegador>
        <div className="row mt-4">
            <div className="col-4">
                <input type="input" placeholder="buscar" className="form-control" />
            </div>
        </div>
        <Listado clientes={listaClientes} modo={"cliente"} editar={butNuevoOnClick}></Listado>
        <EditarCliente mostrar={debeMostrarModal} ocultar={onModalClose} clientes={listaClientes}></EditarCliente>
    </div>
}
export default InicioClientes