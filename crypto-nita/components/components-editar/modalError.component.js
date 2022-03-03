import { Modal, Button } from "react-bootstrap"

const ModalError = (props) => {
    if (props.tipo == "error") {
        return <Modal show={props.mostrar} onHide={props.cerrar}>
            <Modal.Header closeButton>
                <Modal.Title className="text-danger">Error</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div>El valor del cambio PEN-BTC no puede ser mayor al cambio BTC-PEN o
                    alguno de los valores ingresado es 0.</div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="danger" onClick={props.cerrar}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    }

    if (props.tipo=="correcto"){
        return <Modal show={props.mostrar} onHide={props.cerrar}>
            <Modal.Header closeButton>
                <Modal.Title>Cambios confirmados</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div>Los cambios han sido guardados</div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary" onClick={()=>{
                    props.cerrar
                    window.location.reload()
                }}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    }

}


export default ModalError