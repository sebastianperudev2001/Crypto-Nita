import { useState, useEffect } from "react"
const Card = (props) => {

    const [NumeroCuenta, setNumeroCuenta] = useState(" ")
    const [NumeroBilletera, setNumeroBilletera] = useState(" ")
    const [NumeroTransaccion, setNumeroTransaccion] = useState(" ")
    const NumeroCuentaOnChange = (event) => {
        setNumeroCuenta(event.target.value)
        console.log(NumeroCuenta)
    }
    const NumeroBilleteraOnChange = (event) => {
        setNumeroBilletera(event.target.value)
        console.log(NumeroBilletera)
    }
    const NumeroTransaccionOnChange = (event) => {
        setNumeroTransaccion(event.target.value)
        console.log(NumeroTransaccion)
    }
    if (props.modo == "H28") {
        return <aside>
            <div id="Card" className="card mt-4">
                <div className="card-body">
                    <h3 id="Titulos" className="card-title text-center">Venta de Bitcoins</h3>
                    <h4 id="Titulos" className="text-center">Paso 1 de 3</h4>
                    <h5 id="Titulos" className="card-subtitle mb-4 mt-4">Número de cuenta: </h5>
                    <input id="Fondo-textos" type="text" className="form-control mt-4" placeholder="Ingrese su número de cuenta"
                        defaultValue={NumeroCuenta} onChange={NumeroCuentaOnChange} defaultValue={" "} />
                    <h5 id="Titulos" className="card-subtitle mb-2  mt-4">Número de operación: </h5>
                    <div id="Fondo-textos" className="card">
                        <div className="card-body">
                            <h6 >{props.IdTransaccion}</h6>
                        </div>
                    </div>
                    <button type="submit" id="Btn-Confirmar" className="mt-4 btn btn-outline-light" onClick={
                        (() => {
                            if (NumeroCuenta != " ") {
                                console.log(NumeroCuenta)
                                props.onActualizarTransaccion(props.IdTransaccion, NumeroCuenta)
                                location.href = `/Historia30?id=${props.IdTransaccion}`
                                
                            }
                        })
                    }>Confirmar</button>
                </div>
            </div>
        </aside>
    } else if (props.modo == "H29") {
        return <aside >
            <div id="Card" className="card mt-4">
                <div className="card-body">
                    <h3 id="Titulos" className="card-title text-center">Compra de Bitcoins</h3>
                    <h4 id="Titulos" className="text-center">Paso 1 de 3</h4>
                    <h5 id="Titulos" className="card-subtitle mb-4 mt-4">Ingrese su dirección de billetera: </h5>
                    <input defaultValue={" "} id="Fondo-textos" type="text" className="form-control mt-4" defaultValue={NumeroBilletera} onChange={NumeroBilleteraOnChange} />
                    <h5 id="Titulos" className="card-subtitle mb-2 mt-4">Número de operación: </h5>
                    <div id="Fondo-textos" className="card">
                        <div className="card-body">
                            <h6 >{props.IdTransaccion}</h6>
                        </div>
                    </div>
                    <button id="Btn-Confirmar" className="mt-4 btn btn-outline-light" onClick={
                        (() => {
                            if (NumeroBilletera != " ") {
                                props.onActualizarTransaccion(props.IdTransaccion, NumeroBilletera)
                                location.href = `/Historia31?id=${props.IdTransaccion}`
                            }
                        })
                    }>Confirmar</button>
                </div>
            </div>
        </aside>
    } else if (props.modo == "H30") {
        return <aside >
            <div id="Card" className="card mt-4">
                <div className="card-body">
                    <h3 id="Titulos" className="card-title text-center">Venta de Bitcoins</h3>
                    <h4 id="Titulos" className="text-center">Paso 2 de 3</h4>
                    <h5 id="Titulos" className="card-subtitle mb-4 mt-4">Dirección de billetera de la página: </h5>
                    <div id="Fondo-textos" className="card">
                        <div className="card-body">
                            <h6 >1HyWooh9Mo4X2AmXnXZ217aj4TZ1nxqYCn</h6>
                        </div>
                    </div>
                    <h5 id="Titulos" className="card-subtitle mb-2 mt-4">Ingrese el número de transacción: </h5>
                    <input defaultValue={" "} id="Fondo-textos" type="text" className="form-control mt-4" defaultValue={NumeroTransaccion} onChange={NumeroTransaccionOnChange} />

                    <button id="Btn-enviar" className="mt-4 btn btn-outline-light" onClick={
                        (() => {
                            if (NumeroTransaccion != " ") {
                                props.onActualizarTransaccion(props.IdTransaccion, NumeroTransaccion)
                                location.href = `/Historia35?id=${props.IdTransaccion}`
                            }
                        })
                    }>Enviar</button>
                </div>
            </div>
        </aside>
    } else if (props.modo == "H31") {
        return <aside >
            <div id="Card" className="card mt-4">
                <div className="card-body">
                    <h3 id="Titulos" className="card-title text-center">Venta de Bitcoins</h3>
                    <h4 id="Titulos" className="text-center">Paso 2 de 3</h4>
                    <h5 id="Titulos" className="card-subtitle mb-4 mt-4">Número de cuenta bancaria de la página: </h5>
                    <div id="Fondo-textos" className="card">
                        <div className="card-body">
                            <h6 >1HyWooh9Mo4X2AmXnXZ217aj4TZ1nxqYCn</h6>
                        </div>
                    </div>
                    <h5 id="Titulos" className="card-subtitle mb-2 mt-4">Ingrese el número de transacción: </h5>
                    <input defaultValue={" "} id="Fondo-textos" type="text" className="form-control mt-4" defaultValue={NumeroTransaccion} onChange={NumeroTransaccionOnChange} />

                    <button id="Btn-enviar" className="mt-4 btn btn-outline-light"
                        onClick={
                            (() => {
                                if (NumeroTransaccion != " ") {
                                    props.onActualizarTransaccion(props.IdTransaccion, NumeroTransaccion)
                                    location.href = `/Historia35?id=${props.IdTransaccion}`
                                }
                            })
                        }>Enviar</button>
                </div>
            </div>
        </aside>
    } else if (props.modo == "H35") {
        return <aside >
            <div id="Card" className="card mt-4">
                <div className="card-body">
                    <h3 id="Titulos" className="card-title text-center">Venta de Bitcoins</h3>
                    <h4 id="Titulos" className="text-center">Paso 3 de 3</h4>
                    <div id="Fondo-textos" className="alert mt-4">Operación Realizada con éxito</div>
                    <h5 id="Titulos" className="card-subtitle mb-4 mt-4">Número operación: </h5>
                    <div id="Fondo-textos" className="card">
                        <div className="card-body">
                            <h6 >{props.IdTransaccion}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    }
}
export default Card
