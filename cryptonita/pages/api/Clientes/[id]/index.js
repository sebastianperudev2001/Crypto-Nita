import { obtenerCliente } from "../../../../dao/clientes"

const ClienteHandle = async (req, res) => {
    if (req.method == "GET") {
        const data= req.query
        const cliente = await obtenerCliente(data.id)
        res.json({
            cliente: cliente,
            msg: ""
        })
    } 
}
export default ClienteHandle