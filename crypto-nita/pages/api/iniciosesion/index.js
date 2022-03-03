import { validacionInicioSesion } from '../../../dao/registroOperaciones';
const inicioSesionHandler = async (req, res) => {
  console.log(req.method);
  if (req.method == 'POST') {
    console.log('Se debería hacer metodo post para obtener inicio sesion');
    const data = JSON.parse(req.body);
    const usuario = await validacionInicioSesion(data.correo);
    res.json({ msg: '', respuesta: usuario });
  }
};

export default inicioSesionHandler;
