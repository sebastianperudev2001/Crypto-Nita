import RegistroPaso02 from '../components/components-registro/RegistroPaso02.component';

export default function registroCliente02() {
  const guardarUsuarioHandler02 = async (id, correo, contra, telefono) => {
    console.log('SE EJEECUTA');
    const resp = await fetch(
      `api/usuario/${id}/${correo}/${contra}/${telefono}`
    );
    const data = await resp.json();
  };

  return (
    <>
      <RegistroPaso02 onGuardarUsuario={guardarUsuarioHandler02} />
    </>
  );
}
