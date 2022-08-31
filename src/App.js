import Navbar from "./components/Navbar/Navbar";
import './components/Navbar/NavbarCSS.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import './components/ItemListContainer/ItemListContainerCSS.css';
import Footer from './components/Footer/Footer';
import './components/Footer/FooterCSS.css'


function App() {

  return (
    <div>
      <Navbar curso="Titulo de la App" cur="(ReactJS)"/>
      <ItemListContainer greeting="greeting"/>
      <Footer infofoot="FOOTER--Aplicacion creada con React JS--FOOTER"/>
    </div>
  );
}

export default App;