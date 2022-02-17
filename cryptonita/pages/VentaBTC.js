import { useState } from 'react';
import CompraVenta from '../components/compraventa.component';

export default function VentaBTC() {
  const [CambioBTC_PEN, setBTC_PEN] = useState(0);
  const [CambioPEN_BTC, setPEN_BTC] = useState(0);

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
          penbtc={CambioPEN_BTC}
          tipo={'venta'}
        />
      </main>
    </div>
  );
}
