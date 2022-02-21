import { useState } from "react";
import FormTipoCambio from "../components/form_editar_tipo_cambio.component";
import Navegador from "../components/NavBar.component";


export default function PaginaCambioTipo() {
    const [CambioBTC_PEN,setBTC_PEN] = useState(0)
    const [CambioPEN_BTC,setPEN_BTC] = useState(0)
    const clasesNav=["nav-link","nav-link active","nav-link" ]
    return <div className="container">
        <Navegador lisClass={clasesNav}></Navegador>
        <div className="row mt-5">
            <h1 className="text-center">Editar tipo de cambio</h1>
            <main id="principal">
                <div className="row">
                    <div className="col-2"></div>
                    <FormTipoCambio btcpen={CambioBTC_PEN} penbtc={CambioPEN_BTC}/>
                    <div className="col-2"></div>
                </div>
            </main>
        </div>
        
    </div>
}
