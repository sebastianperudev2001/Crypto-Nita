import Card from '../components/Card';
import { useRouter } from "next/router";
export default function Historia35() {
  //Regresar
  const regresar = () => {
    location.href = '/iniciadoSesion';
  };
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <Card modo={'H35'} IdTransaccion={id}/>
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col text-center">
            <button className="btn btn-danger " onClick={regresar}>
              Regresar al menú principal
            </button>{' '}
          </div>
        </div>
      </div>
    </div>
  );
}
