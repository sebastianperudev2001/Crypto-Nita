import Link from 'next/link';
import Footer from '../Footer.component';

const FormInicial = () => {
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
            <label for="exampleInputEmail1">Correo electrónico</label>
            <input
              type="email"
              className="form-control w-75 "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Ingrese su correo"
            />
            <small id="emailHelp" className="form-text text-muted">
              Nunca revelaremos su información. Toda la información procesada es
              encriptada en la Blockchain
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Contraseña</label>
            <input
              type="password"
              className="form-control w-75"
              id="exampleInputPassword1"
              placeholder="Ingrese su contraseña"
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
          <Link href="/iniciadoSesion">
            <button type="submit" className="btn btn-primary">
              Iniciar Sesión
            </button>
          </Link>

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
