import { useState } from 'react';
import BotonMenuPrincipal from '../components/BotonMenuPrincipal.component';
import Footer from '../components/Footer.component';

const contactanos = () => {
  const [name, setName] = useState('');

  const [correo, setCorreo] = useState('');

  const [mensaje, setMensaje] = useState('');

  const [submitted, setSubmitted] = useState(false);

  const cambioNombre = (event) => {
    setName(event.target.value);
  };

  const cambioCorreo = (event) => {
    setCorreo(event.target.value);
  };
  const cambioMensaje = (event) => {
    setMensaje(event.target.value);
  };

  const manejoSubmit = (event) => {
    event.preventDefault();
    console.log('Enviando');

    const data = {
      name,
      correo,
      mensaje,
    };

    fetch('/api/contacto', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((resp) => {
      console.log('Respuesta recibida');
      if (resp.status == 200) {
        console.log('Respuesta exitosa');
        setSubmitted(true);
        setName('');
        setCorreo('');
        setMensaje('');
      }
    });
  };

  return (
    <>
      <h1>Formulario de contacto</h1>
      <form>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Nombre</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Ingrese su nombre"
            onChange={cambioNombre}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            name="correo"
            placeholder="name@example.com"
            onChange={cambioCorreo}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">
            Dejanos tu feedback!
          </label>
          <input
            className="form-control"
            name="mensaje"
            placeholder="Escribenos algo bonito :)"
            type="text"
            onChange={cambioMensaje}
          />
        </div>
        <input type="submit" className="mt-4" onClick={manejoSubmit} />
      </form>
      <BotonMenuPrincipal />
      <Footer />
    </>
  );
};

export default contactanos;
