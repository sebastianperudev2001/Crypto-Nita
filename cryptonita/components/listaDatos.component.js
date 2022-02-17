import ButtonLink from "./botonEnlace.component"

const Listado = (props) => {
    return <div className="row container mt-4">
        <div className="col"/>
        <div className="col-8 table-responsive">
            <table className="table">
                    <thead>
                        <tr className="table-dark">
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
        </div>
        <div className="col"/>
    </div>
}
export default Listado