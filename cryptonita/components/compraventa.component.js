const CompraVenta = (props) => {
    const RecibirOC = (event) => {

    }

    const cancelarOC = () =>{
        window.history.back()
    }

    if (props.tipo == "compra") {
        return <div className="container-fluid">
            <form>
                <div className="mt-5-md">
                    <div className="row">
                        <div className="col-md-5 ms-5-md">
                            <label for="recibir" class="form-label">Recibes (BTC):</label>
                            <input type="number" class="form-control" id="recibir" placeholder="0" />
                        </div>
                        <div className="col-md">
                            <div className="d-flex justify-content-center pt-4">
                                aqui va png xd
                            </div>
                        </div>
                        <div className="col-md-5 me-5-md">
                            <label for="recibir" class="form-label">Das (PEN):</label>
                            <input type="number" class="form-control" id="recibir" placeholder="0" />
                        </div>
                    </div>
                </div>
            </form>
            <div className="mt-4">
                <p className="text-center">Cambio: {" "}{props.btcpen}</p>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                <button class="btn btn-primary me-md-2" type="button">Solicitar</button>
                <button class="btn btn-danger" type="button" onClick={cancelarOC}>Cancelar</button>
            </div>
        </div>
    }

    if (props.tipo == "venta") {
        return <div className="container-fluid">
            <form>
                <div className="mt-5-md">
                    <div className="row">
                        <div className="col-md-5 ms-5-md">
                            <label for="dar" class="form-label">Das (BTC):</label>
                            <input type="number" class="form-control" id="dar" placeholder="0" />
                        </div>
                        <div className="col-md">
                            <div className="d-flex justify-content-center pt-4">
                                aqui va png xd
                            </div>
                        </div>
                        <div className="col-md-5 me-5-md">
                            <label for="recibir" class="form-label">Recibes (PEN):</label>
                            <input type="number" class="form-control" id="recibir" placeholder="0" />
                        </div>
                    </div>
                </div>
            </form>
            <div className="mt-4">
                <p className="text-center">Cambio: {" "}{props.penbtc}</p>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                <button class="btn btn-primary me-md-2" type="button">Solicitar</button>
                <button class="btn btn-danger" type="button" onClick={cancelarOC}>Cancelar</button>
            </div>
        </div>
    }
}
export default CompraVenta