import { Modal, Button } from "react-bootstrap"

const ModalCV = (props) => {
    if (props.tipo == "error") {
        return <Modal show={props.mostrar} onHide={props.cerrar}>
            <Modal.Header closeButton>
                <Modal.Title className="text-danger">Error</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div>No puede introducir 0 como valor a utilizar
                     en la operacion</div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="danger" onClick={props.cerrar}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    }

    if (props.tipo=="solicitar"){
        return <Modal show={props.mostrar} onHide={props.cerrar}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmación</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div>¿Esta seguro de efectuar la operacion?</div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary" 
                onClick={props.confirmar}>Confirmar</Button>
                <Button variant="danger" onClick={props.cerrar}>Cancelar</Button>
            </Modal.Footer>
        </Modal>
    }

}


export default ModalCV