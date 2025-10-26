import style from "./Hero.module.css";
import Button from "../../ui/Button/Button";
import HeroImagem from '../../../assets/imagens/hero_img.png'

export default function Hero() {
  return( 
  <section className={style.hero}>
    <div className={style.hero_conteudo}>
      <h1>Personalize com amor <span className={style.rosa}>presentes</span> para quem você <span className={style.roxo}>ama.</span></h1>
      <p>Com a S&S Personalizados você pode personalizar do jeito que quiser canecas. copos, camisetas e muito mais!</p>
      <Button 
      texto="Personalize Agora"/>
    </div>
    <div className={style.hero_imagem}>
      <img src={HeroImagem} alt="Apresenta Produtos da S&S" />
    </div>
  </section>
  )
}
