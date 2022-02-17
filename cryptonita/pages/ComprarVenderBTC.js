import { useState } from 'react';
import MenuCompraVenta from '../components/MenuCompraVenta.component';

const CompraVentaMenu = () => {
  const [CambioBTCPEN, setCambioBTCPEN] = useState(0);
  const [CambioPENBTC, setCambioPENBTC] = useState(0);

  return (
    <div className="mt-4">
      <header>
        <h1>Compra/Venta de BTC</h1>
        <div className="d-grid justify-content-md-end">
          <p
            className="text-end btn btn-link"
            onClick={() => {
              location.href = '/iniciadoSesion';
            }}
          >
            <u>Salir</u>
          </p>
        </div>
      </header>
      <MenuCompraVenta btcpen={CambioBTCPEN} penbtc={CambioPENBTC} />
    </div>
  );
};

export default CompraVentaMenu;
