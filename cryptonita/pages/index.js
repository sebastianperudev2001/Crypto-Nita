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
  const validacionInput = async (username, contra) => {
    const usuario = {
      correo: username,
      password: contra,
    };
    const resp = await fetch('/api/iniciosesion', {
      method: 'POST',
      body: JSON.stringify(usuario),
    });

    const data = await resp.json();
    const usuarioValidar = data.respuesta;

    if (usuarioValidar == null) {
      console.log('No existe esa vaina oe');
    } else if (username == 'admin@ulima.com' && password == '123') {
      localStorage.setItem('iniciadoSesion', usuarioValidar.id);
    } else if (contra == usuarioValidar.password) {
      localStorage.setItem('iniciadoSesion', usuarioValidar.id);

      if (usuarioValidar.estado == 'activo') {
        location.href = '/iniciadoSesion';
      } else if (usuarioValidar.estado == 'inactivo') {
        location.href = '/espera';
      }
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

//Validar el token generado al azar
