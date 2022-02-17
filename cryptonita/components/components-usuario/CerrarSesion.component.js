import Link from 'next/link';

const CerrarSesion = () => {
  return (
    <>
      <div className="d-flex justify-content-end">
        <Link href="/">
          <a className="me-4 btn btn-warning">Cerrar Sesión</a>
        </Link>
      </div>
    </>
  );
};
export default CerrarSesion;
