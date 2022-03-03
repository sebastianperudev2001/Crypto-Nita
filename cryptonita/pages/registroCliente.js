import { useState, useEffect } from 'react';
import RegistroPaso01 from '../components/components-registro/RegistroPaso01.component';
export default function registroCliente() {
  const guardarLocalID = (id) => {
    console.log('LLEGUE AMI FUNCI');
    //localStorage.removeItem('usuarios');
    localStorage.setItem('usuarios', id);
  };

  const guardarUsuarioHandler01 = async (
    nombreUser,
    apellidosUser,
    dniUser
  ) => {
    const usuario = {
      nombre: nombreUser,
      apellido: apellidosUser,
      dni: dniUser,
    };
    const respuesta = await fetch('api/usuario', {
      method: 'POST',
      body: JSON.stringify(usuario),
    });
    const data = await respuesta.json();
    //guardarLocalID(data.id);
    location.href = `/registroCliente02?id=${data.id}`;
  };

  return (
    <>
      <RegistroPaso01 onGuardarUsuario={guardarUsuarioHandler01} />
    </>
  );
}
