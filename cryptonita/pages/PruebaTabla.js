import HisotrialOperaciones from "../components/Historial-operaciones"
import { useState, useEffect } from "react"

export default function TablaOp() {

    const [listaOperacioes, setlistaOperacioes] = useState([])

    useEffect(async () => {
        let response = await fetch("/api/Historial")
        const data = await response.json()
        setlistaOperacioes(data.operaciones)
    }, [])

    return <div class="container">
        <HisotrialOperaciones Operaciones={listaOperacioes} />
    </div>

}