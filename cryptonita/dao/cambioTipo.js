const db = require("../sequelize/models");

const obtenerCambioBTC_PEN = async () =>{
    let response = await db.Transaccion.findAll({
        where:{
            id:"1"
        }
    })
    response = response[0].tipoCambio
    return response
}

const obtenerCambioPEN_BTC = async () =>{
    let response = await db.Transaccion.findAll({
        where:{
            id:"2"
        }
    })
    response = response[0].tipoCambio
    return response
}

const obtenerTransaccion = async (id) =>{
    const proyecto = await db.Transaccion.findOne({
        where:{
            id:id
        }
    })

    return proyecto
}

const guardarCambioBTC_PEN = async (cambio) =>{
    const Transaccion = await obtenerTransaccion("1")
    Transaccion.tipoCambio = cambio
    await Transaccion.save()
}

const guardarCambioPEN_BTC = async (cambio) =>{
    const Transaccion = await obtenerTransaccion("2")
    Transaccion.tipoCambio = cambio
    await Transaccion.save()
}

export {obtenerCambioBTC_PEN, obtenerCambioPEN_BTC,guardarCambioBTC_PEN, guardarCambioPEN_BTC}