import {useState} from "react"
import Nova from "../nova/Nova"
import Rexistro from "../rexistro/Rexistro"
import VistaLocal from "../vistaLocal/VistaLocal"
import VistaPortada from "../vistaPortada/VistaPortada"


function Navegador() {
  const [vista, setVista] = useState("Portada")
  function manexadorClick(evento){
    setVista (evento.target.id)
  }


return (
  <>
  <nav>
    <ul>
      <li><a id="Portada" onClick={manexadorClick}>Portada</a></li>
      <li><a id="Local" onClick={manexadorClick}>Local</a></li>
      <li><a id="Rexistro" onClick={manexadorClick}>Rexistro</a></li>
    </ul>
  </nav>
    {vista==="Portada" && <VistaPortada/>}
    {vista==="Local" && <VistaLocal/>}
    {vista==="Rexistro" && <Rexistro/>}
  </>
  )
}
export default Navegador  