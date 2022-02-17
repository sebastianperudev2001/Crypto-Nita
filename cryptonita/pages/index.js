import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Portada from '../components/components-inicio/Portada.component';
import FormInicial from '../components/components-inicio/FormInicial.component';
import { useState } from 'react';

/* 
Typewriter es un elemento de una librería externa. Revisar la documentación: 
https://www.npmjs.com/package/typewriter-effect
*/
export default function Home() {
  const validacionInput = (username, password) => {
    if (username == 'admin@ulima.com' && password == '123') {
      location.href = '#';
    } else if (username == 'sebastian@sebas.com' && password == '456') {
      location.href = '/iniciadoSesion';
    } else {
      console.log('ingrese algo');
    }
  };

  return (
    <>
      <Portada />
      <FormInicial onLogin={validacionInput} />
    </>
  );
}
