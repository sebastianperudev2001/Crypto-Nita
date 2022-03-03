import { TransaccionID } from "../../../../dao/Transacciones"

// Path: /api/proyectos/[id]
const proyectosIdHandler = async (req, res) => {
    if (req.method == "GET") {
        const data = req.query
        const operacion = await TransaccionID(data.id)
        res.json({
            msg: "",
            operacion: operacion
        })
    }
}
export default proyectosIdHandler