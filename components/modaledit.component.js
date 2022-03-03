import { Modal, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const EditarCliente = (props) => {
  const [txtNombre, setTxtNombre] = useState('');
  const [txtUsuario, setTxtUsuario] = useState('');
  const [txtCorreo, setTxtCorreo] = useState(0);
  const [txtTelefono, setTxtTelefono] = useState(0);
  const [txtEstado, setTxtEstado] = useState(0);

  useEffect(() => {
    if (props.cliente != null) {
      //setIdProyecto(props.proyecto.id)
      setTxtNombre(props.cliente.nombre);
      setTxtUsuario(props.cliente.apellido);
      setTxtCorreo(props.cliente.correo);
      setTxtTelefono(props.cliente.telefono);
      setTxtEstado(props.cliente.estado);
    }
  }, [props.cliente]);

  const txtNombreOnChange = (event) => {
    setTxtNombre(event.target.value);
  };
  const txtApellidoOnChange = (event) => {
    setTxtUsuario(event.target.value);
  };
  const txtCorreoOnChange = (event) => {
    setTxtCorreo(event.target.value);
  };
  const txtTelefonoOnChange = (event) => {
    setTxtTelefono(event.target.value);
  };
  const butOnGuardar = () => {
    props.actualizarCliente(
      props.cliente.id,
      txtNombre,
      txtUsuario,
      txtCorreo,
      txtTelefono,
      txtEstado
    );
  };
  const txtEstadoOnChange = (event) => {
    setTxtEstado(event.target.value);
  };
  return (
    <Modal show={props.mostrar} onHide={props.ocultar}>
      <Modal.Header closeButton>
        <Modal.Title>Editar</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div>
            <label className="form-label">Nombre</label>
            <input
              className="form-control"
              type="text"
              defaultValue={props.cliente.nombre}
              onChange={txtNombreOnChange}
            />
          </div>
          <div>
            <label className="form-label">Apellidos</label>
            <input
              className="form-control"
              type="text"
              defaultValue={props.cliente.apellido}
              onChange={txtApellidoOnChange}
            />
          </div>
          <div>
            <label className="form-label">Correo</label>
            <input
              className="form-control"
              type="email"
              defaultValue={props.cliente.correo}
              onChange={txtCorreoOnChange}
            />
          </div>
          <div>
            <label className="form-label">Teléfono</label>
            <input
              className="form-control"
              type="text"
              defaultValue={props.cliente.telefono}
              onChange={txtTelefonoOnChange}
            />
          </div>
          <div>
            <label htmlFor="" className="form-label">
              Estado
            </label>
            <select
              onChange={txtEstadoOnChange}
              defaultValue={txtEstado}
              className="form-select"
              aria-label="Default select example"
            >
              <option value="Pendiente">Pendiente</option>
              <option value="Validado">Validado</option>
            </select>
          </div>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={props.ocultar}>
          Cerrar
        </Button>
        <button
          className="btn btn-primary"
          onClick={butOnGuardar}
          variant="primary"
        >
          Guardar
        </button>
      </Modal.Footer>
    </Modal>
  );
};
export default EditarCliente;
