import './App.css'
import Home from './componentes/pages/Home/Home';
import Cabecalho from './componentes/layout/Cabecalho/Cabecalho';
import Rodape from './componentes/layout/Rodape/Rodape';
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <Cabecalho />
    <Home />
    <Rodape />
    </>
  )
}

export default App
