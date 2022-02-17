import CerrarSesion from './CerrarSesion.component';

const IniciarSesion = () => {
  return (
    <>
      <h1>Crypto-Nita</h1>
      <h2>¡Bienvenido de vuelta al futuro!</h2>
      <CerrarSesion />

      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <button className="w-100 btn btn-primary" onClick={()=>{
              location.href="/ComprarVenderBTC"
            }}>Comprar/Vender</button>
          </div>
          <div className="col">
            <button className="w-100 btn btn-primary" onClick={
                        (() => {
                            location.href = "/PruebaTabla"
                        })
                    }>Ver Historial</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default IniciarSesion;
