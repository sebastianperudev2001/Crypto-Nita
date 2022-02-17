import Typewriter from 'typewriter-effect';

const Portada = () => {
  return (
    <>
      <section id="primeraCara">
        <div>
          <figure className="figure d-flex justify-content-center">
            <img
              src="/logoNegro.png"
              className="figure-img img-fluid rounded"
            />
          </figure>
        </div>
        <div className="w-75 p-3 mx-auto">
          <div className="card">
            <div className="card-body">
              <Typewriter
                options={{
                  strings: [
                    'Welcome to Cryptonita.',
                    'Are you ready for the future?',
                    'Web 3.0 is here to change the world',
                  ],
                  autoStart: true,
                  delay: 50,
                  deleteSpeed: 5,
                  loop: true,
                }}
              />

              <a
                href="#segundaCara"
                className=" mt-4 btn btn-primary d-flex justify-content-center"
                id="abajo"
              >
                <i className="bi bi-arrow-down"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Portada;
