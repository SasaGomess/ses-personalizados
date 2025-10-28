import style from "./ComoFazerPedido.module.css";
import PassoUm from "../../../assets/imagens/Passo_1.png";
import PassoDois from "../../../assets/imagens/Passo2.png";
import PassoTres from "../../../assets/imagens/Passo3.png";
import PassoQuatro from "../../../assets/imagens/Passo4.png";
import PassoCinco from "../../../assets/imagens/Passo5.png";
import CardsPadrao from "../../ui/CardsPadrao/CardsPadrao";
import Sparkle from '../../../assets/imagens/sparkle.png'

export default function ComoFazerPedido() {
  return (
    <section className={style.como_comprar} id="como_personalizar">
        <h1>Como Fazer o Seu Pedido</h1>
        <img className={style.sparkle1} src={Sparkle} alt="" />

        <div className={style.primeiros_passos}>
          
            <CardsPadrao
            img={PassoUm}
            titulo="Escolha o produto"
            texto="Selecione aqui no site o item que quer personalizar."
             />
            <CardsPadrao
            img={PassoDois}
            titulo="Personalize do seu jeito"
            texto="Monte suas ideias de design como preferir."
             />
            <CardsPadrao
            img={PassoTres}
            titulo="Envie para nossa equipe"
            texto="Selecione aqui Clique em “Quero Personalizar” para mandar pelo WhatsApp."
             />
        </div>
        <img className={style.sparkle2} src={Sparkle} alt="" />
        <div className={style.ultimos_passos}>
            <CardsPadrao
            img={PassoQuatro}
            titulo="Ajustamos os detalhes"
            texto="Combinamos juntos tudo sobre cores, prazos, valores e o que mais for necessário." />

            <CardsPadrao
            img={PassoCinco}
            titulo="Prontinho!"
            texto="Finalize a compra e é só esperar seu pedido chegar" />
            
        </div>
        <img className={style.sparkle3} src={Sparkle} alt="" />
    </section>
  );
}