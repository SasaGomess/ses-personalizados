import style from "./Hero.module.css";
import Button from "../../ui/Button/Button";
import HeroImagem from '../../../assets/imagens/hero_img.png'

export default function Hero() {
const abrirWhats = () => {
window.open(
      "https://wa.me/5511962510307?text=Olá!%20Vim%20pelo%20site%20e%20quero%20comprar!",
      "_blank"
    );
}
  return( 
  <section className={style.hero}>
    <div className={style.hero_conteudo}>
      <h1>Personalize com amor <span className={style.rosa}>presentes</span> para quem você <span className={style.roxo}>ama.</span></h1>
      <p>Com a S&S Personalizados você pode personalizar do jeito que quiser canecas. copos, camisetas e muito mais!</p>
      <Button 
      texto="Personalize Agora"
      onClick={abrirWhats}
      />
    </div>
    <div className={style.hero_imagem}>
      <img src={HeroImagem} alt="Apresenta Produtos da S&S" />
    </div>
  </section>
  )
}
