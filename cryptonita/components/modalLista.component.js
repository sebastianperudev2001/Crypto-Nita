import { useState } from "react"
import { Modal, Button } from "react-bootstrap"

const ModalLista = (props) => {

    const guardarOC = async () => {
        var estado = document.getElementById("estado")

        if (estado.value == props.datosOp.estado) {
            console.log("Es es el mismo estado, no se altera la base de datos")
            return
        }

        await props.guardar(props.datosOp.id,estado.value)
    }


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
                        <input type="text" className="form-control" id="FechaH" defaultValue={props.datosOp.fecha.substring(0,10)+" "+props.datosOp.hora.substring(0,8)} readOnly />
                        <label htmlFor="cliente" className="form-label mt-1">Cliente</label>
                        <input type="text" className="form-control" id="cliente" defaultValue={props.datosOp.idUsuario} readOnly />
                        <label htmlFor="tipo" className="form-label mt-1" >Tipo de operacion</label>
                        <input type="text" className="form-control" id="tipo" defaultValue={props.datosOp.tipoOperacion} readOnly />
                    </div>
                    <div className="col-md">
                        <label htmlFor="tipoC" className="form-label">Tipo de cambio</label>
                        <input type="number" className="form-control" id="tipoC" defaultValue={props.datosOp.tipoCambio} readOnly />
                        <label htmlFor="monto" className="form-label mt-1">Monto Total</label>
                        <input type="text" className="form-control" id="monto" defaultValue={props.datosOp.monto} readOnly />
                        <label htmlFor="estado" className="form-label mt-1">Estado</label>
                        <select className="form-select" id="estado" aria-label="Default select example" defaultValue={props.datosOp.estado}>
                            <option value={"Pendiente"}>Pendiente</option>
                            <option value={"Finalizado"}>Finalizado</option>
                        </select>
                    </div>
                </div>
            </form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary"
                onClick={props.ocultar}>Cerrar</Button>
            <Button variant="primary"
                onClick={guardarOC}>Guardar</Button>
        </Modal.Footer>
    </Modal>
}


export default ModalLista