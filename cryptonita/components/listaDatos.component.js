import ButtonLink from "./botonEnlace.component"

const Listado = (props) => {
    if (props.modo == "admin") {
        return <div className="row container mt-4">
            <div className="col-md" />
            <main className="col-md-10">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Fecha y hora</th>
                            <th>Cliente</th>
                            <th>Tipo de operacion</th>
                            <th>Tipo de cambio</th>
                            <th>Monto</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody id="data_tratos">
                        {
                            props.operaciones.map((op) => {
                                return <tr key={op.id}>
                                    <td>{op.id}</td>
                                    <td>{op.fechahora}</td>
                                    <td>{op.cliente}</td>
                                    <td>{op.tipo}</td>
                                    <td>{op.cambio}</td>
                                    <td>{op.monto}</td>
                                    <td>
                                        <div className="row">
                                            <div className="col-md">{op.estado}{""} </div>
                                            <div className="col-md"><ButtonLink nombre="Editar" editar={props.editar} color="btn btn-warning" modo={props.modo} /></div>
                                        </div>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </main>
            <div className="col-md" />
        </div>
    }

    if (props.modo == "cliente") {
        return <div className="row container mt-4">
            <div className="col" />
            <main className="col-8">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
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
                                    <td>{cliente.correo}</td>
                                    <td>{cliente.telefono}</td>
                                    <td><ButtonLink path="/editarCliente" nombre="Editar" color="btn btn-warning" /></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </main>
            <div className="col" />
        </div>
    }
}
export default Listado