import Link from 'next/link';

export default function BotonMenuPrincipal() {
  return (
    <div className="container">
      <div className="col-md-12 text-center">
        <Link href="/">
          <button type="button" className="btn btn-danger btn-lg mt-4 mb-4">
            Regresar
          </button>
        </Link>
      </div>
    </div>
  );
}
