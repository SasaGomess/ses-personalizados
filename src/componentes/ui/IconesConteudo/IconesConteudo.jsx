import style from "./IconesConteudo.module.css";
import Caixa from "../../../assets/imagens/estoque-pronto.png";
import Editor from '../../../assets/imagens/editar.png';
import Camiseta from '../../../assets/imagens/camisa.png';
import Whats from '../../../assets/imagens/whatsapp_hero.png';

export default function IconesConteudo() {
  return (
    <div className={style.fundo_icone_conteudo}>
      <div className={style.icone_conteudo_info}>
        <img src={Caixa} alt="" />
        <p>Sem Pedido Mínimo</p>
      </div>
      <div className={style.icone_conteudo_info}>
        <img src={Editor} alt="" />
        <p>Editor Online</p>
      </div>
      <div className={style.icone_conteudo_info}>
        <img src={Camiseta} alt="" />
        <p>Pesonalize Como Quiser</p>
      </div>
      <div className={style.icone_conteudo_info}>
        <img src={Whats} alt="" />
        <p>Atendimento por WhatsApp</p>
      </div>
    </div>
  );
}
