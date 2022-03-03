import HisotrialOperaciones from '../components/Historial-operaciones';
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";

export default function TablaOp() {
  const [listaOperacioes, setlistaOperacioes] = useState([]);
  const router = useRouter();
  const { id } = router.query;

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
      <HisotrialOperaciones Operaciones={listaOperacioes} IdUsuario={id}/>
      <button className="btn btn-danger" onClick={regresar}>
        {' '}
        Regresar
      </button>
    </div>
  );
}
