import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
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
            <img src="/logoNegro.png" className="logo" />
          </div>
          <div className="row">
            <div class="card">
              <div class="card-body">
                <Typewriter
                  options={{
                    strings: [
                      'Welcome',
                      'to',
                      'Cryptonita.',
                      'Are you ready for the future?',
                      'Web 3.0 is here to change the world',
                    ],
                    autoStart: true,
                    delay: 50,
                    deleteSpeed: 5,
                    loop: true,
                  }}
                />
              </div>
              <a href="#segundaCara" class="btn btn-primary">
                <i className="bi bi-arrow-down"></i>
              </a>
            </div>
          </div>
        </section>

        <section id="segundaCara">
          <div className="tituloGrupo">
            <h2>CrytoHackers Group</h2>
          </div>

          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary">
              Iniciar Sesión
            </button>

            <button type="button" class="btn btn-primary btn-success">
              Registrar cuenta
            </button>
          </div>

          <div class="card">
            <div class="card-body">
              <div id="nombre" className="texto">
                CryptoHackers
              </div>

              <div id="year" className="texto">
                2022
              </div>

              <div id="nosotros" className="textoAccionable">
                <Link href="/nosotros">
                  <a>Nosotros</a>
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
