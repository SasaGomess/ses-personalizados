import style from "./SobreSes.module.css";
import Sparkle from "../../../assets/imagens/sparkle.png"

export default function SobreSes() {
  return (
    <section className={style.sobreSes} id="sobreses">
        <h1>Proporcionamos experiências incríveis desde 2019 </h1>
        <p>Somos apaixonados por transformar ideias em presentes únicos. Cada peça é feita com amor e atenção aos detalhes.</p>
        <div className={style.sobre_imagens}>
            <p>Nascemos em 2019 do sonho de mãe e filha em criar algo especial. Desde então, transformamos essa vontade em uma empresa que valoriza cada detalhe — com carinho, cuidado e dedicação em cada entrega. Nosso propósito é fazer do seu presente o mais especial de todos 🎁</p>
            
            <img className={style.sparkle} src={Sparkle} alt="" />

            <div className={style.card_dois}>
              
            </div>
        </div>
    </section>
  );
}