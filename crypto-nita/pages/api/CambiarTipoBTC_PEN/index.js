const { obtenerCambioBTC_PEN , guardarCambioBTC_PEN} = require("../../../dao/cambioTipo")

const CambiarTipoHandler = async (request,response) =>{
    if(request.method=="GET"){
        const cambio = await obtenerCambioBTC_PEN()
        response.json({
            cambio:cambio,
            msg:"ok"
        })
        return
    }

    if(request.method == "PUT"){
        const data = JSON.parse(request.body).cambio
        await guardarCambioBTC_PEN(data)
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