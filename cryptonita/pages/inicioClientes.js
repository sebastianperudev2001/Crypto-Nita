import Listado from "../components/listaDatos.component"
import Navegador from "../components/NavBar.component"
import { useEffect, useState } from 'react';
import EditarCliente from "../components/modaledit.component";

const InicioClientes=()=>{
    const clasesNav=["nav-link active","nav-link","nav-link" ]
    const [debeMostrarModal, setDebeMostrarModal] = useState(false)
    const [posicion, setPosicion]=useState(0)
    const [listadoClientes, setListadoClientes] = useState([])
    const [modoFormulario, setModoFormulario] = useState("nuevo") // modo: nuevo | edicion
    const [cliente, setCliente]= useState("")
    const obtenerClientesHTTP = async () => {
        let response = await fetch("/api/Clientes")
        const data = await response.json()
        return data
    }
    const editarClienteHTTP= async (id)=>{
        const resp = await fetch(`/api/Clientes/${id}`)
        const dataCliente= await resp.json()
        setCliente(dataCliente.cliente)
        setDebeMostrarModal(true)
        setModoFormulario("edicion")
        
    }
    useEffect(async () => {
        // Hacemos una peticion al backend
        const data = await obtenerClientesHTTP()
        setListadoClientes(data.clientes)
    }, [])
    const inputOnChange= async(event)=>{
        if(event.target.value!=""){
            const semajanza = {
                nombre : event.target.value,
                apellido:event.target.value,
                correo : event.target.value,
                dni: event.target.value
            }
            const resp = await fetch("/api/Filtros", {
                method : "PUT",
                body : JSON.stringify(semajanza)
            })
            const data= await resp.json()
            console.log(data.clientes)
            setListadoClientes(data.clientes)
        }else{
            const data = await obtenerClientesHTTP()
            setListadoClientes(data.clientes)
        }
    }
    const onActualizarCliente= async(id, nombre, apellido, correo, telefono, estado)=>{
        const cliente = {
            id : id,
            nombre : nombre,
            apellido : apellido,
            correo : correo,
            telefono : telefono,
            estado: estado
        }
        console.log("estado: ", estado)
        const resp = await fetch("/api/Clientes", {
            method : "PUT",
            body : JSON.stringify(cliente)
        })
        location.href="/inicioClientes"
    }
    const butNuevoOnClick = (pos) => {
        setModoFormulario("nuevo")
        setDebeMostrarModal(true)
        setPosicion(pos)
    }

    const onModalClose = () => {
        setDebeMostrarModal(false)
    }
    return <div className="container">
        <Navegador lisClass={clasesNav}></Navegador>
        <div className="row mt-4">
            <div className="col-4">
                <input onChange={inputOnChange} type="input" placeholder="buscar" className="form-control" />
            </div>
        </div>
        <Listado onEditarCliente={editarClienteHTTP} clientes={listadoClientes} modo={"cliente"} editar={butNuevoOnClick}></Listado>
        <EditarCliente actualizarCliente={onActualizarCliente} mostrar= {debeMostrarModal} ocultar={onModalClose} cliente={cliente}></EditarCliente>
    </div>
}
export default InicioClientes