import { navegar } from '../dao/metodos';
import CerrarSesion from './components-usuario/CerrarSesion.component';

const Navegador = (props) => {
  const butOnClick = (event) => {
    const link = event.target.id;
    navegar(link);
  };
  return (
    <div className="navegador mt-2 mb-2">
      <ul className="nav nav-tabs nav-fill">
        <li className="nav-item">
          <button
            id="/inicioClientes"
            type="button"
            className={props.lisClass[0]}
            onClick={butOnClick}
          >
            Clientes
          </button>
        </li>
        <li className="nav-item">
          <button
            id="/cambio_tipo"
            type="button"
            className={props.lisClass[1]}
            onClick={butOnClick}
          >
            Tipo de cambio
          </button>
        </li>
        <li className="nav-item">
          <button
            id="/editarAdminOp"
            type="button"
            className={props.lisClass[2]}
            onClick={butOnClick}
          >
            Operaciones
          </button>
        </li>
        <li className="nav-item">
          <CerrarSesion />
        </li>
      </ul>
    </div>
  );
};
export default Navegador;
