import Link from 'next/link';

const CerrarSesion = () => {
  const cerrarLocalStorage = () => {
    localStorage.removeItem('iniciadoSesion');
  };
  return (
    <>
      <div className="d-flex justify-content-end">
        <Link href="/">
          <a className="me-4 btn btn-warning" onClick={cerrarLocalStorage}>
            Cerrar Sesión
          </a>
        </Link>
      </div>
    </>
  );
};
export default CerrarSesion;
