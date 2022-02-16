import Link from 'next/link';
import Footer from '../Footer.component';

const FormInicial = () => {
  return (
    <>
      <section id="segundaCara">
        <div className="tituloGrupo">
          <h2 id="titulo">CrytoHackers Group</h2>
        </div>

        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
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
              className="form-control"
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
          <button type="submit" className="btn btn-primary">
            Iniciar Sesión
          </button>

          <Link href="/registroCliente">
            <a className="me-4 btn btn-primary btn-success">Abrir Cuenta</a>
          </Link>
        </form>

        <Footer />
      </section>
    </>
  );
};

export default FormInicial;
