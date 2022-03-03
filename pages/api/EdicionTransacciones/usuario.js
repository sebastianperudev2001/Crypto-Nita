const { obtenerUsuarioUnico } = require("../../../dao/MetodosTransacciones")

const EdicionTransaccionesHandler2 = async (request,response) =>{
    if(request.method=="POST"){
        const id = JSON.parse(request.body).id
        const usuario = await obtenerUsuarioUnico(id)
        response.json({
            usuario:usuario,
            msg:"ok"
        })
        return
    }

    response.status(400).json({
        msg:"error"
    })
}

export default EdicionTransaccionesHandler2