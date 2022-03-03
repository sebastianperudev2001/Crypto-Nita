import { obtenerFiltro } from "../../../dao/clientes"

const FiltrosHandle = async (req, res) => {
    if(req.method=="PUT"){
        const data = JSON.parse(req.body)
        const clientes= await obtenerFiltro(data)
        res.json({
            clientes: clientes
        })
    }
}
export default FiltrosHandle