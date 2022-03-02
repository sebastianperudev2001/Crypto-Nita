const db = require('../sequelize/models');
const guardarDataPaso01 = async (nombreUser, apellidoUser, dniUser) => {
  const usuarioPaso01 = await db.Usuario.create({
    nombre: nombreUser,
    apellido: apellidoUser,
    dni: dniUser,
  });
  console.log(usuarioPaso01.id);
  return usuarioPaso01;
};

const findUsuario = async (id) => {
  const usuario = await db.Usuario.findOne({
    where: {
      id: id,
    },
  });

  return usuario;
};

const guardarDataPaso02 = async (id, correoUser, contraUser, telefonoUser) => {
  const usuarioPaso02 = await findUsuario(id);
  usuarioPaso02.correo = correoUser;
  usuarioPaso02.password = contraUser;
  usuarioPaso02.telefono = telefonoUser;
  usuarioPaso02.estado = 'inactivo';

  await usuarioPaso02.save();
};

const validacionInicioSesion = async (correoUser) => {
  const usuario = await db.Usuario.findOne({
    where: {
      correo: correoUser,
    },
  });
  return usuario;
};

export { guardarDataPaso01, guardarDataPaso02, validacionInicioSesion };
