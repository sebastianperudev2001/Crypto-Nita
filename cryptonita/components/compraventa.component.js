const CompraVenta = (props) => {
  const cambioOC = () => {
    console.log("WIP")
  };

  const solicitarOC = () => {
    if (props.tipo == 'compra') {
      location.href = '/Historia29';
      return;
    }
    location.href = '/Historia28';
  };

  const cancelarOC = () => {
    window.history.back();
  };

  if (props.tipo == 'compra') {
    return (
      <div className="container-fluid">
        <form>
          <div className="mt-5-md">
            <div className="row">
              <div className="col-md-5 ms-5-md">
                <label htmlFor="recibir" className="form-label">
                  Recibes (BTC):
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="recibir"
                  placeholder="0"
                />
              </div>
              <div className="col-md">
                <div className="d-flex justify-content-center pt-4">
                <button type="button" className="btn btn-light" onClick={cambioOC}>
                  <img src="/flecha.png" className="imgflechas rounded mx-auto d-block"></img>
                </button>
                </div>
              </div>
              <div className="col-md-5 me-5-md">
                <label htmlFor="recibir" className="form-label">
                  Das (PEN):
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="recibir"
                  placeholder="0"
                  readOnly
                />
              </div>
            </div>
          </div>
        </form>
        <div className="mt-4">
          <p className="text-center">Cambio: {props.btcpen}</p>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
          <button
            className="btn btn-primary me-md-2"
            type="button"
            onClick={solicitarOC}
          >
            Solicitar
          </button>
          <button className="btn btn-danger" type="button" onClick={cancelarOC}>
            Cancelar
          </button>
        </div>
      </div>
    );
  }

  if (props.tipo == 'venta') {
    return (
      <div className="container-fluid">
        <form>
          <div className="mt-5-md">
            <div className="row">
              <div className="col-md-5 ms-5-md">
                <label htmlFor="dar" className="form-label">
                  Das (BTC):
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="dar"
                  placeholder="0"
                />
              </div>
              <div className="col-md">
                <div className="d-flex justify-content-center pt-4">
                <button type="button" className="btn btn-light" onClick={cambioOC}>
                  <img src="/flecha.png" className="imgflechas rounded mx-auto d-block"></img>
                </button>
                </div>
              </div>
              <div className="col-md-5 me-5-md">
                <label htmlFor="recibir" className="form-label">
                  Recibes (PEN):
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="recibir"
                  placeholder="0"
                  readOnly
                />
              </div>
            </div>
          </div>
        </form>
        <div className="mt-4">
          <p className="text-center">Cambio: {props.penbtc}</p>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
          <button
            className="btn btn-primary me-md-2"
            type="button"
            onClick={solicitarOC}
          >
            Solicitar
          </button>
          <button className="btn btn-danger" type="button" onClick={cancelarOC}>
            Cancelar
          </button>
        </div>
      </div>
    );
  }
};
export default CompraVenta;
