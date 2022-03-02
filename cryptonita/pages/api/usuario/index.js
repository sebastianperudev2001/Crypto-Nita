import { guardarDataPaso01 } from '../../../dao/registroOperaciones';

const usuarioHandler = async (req, res) => {
  if (req.method == 'GET') {
    console.log('Se obtiene un método GET');
    res.send('Hello GET XD');
  } else if (req.method == 'POST') {
    console.log('Se debería guardar en la BD');
    const data = JSON.parse(req.body);
    console.log(data);
    const usuario = await guardarDataPaso01(
      data.nombre,
      data.apellido,
      data.dni
    );
    res.json({ msg: '', id: usuario.id });
  } else if (req.method == 'PUT') {
    console.log('Se busca un metodo PUT');
  } else {
    req.status(400).json({
      msg: 'Metodo no definido',
    });
  }
};

export default usuarioHandler;
