import { useEffect, useState } from 'react';
import Listado from '../components/listaDatos.component';
import ModalLista from '../components/modalLista.component';
import Navegador from '../components/NavBar.component';
import { obtenerOp } from '../dao/metodos';

export default function CompraBTC() {
  const [ListadoOperaciones, setListadoOperaciones] = useState([]);
  const [MostrarModal, setMostrarModal] = useState(false);
  const [OpEnEdicion, setOperacion] = useState({
    id: '',
    fechahora: '',
    cliente: '',
    tipo: '',
    cambio: '',
    monto: '',
    moneda: '',
    estado: '',
  })
  const [EstadoEdicion, setEstadoEdicion] = useState('')

  const ocultarModal = () => {
    setMostrarModal(false);
  };

  const mostrarModalyEdit = (id) => {
    setMostrarModal(true);
    setOperacion(obtenerOp(ListadoOperaciones, id))
  };

  useEffect(() => {
    setListadoOperaciones([
      {
        id: '1',
        fechahora: '17/01/15 20:00:05',
        cliente: 'Pablito Perez',
        tipo: 'Compra',
        cambio: '1.5962',
        monto: '1500',
        moneda: 'BTC',
        estado: 'Pendiente',
      }, {
        id: '2',
        fechahora: '17/01/15 20:00:05',
        cliente: 'Pablito Perez',
        tipo: 'Compra',
        cambio: '1.5962',
        monto: '1500',
        moneda: 'BTC',
        estado: 'Pendiente',
      },
    ]);
  }, []);
  const clasesNav = ['nav-link', 'nav-link', 'nav-link active'];
  return (
    <div className="container">
      <Navegador lisClass={clasesNav}></Navegador>
      <h1>Editar operaciones</h1>

      <main>
        <Listado
          modo={'admin'}
          operaciones={ListadoOperaciones}
          editar={mostrarModalyEdit}
        ></Listado>
      </main>
      <ModalLista ocultar={ocultarModal} mostrar={MostrarModal} datosOp={OpEnEdicion}></ModalLista>
    </div>
  );
}
