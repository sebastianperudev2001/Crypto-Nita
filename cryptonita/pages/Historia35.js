import Card from '../components/Card';
export default function Historia35() {
  //Regresar
  const regresar = () => {
    location.href = '/iniciadoSesion';
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <Card modo={'H35'} />
        </div>
        <div className="col-md-2"></div>
      </div>
      <div class="container mt-4">
        <div class="row">
          <div class="col text-center">
            <button className="btn btn-danger " onClick={regresar}>
              Regresar al menú principal
            </button>{' '}
          </div>
        </div>
      </div>
    </div>
  );
}
