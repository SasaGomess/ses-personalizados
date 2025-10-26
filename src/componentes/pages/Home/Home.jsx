import style from "./Home.module.css";
import Rodape from "../../layout/Rodape/Rodape.jsx";
import Cabecalho from "../../layout/Cabecalho/Cabecalho.jsx";
import Hero from "../../layout/Hero/Hero.jsx";

export default function Home() {
  return (
    <main className={style.home}>
      <Hero />   
    </main>
  );
}
