import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import CoverSections from './components/coverSections/CoverSections.jsx'
import Contador from './components/contador/Contador'
import Rexistro from './components/rexistro/Rexistro.jsx'

function App() {
  return (
    <>
    <header> <Header/> </header>
    <nav> <Nav/> </nav>
    <section> <CoverSections/> </section>
        <section> <Contador/> </section>

    </>
  );
}

export default App;
