import NavBarUsuario from '../NavBarUsuario.component.js';
import CerrarSesion from './CerrarSesion.component';

const IniciarSesion = () => {
  const lisClases = ['nav-link active', 'nav-link', 'nav-link'];
  return (
    <>
      <h1 className="text-center">Crypto-Nita</h1>
      <NavBarUsuario lisClass={lisClases} />
      <h2 className="text-center mt-4">¡Bienvenido de vuelta al futuro!</h2>
    </>
  );
};
export default IniciarSesion;
