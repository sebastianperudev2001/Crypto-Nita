import Link from 'next/link';
import { useState } from 'react';
import Footer from '../Footer.component';

const FormInicial = (props) => {
  const [txtUsername, setTxtUsername] = useState('');
  const [txtPassword, setTxtPassword] = useState('');
  const txtUsernameOnChange = (event) => {
    const txtUsernameIngresado = event.target.value;
    setTxtUsername(txtUsernameIngresado);
  };

  const txtPasswordOnChange = (event) => {
    setTxtPassword(event.target.value);
  };

  const botonLoginOnClick = () => {
    props.onLogin(txtUsername, txtPassword);
  };
  return (
    <>
      <section id="segundaCara">
        <div className="tituloGrupo">
          <h1 className="text-center" id="titulo">
            CrytoHackers Group
          </h1>
        </div>

        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Correo electrónico</label>
            <input
              type="email"
              className="form-control w-75 "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Ingrese su correo"
              required
              onChange={txtUsernameOnChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              Nunca revelaremos su información. Toda la información procesada es
              encriptada en la Blockchain
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Contraseña</label>
            <input
              type="password"
              className="form-control w-75"
              id="exampleInputPassword1"
              placeholder="Ingrese su contraseña"
              required
              onChange={txtPasswordOnChange}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Mantenme loggeado
            </label>
          </div>
          <button
            type="button"
            value="Iniciar Sesión"
            className="btn btn-primary"
            onClick={botonLoginOnClick}
          >
            Iniciar Sesión
          </button>

          <Link href="/registroCliente">
            <a className="me-4 btn btn-primary btn-success">Abrir Cuenta</a>
          </Link>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default FormInicial;
