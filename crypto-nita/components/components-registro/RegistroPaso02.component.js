import Link from 'next/link';
import { useState } from 'react';

const RegistroPaso02 = (props) => {
  const [correo, setCorreo] = useState('');
  const [contra, setContra] = useState('');
  const [contraVeri, setContraVeri] = useState('');
  const [telefono, setTelefono] = useState('');
  const [estadoContra, setEstadoContra] = useState(true);

  const txtCorreoOnChange = (event) => {
    setCorreo(event.target.value);
  };

  const txtContraOnChange = (event) => {
    setContra(event.target.value);
  };
  const txtContraVeriOnChange = (event) => {
    setContraVeri(event.target.value);
  };
  const txtTelefonoOnChange = (event) => {
    setTelefono(event.target.value);
  };

  const butFinalizar = () => {
    if (contra == contraVeri) {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id');
      props.onGuardarUsuario(id, correo, contra, telefono);
      localStorage.setItem('iniciadoSesion', id);
      location.href = '/espera';
    } else {
      setEstadoContra(false);
    }
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
              <label htmlFor="correoInput">Correo Electrónico</label>
              <input
                type="email"
                className="form-control"
                id="correoInput"
                placeholder="Ingrese su correo electrónico"
                required
                onChange={txtCorreoOnChange}
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
                onChange={txtContraOnChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="passwordInput">Repetir Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="passwordInputVerificacion"
                placeholder="Ingrese su contraseña de nuevo"
                required
                onChange={txtContraVeriOnChange}
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
                onChange={txtTelefonoOnChange}
              />
            </div>
            <button
              type="button"
              className="btn btn-success btn-lg mt-4 mb-4"
              onClick={butFinalizar}
            >
              Finalizar
            </button>

            <Link href={`/registroCliente`}>
              <button type="button" className="btn btn-danger btn-lg mt-4 mb-4">
                Regresar
              </button>
            </Link>
          </form>
          <p className="d-none">Contraseña no coincide</p>
        </div>
        <div className="card-footer text-muted">Paso 02</div>
      </div>
    </>
  );
};
export default RegistroPaso02;
