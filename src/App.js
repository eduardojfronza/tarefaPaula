import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer"
import Nav from "./componentes/Nav/Nav";
import Home from "./pagina/Home/Home";
import { TelaInteira, ConteudoPagina } from './App.jsx'
function App() {

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <body>
      <TelaInteira>
        <Header />

        <ConteudoPagina>
          <Nav />
          <Home reproduz={reproduzVideo} />
        </ConteudoPagina>

        <Footer />
      </TelaInteira>
    </body>
  );
}

export default App;
