const Nosotros = () => {
  return (
    <>
      <h1 className="text-center">Nosotros</h1>
      <p className="fst-italic text-center">
        El equipo detrás de este proyecto
      </p>

      <div className="container">
        <div className="row">
          <div className="col">
            <figure className="figure">
              <img
                src="/dodge-fino.png"
                className="figure-img img-fluid rounded"
                alt="Sebas"
              />
              <figcaption className="figure-caption">
                Sebastián Chávarry
              </figcaption>
            </figure>
          </div>
          <div className="col">
            <figure className="figure">
              <img
                src="/dodge-loco.png"
                className="figure-img img-fluid rounded"
                alt="Sebas"
              />
              <figcaption className="figure-caption">Ricardo Silva</figcaption>
            </figure>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <figure className="figure">
              <img
                src="/dodge-pizza.png"
                className="figure-img img-fluid rounded"
                alt="Sebas"
              />
              <figcaption className="figure-caption">
                Matías Villanueva
              </figcaption>
            </figure>
          </div>
          <div className="col">
            <figure className="figure">
              <img
                src="/dodge-fiesta.png"
                className="figure-img img-fluid rounded"
                alt="Sebas"
              />
              <figcaption className="figure-caption">Franco Marqués</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};
export default Nosotros;
