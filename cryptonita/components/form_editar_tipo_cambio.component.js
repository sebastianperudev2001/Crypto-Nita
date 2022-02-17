import { useState } from "react"

const FormTipoCambio = (props) => {

    const[btc_penLocal,setbtc_penLocal] = useState(0)
    const[pen_btcLocal,setpen_ptcLocal] = useState(0)
 
    const BTC_PENoc = (event) =>{
        setbtc_penLocal(event.target.value)
        console.log(btc_penLocal)
    }

    const PEN_BTCoc = (event) =>{
        setpen_ptcLocal(event.target.value)
        console.log(pen_btcLocal)
    }

    return <div className="card col mt-3">
        <div class="card-body">
            <h5>Cambio actual:</h5>
            <p>BTC-PEN: {props.btcpen}</p>
            <p>PEN-BTC: {props.penbtc}</p>
            <h5>Nuevos cambios:</h5>
            <form>
                <div className="mt-2">
                    <label className="form-label" for="btc-pen">BTC-PEN:</label>
                    <input className="form-control" type="number" id="btc-pen" defaultValue={btc_penLocal}
                            onChange={BTC_PENoc}></input>
                </div>
                <div className="mt-2">
                    <label className="form-label" for="pen-btc">PEN-BTC:</label>
                    <input className="form-control" type="number" id="pen-btc" defaultValue={pen_btcLocal}
                            onChange={PEN_BTCoc}></input>
                </div>
            </form>
            <div className="row mt-4">
                <button className="btn btn-danger col" type="button">Cancelar</button>
                <div className="col-2"></div>
                <button className="btn btn-primary col" type="button">Confirmar</button>
            </div>
        </div>
    </div>
}

export default FormTipoCambio