import Nova from '../nova/Nova.jsx'

function VistaLocal() {
    return (
      <>
      <div>
        <section>
          <h2>Vista Novas Local</h2>
            <article>
            <Nova titulo="Titulo novas local" artigo="Contido da primeira nova local"/>
            <Nova titulo="Outro titulo novas local" artigo="Mais contidos"/>
            </article>
        </section>
      </div>
      </>
    );
  }
  
  export default VistaLocal;