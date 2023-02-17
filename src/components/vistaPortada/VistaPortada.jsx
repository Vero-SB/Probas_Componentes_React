import Nova from '../nova/Nova.jsx'
import styles from './VistaPortada.module.css'

function VistaPortada(props) {
  const novas = props.novas
  const compNovas = novas.map (
    cadaNova=> 
    <Nova titulo={cadaNova.titulo} artigo={cadaNova.artigo}/>
  )

return(
  <>
  <div className={styles.vistaportada}>
    {compNovas}
  </div>
  </>
)
}

export default VistaPortada;


/*
import Nova from '../nova/Nova.jsx'
import styles from './VistaPortada.module.css'

function VistaPortada() {
    return (
      <>
      <div className={styles.vistaportada}>
        <section>
          <h2>Novas Destacadas</h2>
            <article>
            <Nova titulo="Este é o título" artigo="Contido da nova primeira"/>
            <Nova titulo="Este é outro título" artigo="Contido da nova segunda"/>
            </article>
        </section>
        <section>
          <h2>LOCAL</h2>
          <article>
            <Nova titulo="Este é o título" artigo="Contido da nova primeira"/>
            <Nova titulo="Este é outro título" artigo="Contido da nova segunda"/>
            </article>
        </section>
      </div>
      </>
    );
  }
  
  export default VistaPortada;
  */