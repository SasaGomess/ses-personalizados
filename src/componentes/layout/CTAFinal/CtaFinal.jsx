import style from "./CtaFinal.module.css";
import Button from "../../ui/Button/Button";
import Caneca from '../../../assets/imagens/caneca.png'

export default function CtaFinal() {
        const abrirWhats = () => {
window.open(
      "https://wa.me/5511962510307?text=Olá!%20Vim%20pelo%20site%20e%20quero%20comprar!",
      "_blank"
    );
    }
  return( 
  <section className={style.cta}>

      <h1>Deixe a S&S fazer parte do seu <span className={style.rosa}>momento especial 💫</span> </h1>
      <img className={style.caneca_icon} src={Caneca} alt="" />
      <p>Cada produto é preparado com o carinho de quem ama o que faz. Fale com a gente e vamos criar juntos algo inesquecível!</p>
      <Button 
      texto="Quero Meu Personalizado"
      onClick={abrirWhats}/>
    
  </section>
  )
}
