import style from "./Home.module.css";
import Hero from "../../layout/Hero/Hero.jsx";
import IconesConteudo from "../../ui/IconesConteudo/IconesConteudo.jsx";
import GaleriaProdutos from "../../layout/GaleriaProdutos/GaleriaProdutos.jsx";
import ComoFazerPedido from "../../layout/ComoFazerPedido/ComoFazerPedido.jsx";
import SobreSes from "../../layout/SobreSes/SobreSes.jsx";

export default function Home() {
  return (
    <main className={style.home} id="home">
      <Hero />
      <IconesConteudo />
      <GaleriaProdutos />
      <ComoFazerPedido />
      <SobreSes />
    </main>
  );
}
