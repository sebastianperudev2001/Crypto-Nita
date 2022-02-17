const HisotrialOperaciones = (props) => {
    return <main className="col-md-8">
        <h3 className="mt-4">Historial de Operaciones</h3>
        <table className="table mt-4 table-dark">
            <thead>
                <tr>
                    <th>ID de Operación</th>
                    <th>Fecha y Hora</th>
                    <th>Tipo de Operación</th>
                    <th>Tipo de Cambio</th>
                    <th>Monto</th>
                </tr>
            </thead>
            <tbody id="data_operaciones">
                {
                    props.Operaciones.map((operacion) => {
                        return <tr key={operacion.id}>
                            <td>{operacion.id}</td>
                            <td>{operacion.FechaHora}</td>
                            <td>{operacion.Tipo}</td>
                            <td>{operacion.TipoCamio}</td>
                            <td>{operacion.Monto}</td>

                        </tr>
                    })
                }
            </tbody>
        </table>
    </main>
}
export default HisotrialOperaciones