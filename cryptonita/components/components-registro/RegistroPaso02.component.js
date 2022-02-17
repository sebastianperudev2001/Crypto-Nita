import Link from 'next/link';

const RegistroPaso02 = () => {
  return (
    <>
      <div class="card text-center formulario">
        <div class="card-header">
          <h1>Registro de Cuenta</h1>
        </div>
        <div class="card-body">
          <form method="POST" action="/espera">
            <div className="form-group">
              <label htmlFor="correoInput" htm>Correo Electrónico</label>
              <input
                type="email"
                className="form-control"
                id="correoInput"
                placeholder="Ingrese su correo electrónico"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="passwordInput">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="passwordInput"
                placeholder="Ingrese su contraseña"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="passwordInput">Repetir Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="passwordInput"
                placeholder="Ingrese su contraseña de nuevo"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneInput">Número telefónico</label>
              <input
                type="text"
                className="form-control"
                id="phoneInput"
                placeholder="Ingrese su número telefónico"
                required
              />
            </div>
            <button type="submit" className="btn btn-success btn-lg mt-4 mb-4">
              Finalizar
            </button>

            <Link href="/registroCliente">
              <button type="button" className="btn btn-danger btn-lg mt-4 mb-4">
                Regresar
              </button>
            </Link>
          </form>
        </div>
        <div class="card-footer text-muted">Paso 02</div>
      </div>
    </>
  );
};
export default RegistroPaso02;
