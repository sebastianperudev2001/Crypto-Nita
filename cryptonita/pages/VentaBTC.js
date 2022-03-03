import { useState,useEffect } from 'react';
import CompraVenta from '../components/components-compraventa/compraventa.component';

export default function VentaBTC() {
  const [CambioBTC_PEN, setBTC_PEN] = useState(0);
  const [IdUsuario,setIdUsuario] = useState(0)
  useEffect(async () => {
    setIdUsuario(localStorage.getItem('iniciadoSesion'))
    let response = await fetch("/api/CambiarTipoBTC_PEN")
    response = await response.json()
    response = response.cambio
    setBTC_PEN(response)
  }, [])

  const solicitar = async (cambio, monto, usuario) => {
    let response = await fetch("/api/VentaBTC", {
      method: "POST",
      body: JSON.stringify({
        tipoCambio: cambio,
        monto: monto,
        idUsuario: usuario,
      })
    })
    response = response.json()
    return response
  }

  return (
    <div className="mt-4">
      <header>
        <h1>Venta de BTC</h1>
        <div className="d-grid justify-content-md-end">
          <p
            className="text-end btn btn-link"
            onClick={() => {
              location.href = '/';
            }}
          >
            <u>Salir</u>
          </p>
        </div>
      </header>
      <main>
        <CompraVenta
          btcpen={CambioBTC_PEN}
          tipo={'venta'}
          solicitar={solicitar}
          IdUsuario={IdUsuario}
        />
      </main>
    </div>
  );
}
