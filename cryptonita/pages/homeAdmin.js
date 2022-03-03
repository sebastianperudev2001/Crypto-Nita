import Navegador from '../components/NavBar.component';
import { useState, useEffect } from 'react';

const HomeAdmin = () => {
  const clasesNav = ['nav-link active', 'nav-link', 'nav-link', 'nav-link'];
  const [mostrarContenido, setMostrarContenido] = useState(false)

  useEffect(() => {
    const admin = localStorage.getItem("esAdmin")
    if (admin != "true") {
      location.href = "/"
      return
    }
    setMostrarContenido(true)
  }, [])

  if (mostrarContenido != true) {
    return <div></div>
  }

  return <div className="container">
    <Navegador lisClass={clasesNav}></Navegador>
    <div className="row mt-5">
      <h1 className="text-center">Bienvenido Administrador</h1>
    </div>
  </div>
    ;
};
export default HomeAdmin;
