import Nova from '../nova/Nova.jsx';

function CoverSections() {
    return (
      <>
      <div>
        <section>
          <h2>SOSTIBILIDADE</h2>
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
        <section>
          <h2>FAKE NEWS</h2>
          <article>
            <Nova titulo="Este é o título" artigo="Contido da nova primeira"/>
            <Nova titulo="Este é outro título" artigo="Contido da nova segunda"/>
            </article>
        </section>
      </div>
      </>
    );
  }
  
  export default CoverSections;