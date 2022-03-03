const navegar=(link)=>{
    location.href=link
}

const obtenerOp = (arreglo,id) =>{
    if (arreglo==[] ||arreglo  == null){
        console.log("Vacío")
        return
    }

    for(let ope of arreglo){
        if(ope.id == id){
            return ope
        }
    }
    return null
}

export {navegar,obtenerOp,}


