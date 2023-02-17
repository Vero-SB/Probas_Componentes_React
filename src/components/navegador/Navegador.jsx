import {useState} from "react"
import Rexistro from "../rexistro/Rexistro"
import VistaLocal from "../vistaLocal/VistaLocal"
import VistaPortada from "../vistaPortada/VistaPortada"
import styles from './Navegador.module.css'


function Navegador() {
  const [vista, setVista] = useState("Portada")
  function manexadorClick(evento){
    setVista (evento.target.id)
  }
  const novas= [
    {
      titulo:"Titulo 1",
      artigo:"Contido 1"
    },
    {
      titulo:"Título 2",
      artigo:"Contido 2"
    }
  ]
return (
  <>
  <nav>
    <ul className={styles.ul}>
      <li className={styles.li}><a id="Portada" onClick={manexadorClick}>Portada</a></li>
      <li className={styles.li}><a id="Local" onClick={manexadorClick}>Local</a></li>
      <li className={styles.li}><a id="Rexistro" onClick={manexadorClick}>Rexistro</a></li>
    </ul>
  </nav>
  <div className={styles.vista}>
    {vista==="Portada" && <VistaPortada novas={novas}/>}
    {vista==="Local" && <VistaLocal/>}
    {vista==="Rexistro" && <Rexistro/>}
  </div>
  </>
  )
}
export default Navegador  