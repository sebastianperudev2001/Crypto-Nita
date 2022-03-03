const { obtenerCambioPEN_BTC, guardarCambioPEN_BTC } = require("../../../dao/cambioTipo")

const CambiarTipoHandler = async (request,response) =>{
    if(request.method=="GET"){
        const cambio = await obtenerCambioPEN_BTC()
        response.json({
            cambio:cambio,
            msg:"ok"
        })
        return
    }

    if(request.method == "PUT"){
        const data = JSON.parse(request.body).cambio
        await guardarCambioPEN_BTC(data)
        response.json({
            msg:"ok"
        })
        return
    }

    res.status(400).json({
        msg:"error"
    })
}

export default CambiarTipoHandler