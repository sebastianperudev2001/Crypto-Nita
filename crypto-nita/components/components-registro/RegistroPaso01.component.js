import Link from 'next/link';
import { useState, useEffect } from 'react';

const RegistroPaso01 = (props) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [dni, setDni] = useState('');

  const txtNombreOnChange = (event) => {
    setNombre(event.target.value);
  };

  const txtApellidosOnChange = (event) => {
    setApellido(event.target.value);
  };

  const txtDniOnChange = (event) => {
    setDni(event.target.value);
  };

  const butGuardarBD = () => {
    props.onGuardarUsuario(nombre, apellido, dni);
  };

  return (
    <>
      <div className="card text-center formulario">
        <div className="card-header">
          <h1>Registro de Cuenta</h1>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="nombreInput">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombreInput"
                placeholder="Ingrese su nombre"
                required
                onChange={txtNombreOnChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="apellidosInput">Apellidos</label>
              <input
                type="text"
                className="form-control"
                id="apellidosInput"
                placeholder="Ingrese todos sus apellidos"
                required
                onChange={txtApellidosOnChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="apellidosInput">Número de DNI</label>
              <input
                type="text"
                className="form-control"
                id="apellidosInput"
                placeholder="Ingrese su DNI"
                required
                onChange={txtDniOnChange}
              />
            </div>
            <button
              type="button"
              className="btn btn-success btn-lg mt-4 mb-4"
              onClick={butGuardarBD}
            >
              Siguiente
            </button>
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
