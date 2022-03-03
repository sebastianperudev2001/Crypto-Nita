import { useEffect, useState } from "react";
import FormTipoCambio from "../components/form_editar_tipo_cambio.component";
import Navegador from "../components/NavBar.component";


export default function PaginaCambioTipo() {
    const [CambioBTC_PEN,setBTC_PEN] = useState(0)
    const [CambioPEN_BTC,setPEN_BTC] = useState(0)
    const clasesNav=["nav-link","nav-link active","nav-link" ]


    useEffect(async ()=>{
        let response = await fetch("/api/CambiarTipoBTC_PEN")
        response = await response.json()
        response = response.cambio
        setBTC_PEN(response)
        response = await fetch("/api/CambiarTipoPEN_BTC")
        response = await response.json()
        response = response.cambio
        setPEN_BTC(response)
    },[])

    const guardarCambios = async (cambio,tipo) =>{
        if (tipo == "btcpen"){
            const response = await fetch("/api/CambiarTipoBTC_PEN",{
                method:"PUT",
                body:JSON.stringify({
                    cambio: cambio
                })
            })
            const data = await response.json()
            return data
        }

        if (tipo =="penbtc"){
            const response = await fetch("/api/CambiarTipoPEN_BTC",{
                method:"PUT",
                body:JSON.stringify({cambio: cambio})
            })
            const data = await response.json()
            return data
        }
    }




    return <div className="container">
        <Navegador lisClass={clasesNav}></Navegador>
        <div className="row mt-5">
            <h1 className="text-center">Editar tipo de cambio</h1>
            <main id="principal">
                <div className="row">
                    <div className="col-2"></div>
                    <FormTipoCambio btcpen={CambioBTC_PEN} 
                    penbtc={CambioPEN_BTC}
                    guardar={guardarCambios}/>
                    <div className="col-2"></div>
                </div>
            </main>
        </div>
             
    </div>
}
