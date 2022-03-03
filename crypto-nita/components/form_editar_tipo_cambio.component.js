import { useEffect, useState } from "react"
import ModalError from "../components/components-editar/modalError.component";

const FormTipoCambio = (props) => {

    const [btc_penLocal, setbtc_penLocal] = useState(0)
    const [pen_btcLocal, setpen_ptcLocal] = useState(0)
    const [estadoError, setEstadoError] = useState(false)
    const [tipoModal,setTipo] = useState("correcto")

    const BTC_PENoc = (event) => {
        setbtc_penLocal(event.target.value)
    }

    const PEN_BTCoc = (event) => {
        setpen_ptcLocal(event.target.value)
    }

    const cerrarOC = () => {
        setEstadoError(false)
    }

    const confirmarOC = async () => {
        if (pen_btcLocal > btc_penLocal || (pen_btcLocal == 0 || btc_penLocal == 0)) {
            setTipo("error")
            setEstadoError(true)
            return
        }

        const response1 = await props.guardar(btc_penLocal, "btcpen")
        const response2 = await props.guardar(pen_btcLocal, "penbtc")

        if (response1.msg != "ok"){
           console.log("Problemas en carga de cambio btc-pen") 
        }

        if (response2.msg != "ok"){
            console.log("Problemas en carga de cambio pen-btc") 
        }
        
        console.log("Todo bien con la carga de cambios en la bd")
        setTipo("correcto")
        setEstadoError(true)
    }



    return <div className="card col mt-3">
        <div className="card-body">
            <h5>Cambio actual:</h5>
            <p>BTC-PEN: {props.btcpen}</p>
            <p>PEN-BTC: {props.penbtc}</p>
            <h5>Nuevos cambios:</h5>
            <form>
                <div className="mt-2">
                    <label className="form-label" htmlFor="btc-pen">BTC-PEN:</label>
                    <input className="form-control" type="number" id="btc-pen" defaultValue={btc_penLocal}
                        onChange={BTC_PENoc}></input>
                </div>
                <div className="mt-2">
                    <label className="form-label" htmlFor="pen-btc">PEN-BTC:</label>
                    <input className="form-control" type="number" id="pen-btc" defaultValue={pen_btcLocal}
                        onChange={PEN_BTCoc}></input>
                </div>
            </form>
            <div className="row mt-4">
                <button className="btn btn-danger col" type="button">Cancelar</button>
                <div className="col-2"></div>
                <button className="btn btn-primary col" type="button" onClick={confirmarOC}>Confirmar</button>
            </div>
        </div>
        <ModalError mostrar={estadoError} cerrar={cerrarOC} tipo={tipoModal}/>
    </div>
}

export default FormTipoCambio