import { guardarDataPaso02 } from '../../../../../../../dao/registroOperaciones';

const usuarioIdHandler = async (req, res) => {
  if (req.method == 'GET') {
    const data = req.query;

    await guardarDataPaso02(data.id, data.correo, data.password, data.telefono);
    res.json({
      msg: '',
    });
  } else {
    req.status(400).json({ msg: 'Metodo no definido' });
  }
};

export default usuarioIdHandler;
