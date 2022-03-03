const MenuCompraVenta = (props) => {
  const comprarOC = () => {
    location.href = '/CompraBTC';
  };

  const venderOC = () => {
    location.href = '/VentaBTC';
  };

  const regresarOC = () => {
    location.href = '/iniciadoSesion';
  };

  return (
    <div>
      <div className="container mt-3 mb-3">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md">
            <div className="d-grid gap-5">
              <button
                className="btn btn-primary"
                type="button"
                onClick={comprarOC}
              >
                <p className="fs-1">Compra</p>
                Cambio: {props.penbtc}
              </button>
              <button
                className="btn btn-primary"
                type="button"
                onClick={venderOC}
              >
                <p className="fs-1">Venta</p>
                <span className="text-center">Cambio:</span> {props.btcpen}
              </button>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
      <div className="d-grid justify-content-end">
        <button className="btn btn-danger" onClick={regresarOC}>
          Regresar
        </button>
      </div>
    </div>
  );
};

export default MenuCompraVenta;
