import { guardarTransaccionInicial } from "../../../dao/MetodosTransacciones"


const ventaHandler = async (request,response) =>{

    if(request.method == "POST"){
        const data = JSON.parse(request.body)
        var id = await guardarTransaccionInicial(data.tipoCambio,"Venta",data.monto,data.idUsuario)
        response.json({
            msg:"ok",
            id:id.id
        })
        return
    }

    response.status(400).json({
        msg:"error"
    })

}

export default ventaHandler