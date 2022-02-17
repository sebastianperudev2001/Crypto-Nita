import { Modal, Button } from "react-bootstrap"

const ModalLista = (props) => {
    return <Modal show={props.mostrar}
        onHide={props.ocultar}>
        <Modal.Header closeButton>
            <Modal.Title>Editar Estado</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <select class="form-select" aria-label="Default select example">
                <option selected>Elije una opcion</option>
                <option value="1">Pendiente</option>
                <option value="2">Finalizado</option>
            </select>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary"
                onClick={props.ocultar}>Cerrar</Button>
            <Button variant="primary"
                onClick={() => { console.log("wip") }}>Guardar</Button>
        </Modal.Footer>
    </Modal>
}


export default ModalLista