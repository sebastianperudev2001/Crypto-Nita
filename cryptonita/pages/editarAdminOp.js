import { useEffect, useState } from 'react';
import Listado from '../components/listaDatos.component';
import ModalLista from '../components/modalLista.component';
import Navegador from '../components/NavBar.component';
import { obtenerOp } from '../dao/metodos';

export default function CompraBTC() {
  const clasesNav = ['nav-link', 'nav-link', 'nav-link active'];
  const [ListadoTransacciones, setListadoTransacciones] = useState([]);
  const [MostrarModal, setMostrarModal] = useState(false);
  const [OpEnEdicion, setOperacion] = useState({
    id: '1',
    fecha: '--------------',
    hora: '--------------',
    cliente: '--------------',
    tipo: '--------------',
    cambio: '--------------',
    monto: '--------------',
    moneda: '--------------',
    estado: '--------------',
  })

  const llamarHTTP = async() =>{
    let response = await fetch("/api/EdicionTransacciones")
    response = await response.json()
    let transacciones = response.transacciones
    transacciones.splice(0, 2)
    return transacciones
  }

  useEffect(async () => {
    let transacciones = await llamarHTTP()
    setListadoTransacciones(transacciones)
  }, [])

  const ocultarModal = () => {
    setMostrarModal(false);
  };

  const mostrarModalyEdit = (id) => {
    setMostrarModal(true);
    setOperacion(obtenerOp(ListadoTransacciones, id))
  };

  const guardarCambiosEstado = async (id,estado) =>{
    const response = await fetch(`/api/EdicionTransacciones/${id}`,{
      method:"PUT",
      body:JSON.stringify({
        estado:estado
      })
    })

    var msg = await response.json()

    if(msg.msg == "ok"){
      setTimeout(async ()=>{
        setMostrarModal(false)
        let transacciones = await llamarHTTP()
        setListadoTransacciones(transacciones)
      },1000)
    }
  }


  return (
    <div className="container">
      <Navegador lisClass={clasesNav}></Navegador>
      <h1>Editar operaciones</h1>

      <main>
        <Listado
          modo={'admin'}
          transacciones={ListadoTransacciones}
          editar={mostrarModalyEdit}
        ></Listado>
      </main>
      <ModalLista ocultar={ocultarModal} 
          mostrar={MostrarModal} 
          datosOp={OpEnEdicion}
          guardar={guardarCambiosEstado}></ModalLista>
    </div>
  );
}
