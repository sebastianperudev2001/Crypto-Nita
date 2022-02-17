import Link from 'next/link';

const RegistroPaso01 = () => {
  return (
    <>
      <div className="card text-center formulario">
        <div className="card-header">
          <h1>Registro de Cuenta</h1>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label for="nombreInput">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombreInput"
                placeholder="Ingrese su nombre"
                required
              />
            </div>
            <div className="form-group">
              <label for="apellidosInput">Apellidos</label>
              <input
                type="text"
                className="form-control"
                id="apellidosInput"
                placeholder="Ingrese todos sus apellidos"
                required
              />
            </div>

            <div className="form-group">
              <label for="apellidosInput">Número de DNI</label>
              <input
                type="text"
                className="form-control"
                id="apellidosInput"
                placeholder="Ingrese su DNI"
                required
              />
            </div>
            <Link href="/registroCliente02">
              <button
                type="submit"
                className="btn btn-success btn-lg mt-4 mb-4"
              >
                Siguiente
              </button>
            </Link>

            <Link href="/">
              <button type="button" className="btn btn-danger btn-lg mt-4 mb-4">
                Regresar
              </button>
            </Link>
          </form>
        </div>
        <div className="card-footer text-muted">Paso 01 </div>
      </div>
    </>
  );
};
export default RegistroPaso01;
