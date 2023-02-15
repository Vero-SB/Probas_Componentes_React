import Nova from '../nova/Nova.jsx';

function VistaPortada() {
    return (
      <>
      <div>
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