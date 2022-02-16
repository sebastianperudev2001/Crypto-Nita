import Link from 'next/link';

const RegistroPaso02 = () => {
  return (
    <>
      <h1>Registro de Cuenta (Continuación) </h1>
      <form>
        <div class="form-group">
          <label for="correoInput">Correo Electrónico</label>
          <input
            type="email"
            class="form-control"
            id="correoInput"
            placeholder="Ingrese su correo electrónico"
          />
        </div>
        <div class="form-group">
          <label for="passwordInput">Contraseña</label>
          <input
            type="password"
            class="form-control"
            id="passwordInput"
            placeholder="Ingrese su contraseña"
          />
        </div>

        <div class="form-group">
          <label for="passwordInput">Repetir Contraseña</label>
          <input
            type="password"
            class="form-control"
            id="passwordInput"
            placeholder="Ingrese su contraseña de nuevo"
          />
        </div>

        <div class="form-group">
          <label for="phoneInput">Número telefónico</label>
          <input
            type="text"
            class="form-control"
            id="phoneInput"
            placeholder="Ingrese su número telefónico"
          />
        </div>
        <Link href="/espera">
          <button type="button" class="btn btn-success btn-lg mt-4 mb-4">
            Finalizar
          </button>
        </Link>

        <Link href="/">
          <button type="button" className="btn btn-danger btn-lg mt-4 mb-4">
            Regresar
          </button>
        </Link>
      </form>
    </>
  );
};
export default RegistroPaso02;
