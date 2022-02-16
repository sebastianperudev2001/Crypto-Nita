const CompraVenta = (props) => {
    const RecibirOC = (event) =>{

    }
    if (props.tipo == "compra"){
    return <div className="container-fluid">
        <form>
            <div className="row">
                <div className="col">
                    <label for="recibir" class="form-label">Recibes (BTC):</label>
                    <input type="number" class="form-control" id="recibir" placeholder="0" />
                </div>
                <div className="col-2">
                    <div className="row rows-cols-1">
                        <div className="col"></div>
                        <div className="col">
                            <button className="btn btn-success">C</button>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
                <div className="col">
                    <label for="recibir" class="form-label">Das (PEN):</label>
                    <input type="number" class="form-control" id="recibir" placeholder="0" />
                </div>
            </div>
        </form>
        <p className="text-center">Cambio: {" "}{props.btcpen}</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
            <button class="btn btn-primary me-md-2" type="button">Solicitar</button>
            <button class="btn btn-danger" type="button">Cancelar</button>
        </div>
    </div>
    }

    if (props.tipo == "venta"){
        return <div className="container-fluid">
            <form>
                <div className="row">
                    <div className="col">
                        <label for="recibir" class="form-label">Das (PEN):</label>
                        <input type="number" class="form-control" id="recibir" placeholder="0" />
                    </div>
                    <div className="col-2">
                        <div className="row rows-cols-1">
                            <div className="col"></div>
                            <div className="col">
                                <button className="btn btn-success">C</button>
                            </div>
                            <div className="col"></div>
                        </div>
                    </div>
                    <div className="col">
                        <label for="recibir" class="form-label">Recibes (BTC):</label>
                        <input type="number" class="form-control" id="recibir" placeholder="0" />
                    </div>
                </div>
            </form>
            <p className="text-center">Cambio: {" "}{props.penbtc}</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                <button class="btn btn-primary me-md-2" type="button">Solicitar</button>
                <button class="btn btn-danger" type="button">Cancelar</button>
            </div>
        </div>
        }
}
export default CompraVenta