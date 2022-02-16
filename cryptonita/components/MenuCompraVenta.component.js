const MenuCompraVenta = (props) => {
    return <div>
        <div className="container mt-3 mb-3">
            <div className="row">
                <div className="col-2"></div>
                <div className="col">
                    <div class="d-grid gap-5">
                        <button class="btn btn-primary" type="button">
                            <p className="fs-1">Compra</p>
                            Cambio:{" "}{props.btcpen}
                        </button>
                        <button class="btn btn-primary" type="button">
                            <p className="fs-1">Venta</p>
                            <span className="text-center">Cambio:</span>{" "}{props.penbtc}
                        </button>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
        <div className="d-grid justify-content-end">
                <button className="btn btn-danger">Regresar</button>
        </div>
    </div>
}

export default MenuCompraVenta