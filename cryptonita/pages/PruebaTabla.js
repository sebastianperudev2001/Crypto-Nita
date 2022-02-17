import HisotrialOperaciones from '../components/Historial-operaciones';
import { useState, useEffect } from 'react';

export default function TablaOp() {
  const [listaOperacioes, setlistaOperacioes] = useState([]);

  useEffect(async () => {
    let response = await fetch('/api/Historial');
    const data = await response.json();
    setlistaOperacioes(data.operaciones);
  }, []);

  //Regresar
  const regresar = () => {
    location.href = '/iniciadoSesion';
  };

  return (
    <div className="container">
      <HisotrialOperaciones Operaciones={listaOperacioes} />
      <button className="btn btn-danger" onClick={regresar}>
        {' '}
        Regresar
      </button>
    </div>
  );
}
