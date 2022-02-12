import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() 
{
  return <>
    <div className="portada">
      <h1>Página Inicio</h1>
      <img src="/logoNegro.png" className='logo'/>
    </div>

    <div className="tituloGrupo">
      <h2>CrytoHackers</h2>
    </div>

    <div className="botones">
      <button id="inicioSesion" className="botonesAccion">
        Iniciar Sesión
      </button>
      <button id="abrirCuenta" className="botonesAccion">
        Abrir Cuenta
      </button>
    </div>

    <div className="footer">
      <div id="nombre" className='texto'>
        CryptoHackers
      </div>

      <div id="year" className='texto'>
        2022
      </div>

      <div id="nosotros" className='textoAccionable'>
      <Link href="/nosotros">
          <a>Nosotros</a>
      </Link>
      </div>
      
      <div id="terminosCondiciones" className='textoAccionable'>
      <Link href="/terminosCondiciones">
          <a>Términos y Condiciones</a>
      </Link>
      </div>
    </div>
    
  </>
    
}
