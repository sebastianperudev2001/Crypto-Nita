import Link from 'next/link';
import CerrarSesion from './components-usuario/CerrarSesion.component';

const Espera = () => {
  return (
    <>
      <h1 className="text-center mb-4">Crypto-Nita</h1>
      <CerrarSesion />
      <div className="justify-content fs-1 mt-4">
        ¡Hola! Estamos procesando la autentificación de su cuenta. Por favor,
        espere. Dentro de un rato, podrá volverse millonario ;)
      </div>
    </>
  );
};
export default Espera;
