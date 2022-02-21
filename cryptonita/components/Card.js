import { useState } from "react"
const Card = (props) => {

    const [NumeroCuenta, setNumeroCuenta] = useState("")
    const [NumeroBilletera, setNumeroBilletera] = useState("")
    const [NumeroTransaccion, setNumeroTransaccion] = useState("")

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
            <div id = "Card" className="card mt-4">
                <div className="card-body">
                    <h3 id="Titulos" className="card-title text-center">Venta de Bitcoins</h3>
                    <h4 id="Titulos" className="text-center">Paso 1 de 3</h4>
                    <h5 id="Titulos" className="card-subtitle mb-4 mt-4">Ingrese su numero de cuenta: </h5>
                    <input id="Fondo-textos" type="text" className="form-control mt-4" defaultValue={ NumeroCuenta } onChange={ NumeroCuentaOnChange }/>
                    <h5 id="Titulos" className="card-subtitle mb-2  mt-4">Número de operación: </h5>
                    <div id="Fondo-textos" className="card">
                        <div className="card-body">
                            <p ></p>
                        </div>
                    </div>
                    <button id="Btn-Confirmar" className="mt-4 btn btn-outline-light" onClick={
                        (() => {
                            location.href = "/Historia30"
                        })
                    }>Confirmar</button>
                </div>
            </div>
        </aside>
    } else if (props.modo == "H29") {
        return <aside >
            <div id = "Card" className="card mt-4">
                <div className="card-body">
                    <h3 id="Titulos" className="card-title text-center">Compra de Bitcoins</h3>
                    <h4 id="Titulos" className="text-center">Paso 1 de 3</h4>
                    <h5 id="Titulos" className="card-subtitle mb-4 mt-4">Ingrese su dirección de billetera: </h5>
                    <input id="Fondo-textos" type="text" className="form-control mt-4" defaultValue={ NumeroBilletera } onChange={ NumeroBilleteraOnChange }/>
                    <h5 id="Titulos" className="card-subtitle mb-2 mt-4">Número de operación: </h5>
                    <div id="Fondo-textos" className="card">
                        <div className="card-body">
                            <p></p>
                        </div>
                    </div>
                    <button id="Btn-Confirmar" className="mt-4 btn btn-outline-light" onClick={
                        (() => {
                            location.href = "/Historia31"
                        })
                    }>Confirmar</button>
                </div>
            </div>
        </aside>
    } else if (props.modo == "H30") {
        return <aside >
            <div id = "Card" className="card mt-4">
                <div className="card-body">
                    <h3 id="Titulos" className="card-title text-center">Venta de Bitcoins</h3>
                    <h4 id="Titulos" className="text-center">Paso 2 de 3</h4>
                    <h5 id="Titulos" className="card-subtitle mb-4 mt-4">Dirección de billetera de la página: </h5>
                    <div id="Fondo-textos" className="card">
                        <div className="card-body">
                            <p></p>
                        </div>
                    </div>
                    <h5 id="Titulos" className="card-subtitle mb-2 mt-4">Ingrese el número de transacción: </h5>
                    <input id="Fondo-textos" type="text" className="form-control mt-4"  defaultValue={ NumeroTransaccion } onChange={ NumeroTransaccionOnChange }/>
                    
                    <button id="Btn-enviar" className="mt-4 btn btn-outline-light" onClick={
                        (() => {
                            location.href = "/Historia35"
                        })
                    }>Enviar</button>
                </div>
            </div>
        </aside>
    } else if (props.modo == "H31") {
        return <aside >
            <div id = "Card" className="card mt-4">
                <div className="card-body">
                    <h3 id="Titulos" className="card-title text-center">Venta de Bitcoins</h3>
                    <h4 id="Titulos" className="text-center">Paso 2 de 3</h4>
                    <h5 id="Titulos" className="card-subtitle mb-4 mt-4">Número de cuenta bancaria de la página: </h5>
                    <div id="Fondo-textos" className="card">
                        <div className="card-body">
                            <p></p>
                        </div>
                    </div>
                    <h5 id="Titulos" className="card-subtitle mb-2 mt-4">Ingrese el número de transacción: </h5>
                    <input id="Fondo-textos" type="text" className="form-control mt-4"  defaultValue={ NumeroTransaccion } onChange={ NumeroTransaccionOnChange }/>

                    <button id="Btn-enviar" className="mt-4 btn btn-outline-light"
                    onClick={
                        (() => {
                            location.href = "/Historia35"
                        })
                    }>Enviar</button>
                </div>
            </div>
        </aside>
    }else if (props.modo == "H35") {
        return <aside >
            <div id = "Card" className="card mt-4">
                <div className="card-body">
                    <h3 id="Titulos" className="card-title text-center">Venta de Bitcoins</h3>
                    <h4 id="Titulos" className="text-center">Paso 3 de 3</h4>
                    <div id="Fondo-textos" className="alert mt-4">Operación Realizada con éxito</div>
                    <h5 id="Titulos" className="card-subtitle mb-4 mt-4">Número operación: </h5>
                    <div id="Fondo-textos" className="card">
                        <div className="card-body">
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    }
}
export default Card
