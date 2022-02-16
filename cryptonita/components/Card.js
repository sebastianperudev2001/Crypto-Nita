const Card = (props) => {


    if (props.modo == "H28") {
        return <aside >
            <div className="card mt-4">
                <div className="card-body">
                    <h3 className="card-title text-center">Venta de Bitcoins</h3>
                    <h4 className="text-center">Paso 1 de 3</h4>
                    <h5 className="card-subtitle mb-4 mt-4 text-muted">Ingrese su numero de cuenta: </h5>
                    <input type="text" className="form-control mt-4" />
                    <h5 className="card-subtitle mb-2 text-muted mt-4">Número de operación: </h5>
                    <div className="card">
                        <div className="card-body">
                            <p>111111111111111111</p>
                        </div>
                    </div>
                    <button className="mt-4 btn btn-success btn-outline-dark" onClick={
                        (() => {
                            location.href = "/Historia30"
                        })
                    }>Confirmar</button>
                </div>
            </div>
        </aside>
    } else if (props.modo == "H29") {
        return <aside >
            <div className="card mt-4">
                <div className="card-body">
                    <h3 className="card-title text-center">Compra de Bitcoins</h3>
                    <h4 className="text-center">Paso 1 de 3</h4>
                    <h5 className="card-subtitle mb-4 mt-4 text-muted">Ingrese su dirección de billetera: </h5>
                    <input type="text" className="form-control mt-4" />
                    <h5 className="card-subtitle mb-2 text-muted mt-4">Número de operación: </h5>
                    <div className="card">
                        <div className="card-body">
                            <p>111111111111111111</p>
                        </div>
                    </div>
                    <button className="mt-4 btn btn-success btn-outline-dark" onClick={
                        (() => {
                            location.href = "/Historia31"
                        })
                    }>Confirmar</button>
                </div>
            </div>
        </aside>
    } else if (props.modo == "H30") {
        return <aside >
            <div class="card mt-4">
                <div className="card-body">
                    <h3 className="card-title text-center">Venta de Bitcoins</h3>
                    <h4 className="text-center">Paso 2 de 3</h4>
                    <h5 className="card-subtitle mb-4 mt-4 text-muted">Dirección de billetera de la página: </h5>
                    <div className="card">
                        <div className="card-body">
                            <p>12345678910</p>
                        </div>
                    </div>
                    <h5 className="card-subtitle mb-2 text-muted mt-4">Ingrese el número de transacción: </h5>
                    <input type="text" className="form-control mt-4" />

                    <button className="mt-4 btn btn-success btn-outline-dark">Enviar</button>
                </div>
            </div>
        </aside>
    } else if (props.modo == "H31") {
        return <aside >
            <div className="card mt-4">
                <div className="card-body">
                    <h3 className="card-title text-center">Venta de Bitcoins</h3>
                    <h4 className="text-center">Paso 2 de 3</h4>
                    <h5 className="card-subtitle mb-4 mt-4 text-muted">Número de cuenta bancaria de la página: </h5>
                    <div className="card">
                        <div className="card-body">
                            <p>12345678910</p>
                        </div>
                    </div>
                    <h5 className="card-subtitle mb-2 text-muted mt-4">Ingrese el número de transacción: </h5>
                    <input type="text" className="form-control mt-4" />

                    <button className="mt-4 btn btn-success btn-outline-dark">Enviar</button>
                </div>
            </div>
        </aside>
    }
}
export default Card
