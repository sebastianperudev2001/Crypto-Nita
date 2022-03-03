import Card from "../components/Card"
import React from "react";
import { useRouter } from "next/router";
export default function Historia28() {
    
    const router = useRouter();
    const { id } = router.query;

    const EditarTransaccionHandler = async (id) => {
        const resp = await fetch(`/api/Historial/${id}`)
        const data = await resp.json()
        console.log(data)
        setTransaccion(data.operacion)
    }
    const actualizarTransaccionHandler = async (id, numeroCuenta) => {
        const transaccion = {
            id : id,
            numeroCuenta: numeroCuenta
        }
        const resp = await fetch("/api/Historial", {
            method: "PUT",
            body: JSON.stringify(transaccion)
        })
        const data = await resp.json()
    }

    return <div className="container">
        <div className="row">
            <div className="col-md-2">
            </div>
            <div className="col-md-8">
                <Card modo={"H28"}  IdTransaccion={id} onConfirmar={EditarTransaccionHandler}
                    onActualizarTransaccion={actualizarTransaccionHandler} />
            </div>
            <div className="col-md-2">
            </div>
        </div>
    </div>

}