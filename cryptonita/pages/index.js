import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import 'bootstrap-icons/font/bootstrap-icons.css';

/* 
Typewriter es un elemento de una librería externa. Revisar la documentación: 
https://www.npmjs.com/package/typewriter-effect
*/
export default function Home() {
  return (
    <>
      <div className="page-content">
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
        <div id="linea"></div>
        <section id="segundaCara">
          <div className="tituloGrupo">
            <h2 id="titulo">CrytoHackers Group</h2>
          </div>

          <div
            className="btn-group"
            role="group"
            aria-label="Basic example"
            id="botones"
          >
            <button type="button" className="btn btn-primary botonesIntro">
              Iniciar Sesión
            </button>

            <button
              type="button"
              className="btn btn-primary btn-success botonesIntro"
            >
              Registrar cuenta
            </button>
          </div>

          <div className="card" id="footer">
            <div className="card-body d-flex">
              <div id="nombre" className="texto me-4">
                CryptoHackers
              </div>

              <div id="year" className="texto me-4">
                2022
              </div>

              <div id="nosotros" className="textoAccionable">
                <Link href="/nosotros">
                  <a id="presionable" className="me-4">
                    Nosotros
                  </a>
                </Link>
              </div>

              <div id="terminosCondiciones" className="textoAccionable">
                <Link href="/terminosCondiciones">
                  <a>Términos y Condiciones</a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
