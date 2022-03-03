
import ButtonLink from "./botonEnlace.component"

const devolverCadena = (operacion) =>{
    if (operacion == "Compra"){
        return " PEN"
    }

    if (operacion == "Venta"){
        return " BTC"
    }

    return ""
}


const Listado = (props) => {

    if (props.modo == "admin") {
        return <div className="row container mt-4">
            <div className="row container mt-2">
                <div className="col-md" />
                <div className="col-md-10 table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Fecha y hora</th>
                                <th>Cliente</th>
                                <th>Tipo de operacion</th>
                                <th>Tipo de cambio</th>
                                <th>Monto Total</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody id="data_tratos">
                            {
                                props.transacciones.map((op) => {
                                    return <tr key={op.id}>
                                        <td>{op.id}</td>
                                        <td>{op.fecha.substring(0,10)+" "+op.hora.substring(0,8)}</td>
                                        <td>{op.nombreCliente}</td>
                                        <td>{op.tipoOperacion}</td>
                                        <td>{op.tipoCambio}</td>
                                        <td>{op.monto+devolverCadena(op.tipoOperacion)}</td>
                                        <td>
                                            <div className="row">
                                                <div className="col-md">{op.estado}{""} </div>
                                                <div className="col-md"><ButtonLink nombre="Editar" editar={()=>{props.editar(op.id)}} color="btn btn-warning" modo={props.modo} /></div>
                                            </div>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-md" />
            </div>
        </div>
    }

    if (props.modo == "cliente") {
        return <div className="row container mt-4">
            <div className="col" />
            <div className="table-wrapper-scroll-y my-custom-scrollbar2">
                <table className="table table-bordered table-striped mb-0">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Correo</th>
                            <th>Teléfono</th>
                            <th>*</th>
                        </tr>
                    </thead>
                    <tbody id="data_tratos">
                        {
                            props.clientes.map((cliente) => {
                                return <tr key={cliente.id}>
                                    <td>{cliente.id}</td>
                                    <td>{cliente.nombre}</td>
                                    <td>{cliente.apellido}</td>
                                    <td>{cliente.correo}</td>
                                    <td>{cliente.telefono}</td>
                                    <td><button className="btn btn-warning" onClick={ ()=> {
                                            props.onEditarCliente(cliente.id)
                                        }}>
                                        editar</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="col" />
        </div>
    }
}
export default Listado