const {modificarTransaccionEstado} = require("../../../../dao/MetodosTransacciones")

const ModificarHandler = async(request,response) =>{
    if(request.method == "PUT"){
        var id  = request.query.id
        const data = JSON.parse(request.body).estado
        modificarTransaccionEstado(id,data)
        response.json({
            msg:"ok"
        })
        return
    }

    response.status(400).json({
        msg:"error"
    })
}

export default ModificarHandler