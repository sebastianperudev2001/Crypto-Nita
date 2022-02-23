import { Modal, Button } from "react-bootstrap"

const ModalLista = (props) => {
    return <Modal show={props.mostrar}
        onHide={props.ocultar}>
        <Modal.Header closeButton>
            <Modal.Title>Editar Estado</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <form>
                <div className="row">
                    <div className="col-md">
                        <label htmlFor="id" className="form-label">ID</label>
                        <input type="number" className="form-control" id="id" defaultValue={props.datosOp.id} readOnly />
                        <label htmlFor="FechaH" className="form-label mt-1">Fecha y Hora</label>
                        <input type="text" className="form-control" id="FechaH" defaultValue={props.datosOp.fechahora} readOnly />
                        <label htmlFor="cliente" className="form-label mt-1">Cliente</label>
                        <input type="text" className="form-control" id="cliente" defaultValue={props.datosOp.cliente} readOnly />
                        <label htmlFor="tipo" className="form-label mt-1" >Tipo de operacion</label>
                        <input type="text" className="form-control" id="tipo" defaultValue={props.datosOp.tipo} readOnly />
                    </div>
                    <div className="col-md">
                        <label htmlFor="tipoC" className="form-label">Tipo de cambio</label>
                        <input type="number" className="form-control" id="tipoC" defaultValue={props.datosOp.cambio} readOnly />
                        <label htmlFor="monto" className="form-label mt-1">Monto Total</label>
                        <input type="text" className="form-control" id="monto" defaultValue={props.datosOp.cambio*props.datosOp.monto +' '+props.datosOp.moneda} readOnly />
                        <label htmlFor="estado" className="form-label mt-1">Estado</label>
                        <select className="form-select" id="estado" aria-label="Default select example">
                            <option selected>{props.datosOp.estado}</option>
                            <option value="1">Pendiente</option>
                            <option value="2">Finalizado</option>
                        </select>
                    </div>
                </div>
            </form>
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