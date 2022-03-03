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
    console.log(usuarioValidar)
    if (usuarioValidar == null){
      console.log("Usuario no existe")
      return
    }

    if(contra != usuarioValidar.password){
      console.log("Contraseña Incorrecta")
      return
    }

    if(usuarioValidar.estado == "administrador"){
      console.log("Bienvenido Admin")
      localStorage.setItem("esAdmin",true)
      location.href="/homeAdmin"
    }
    
    if(usuarioValidar.estado != "activo"){
      console.log("Usuario no activado")
    }

    console.log("Usuario Activo")
    localStorage.setItem('iniciadoSesion', usuarioValidar.id)
    location.href = "/inicioClientes"
  };

  return (
    <>
      <Portada />
      <FormInicial onLogin={validacionInput} />
    </>
  );
}

//Validar el token generado al azar
