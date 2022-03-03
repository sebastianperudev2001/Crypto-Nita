import NavBarUsuario from '../NavBarUsuario.component.js';
import CerrarSesion from './CerrarSesion.component';
import { useEffect, useState } from 'react';

const IniciarSesion = () => {
  const lisClases = ['nav-link active', 'nav-link', 'nav-link'];
  const [ID, setID] = useState(false)
  useEffect(() => {
    setID(localStorage.getItem('iniciadoSesion'))
  }, [])
  return (
    <>
      <h1 className="text-center">Crypto-Nita</h1>
      <NavBarUsuario lisClass={lisClases} IdUsiario={ID}/>
      <h2 className="text-center mt-4">¡Bienvenido de vuelta al futuro!</h2>
    </>
  );
};
export default IniciarSesion;
