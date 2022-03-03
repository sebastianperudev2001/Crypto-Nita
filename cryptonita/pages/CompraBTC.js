import { useState,useEffect } from "react";
import CompraVenta from "../components/components-compraventa/compraventa.component";

export default function CompraBTC() {
    const [CambioPEN_BTC,setPEN_BTC] = useState(0)

    useEffect(async ()=>{
        let response = await fetch("/api/CambiarTipoPEN_BTC")
        response = await response.json()
        response = response.cambio
        setPEN_BTC(response)
    },[])

    

    const solicitar = async(cambio,monto,usuario) =>{
        let response = await fetch("/api/CompraBTC",{
            method:"POST",
            body:JSON.stringify({
                tipoCambio:cambio,
                monto:monto,
                idUsuario:usuario,
            })
        })
        response = response.json()
        return response
    }

    return <div className="mt-4">
        <header>
            <h1>Compra de BTC</h1>
            <div className="d-grid justify-content-md-end">
                <p className="text-end btn btn-link" onClick={() => {
                    location.href = "/"
                }}><u>Salir</u></p>
            </div>
        </header>
        <main>
            <CompraVenta 
                penbtc={CambioPEN_BTC} 
                tipo={"compra"}
                solicitar={solicitar}/>
        </main>
    </div>
}