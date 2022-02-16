import Link from 'next/link';
import BotonMenuPrincipal from '../botonMenuPrincipal.component';

const RegistroPaso01 = () => {
  return (
    <>
      <h1>Registro de Cuenta</h1>
      <form>
        <div class="form-group">
          <label for="nombreInput">Nombre</label>
          <input
            type="text"
            class="form-control"
            id="nombreInput"
            placeholder="Ingrese su nombre"
          />
        </div>
        <div class="form-group">
          <label for="apellidosInput">Apellidos</label>
          <input
            type="text"
            class="form-control"
            id="apellidosInput"
            placeholder="Ingrese todos sus apellidos"
          />
        </div>

        <div class="form-group">
          <label for="apellidosInput">Número de DNI</label>
          <input
            type="text"
            class="form-control"
            id="apellidosInput"
            placeholder="Ingrese su DNI"
          />
        </div>
        <button type="button" class="btn btn-success btn-lg mt-4 mb-4">
          Siguiente
        </button>

        <Link href="/">
          <button type="button" className="btn btn-danger btn-lg mt-4 mb-4">
            Regresar
          </button>
        </Link>
      </form>
    </>
  );
};
export default RegistroPaso01;
