import { modificarCliente, obtenerClientes } from "../../../dao/clientes"

const ClientesHandle = async (req, res) => {
    if (req.method == "GET") {
        const clientes = await obtenerClientes()
        res.json({
            clientes: clientes,
            msg: ""
        })
    } else if(req.method=="PUT"){
        const data = JSON.parse(req.body)
        await modificarCliente(data)
        res.json({
            msg: ""
        })
    }
}
export default ClientesHandle