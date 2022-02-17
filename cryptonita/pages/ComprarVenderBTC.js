import { useState } from 'react';
import MenuCompraVenta from '../components/MenuCompraVenta.component';
import NavBarUsuario from '../components/NavBarUsuario.component';

const CompraVentaMenu = () => {
  const [CambioBTCPEN, setCambioBTCPEN] = useState(0);
  const [CambioPENBTC, setCambioPENBTC] = useState(0);
  const lisClases = ['nav-link', 'nav-link active', 'nav-link'];

  return (
    <div className="mt-4">
      <header>
        <h1>Compra/Venta de BTC</h1>
        <NavBarUsuario lisClass={lisClases} />
      </header>
      <MenuCompraVenta btcpen={CambioBTCPEN} penbtc={CambioPENBTC} />
    </div>
  );
};

export default CompraVentaMenu;
