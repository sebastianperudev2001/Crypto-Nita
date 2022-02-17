import { Modal, Button } from "react-bootstrap"
import { useEffect, useState } from 'react';

const EditarCliente = (props) => {
    const [txtNombreProyecto, setTxtNombreProyecto] = useState("")
    const [txtUsuario, setTxtUsuario] = useState("")
    const [txtRating, setTxtRating] = useState(0)

    const txtNombreProyectoOnChange = (event) => {
        setTxtNombreProyecto(event.target.value)
    }

    const txtUsuarioOnChange = (event) => {
        setTxtUsuario(event.target.value)
    }

    const txtRatingOnChange = (event) => {
        setTxtRating(event.target.value)
    }

    const butGuardarOnClick = () => {
        props.onGuardarProyecto(txtNombreProyecto, txtUsuario, txtRating)
    }
    return <Modal show={props.mostrar}
        onHide={props.ocultar}>
        <Modal.Header closeButton>
            <Modal.Title>Editar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <div>
                    <label className="form-label">
                        Nombre
                    </label>
                    <input className="form-control"
                        type="text" defaultValue="Ricardo"
                        onChange={txtNombreProyectoOnChange} />
                </div>
                <div>
                    <label className="form-label">
                        Apellidos
                    </label>
                    <input className="form-control"
                        type="text" defaultValue="Silva"
                        onChange={txtUsuarioOnChange} />
                </div>
                <div>
                    <label className="form-label">
                        Correo
                    </label>
                    <input className="form-control"
                        type="email" defaultValue="gmail.com"
                        onChange={txtRatingOnChange} />
                </div>
                <div>
                    <label className="form-label">
                        Teléfono
                    </label>
                    <input className="form-control"
                        type="text" defaultValue="999 999 999"
                        onChange={txtRatingOnChange} />
                </div>
                <div>
                    <label for="" className="form-label">Estado</label>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Elige una Estado</option>
                        <option value="1">Pendiente</option>
                        <option value="2">Validado</option>
                    </select>
                </div>
            </form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={props.ocultar}>Cerrar</Button>
            <Button variant="primary">Guardar</Button>
        </Modal.Footer>
    </Modal>
}
export default EditarCliente