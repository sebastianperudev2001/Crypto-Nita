import Link from 'next/link';

export default function BotonMenuPrincipal() {
  const regresar = () => {
    const iniciadoSesion = localStorage.getItem('iniciadoSesion');
    if (iniciadoSesion != null) {
      location.href = '/iniciadoSesion';
    } else {
      location.href = '/';
    }
  };

  return (
    <div className="container">
      <div className="col-md-12 text-center">
        <button
          type="button"
          className="btn btn-danger btn-lg mt-4 mb-4"
          onClick={regresar}
        >
          Regresar
        </button>
      </div>
    </div>
  );
}
