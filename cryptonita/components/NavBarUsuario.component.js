import { navegar } from '../dao/metodos';
import CerrarSesion from './components-usuario/CerrarSesion.component';

const NavBarUsuario = (props) => {
  const butOnClick = (event) => {
    const link = event.target.id;
    navegar(link);

  };
  return (
    <div className="navegador mt-2 mb-2">
      <ul className="nav nav-tabs nav-fill">
        <li className="nav-item">
          <button
            id="/iniciadoSesion"
            type="button"
            className={props.lisClass[0]}
            onClick={butOnClick}
          >
            Home
          </button>
        </li>
        <li className="nav-item">
          <button
            id="/ComprarVenderBTC"
            type="button"
            className={props.lisClass[1]}
            onClick={butOnClick}
          >
            Comprar/Vender
          </button>
        </li>
        <li className="nav-item">
          <button
            id="/HistorialTransacciones"
            type="button"
            className={props.lisClass[2]}
            onClick={
              (() => {
                  location.href = `/HistorialTransacciones?id=${props.IdUsiario}`
              })
          }
          >
            Ver historial
          </button>
        </li>

        <li className="nav-item">
          <CerrarSesion />
        </li>
      </ul>
    </div>
  );
};
export default NavBarUsuario;
