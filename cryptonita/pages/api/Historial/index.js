import { guardarTransaccion, obtenerTransaccion, modificarTransaccion } from "../../../dao/Transacciones"

const HistorialHandle = async (req, res) => {
    if (req.method == "GET") {
        const operaciones = await obtenerTransaccion()
        res.json({
            operaciones: operaciones,
            msg: ""
        })
    } else if (req.method == "POST") {
        //Registrar
        console.log("HOLA")
        const data = JSON.parse(req.body)
        guardarTransaccion(data.tipoCambio, data.tipoOperacion, data.monto, data.idUsuario)
        res.json({
            msg: ""
        })
    } else if (req.method == "PUT") {
        const data = JSON.parse(req.body)
        await modificarTransaccion(data)
        res.json({
            msg: ""
        })
    } else {
        res.status(400).jason({
            msg: "Error, metodo no disponible"
        })
    }
}
export default HistorialHandle