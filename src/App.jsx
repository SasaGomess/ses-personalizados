import './App.css'
import Home from './componentes/pages/Home/Home';
import Cabecalho from './componentes/layout/Cabecalho/Cabecalho';
import Rodape from './componentes/layout/Rodape/Rodape';
import WhatsAppButton from './componentes/ui/Button/WhatsAppButton';
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <body>
    <Cabecalho />
    <Home />
    <Rodape />
    <WhatsAppButton />
    </body>
  )
}

export default App
