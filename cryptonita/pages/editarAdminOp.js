import { useEffect, useState } from "react"
import Listado from "../components/listaDatos.component"
import ModalLista from "../components/modalLista.component"

export default function CompraBTC() {
    const [ListadoOperaciones,setListadoOperaciones] = useState([])
    const [MostrarModal,setMostrarModal] = useState(false)

    const ocultarModal =() =>{
        setMostrarModal(false)
    }

    const mostrarModalyEdit =() =>{
        setMostrarModal(true)
    }

    useEffect(()=>{
        setListadoOperaciones([{
            id: "0001",
            fechahora: "17/01/15 20:00:05",
            cliente: "Pablito Perez",
            tipo: "Compra",
            cambio: "1.5962",
            monto: "1500 BTC",
            estado: "Pendiente"
        }])
    },[])

    return <div className="mt-4">
        <header>
            <h1>Editar operaciones</h1>
            <div className="d-grid justify-content-md-end">
                <p className="text-end btn btn-link" onClick={() => {
                    location.href = "/"
                }}><u>Salir</u></p>
            </div>
        </header>
        <main>
            <Listado modo={"admin"} operaciones={ListadoOperaciones} editar={mostrarModalyEdit}></Listado>
        </main>
        <ModalLista ocultar={ocultarModal} mostrar={MostrarModal}></ModalLista>
    </div>
}