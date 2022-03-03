import { useEffect, useState } from 'react';
import Listado from '../components/listaDatos.component';
import ModalLista from '../components/modalLista.component';
import Navegador from '../components/NavBar.component';
import { obtenerOp } from '../dao/metodos';

export default function CompraBTC() {
  const clasesNav = ['nav-link', 'nav-link', 'nav-link active'];
  const [ListadoTransacciones, setListadoTransacciones] = useState([]);
  const [MostrarModal, setMostrarModal] = useState(false);
  const [total, setTotal]= useState(0)
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
    nombreCliente:'----------------'
  })
  const [mostrarContenido,setMostrarContenido] = useState(false)

  const llamarHTTP = async() =>{
    let response = await fetch("/api/EdicionTransacciones")
    response = await response.json()
    let transacciones = response.transacciones
    transacciones.length = transacciones.length - 2
    for(let obj of transacciones){
      let name = await obtenerNombre(obj.idUsuario)
      obj.nombreCliente = name
    }
    return transacciones
  }

  useEffect(async () => {
<<<<<<< HEAD
    let montoTotal=0;
=======
    const admin = localStorage.getItem("esAdmin")
    if(admin != "true"){
      location.href="/"
      return
    }
    setMostrarContenido(true)
>>>>>>> 035175fd3c6c701bcb7e33cb05d7c3fc7a8060ac
    let transacciones = await llamarHTTP()
    setListadoTransacciones(transacciones)
    for(let trans of transacciones){
      
      if (trans.tipoOperacion == 'Compra'){
        montoTotal+=(trans.monto*trans.tipoCambio)
      }else{
        montoTotal+=trans.monto
      }
    }
    setTotal(montoTotal)

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

  const obtenerNombre = async(id) =>{
    let response = await fetch("/api/EdicionTransacciones/usuario",{
      method:"POST",
      body:JSON.stringify({
        id:id
      })
    })
    response = await response.json()
    response = response.usuario
    const nombre = response.nombre + " " + response.apellido
    return nombre
  }

  if(mostrarContenido != true){
    return <div></div>
  }

  return (
    <div className="container">
      <Navegador lisClass={clasesNav}></Navegador>
      <h1>Editar operaciones</h1>
      <div class="card text-white bg-secondary mb-3 col-2">
          <div class="card-body">
            <p class="card-text">Total: {total} BTC</p>
          </div>
        </div>

      <main>
        <Listado
          modo={'admin'}
          transacciones={ListadoTransacciones}
          editar={mostrarModalyEdit}
          nombre = {obtenerNombre}
        ></Listado>
      </main>
      <ModalLista ocultar={ocultarModal} 
          mostrar={MostrarModal} 
          datosOp={OpEnEdicion}
          guardar={guardarCambiosEstado}></ModalLista>
    </div>
  );
}
