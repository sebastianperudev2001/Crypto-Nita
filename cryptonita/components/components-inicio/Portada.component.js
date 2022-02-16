import Typewriter from 'typewriter-effect';

const Portada = () => {
  return (
    <>
      <section id="primeraCara">
        <div className="row">
          <img id="logo" src="/logoNegro.png" className="logo" />
        </div>
        <div className="row" id="cajita">
          <div className="card mx-auto" id="intro">
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
