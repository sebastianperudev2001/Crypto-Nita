const { obtenerTransacciones } = require("../../../dao/MetodosTransacciones")

const EdicionTransaccionesHandler = async (request,response) =>{
    if(request.method=="GET"){
        const transacciones = await obtenerTransacciones()
        response.json({
            transacciones:transacciones,
            msg:"ok"
        })
        return
    }

    if(request.method == "POST"){
        response.json({
            msg:"ok"
        })
        return
    }

    response.status(400).json({
        msg:"error"
    })
}

export default EdicionTransaccionesHandler