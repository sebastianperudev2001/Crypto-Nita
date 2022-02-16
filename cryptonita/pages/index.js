import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Portada from '../components/components-inicio/Portada.component';
import FormInicial from '../components/components-inicio/FormInicial.component';

/* 
Typewriter es un elemento de una librería externa. Revisar la documentación: 
https://www.npmjs.com/package/typewriter-effect
*/
export default function Home() {
  return (
    <>
      <div className="page-content">
        <Portada />

        <div id="linea"></div>
        <FormInicial />
      </div>
    </>
  );
}
