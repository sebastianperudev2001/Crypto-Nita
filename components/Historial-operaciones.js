import NavBarUsuario from './NavBarUsuario.component';

const HisotrialOperaciones = (props) => {
  const lisClases = ['nav-link', 'nav-link', 'nav-link active'];

  return (
    <main className="col-md-8">
      <h3 className="mt-4">Historial de Operaciones</h3>
      <NavBarUsuario lisClass={lisClases} />
      <div className="table-responsive">
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
                if (operacion.idUsuario == props.IdUsuario) {
                  return (
                    <tr key={operacion.id}>
                      <td>{operacion.id}</td>
                      <td>{operacion.fecha}</td>
                      <td>{operacion.tipoOperacion}</td>
                      <td>{operacion.tipoCambio}</td>
                      <td>{operacion.monto}</td>
                    </tr>
                  );
                }

              })}
          </tbody>
        </table>
      </div>
    </main>
  );
};
export default HisotrialOperaciones;
