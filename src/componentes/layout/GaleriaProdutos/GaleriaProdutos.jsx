import style from "./GaleriaProdutos.module.css";
import Button from "../../ui/Button/Button";
import Canecas from "../../../assets/imagens/canecas.png";

export default function GaleriaProdutos() {
  return (
    <section className={style.galeria} id="galeria_fotos">
      <h1>Conheça os Favoritos dos nossos Clientes</h1>

      <div className={style.galeria_caneca}>
        {/* <Button texto="Ver Tudo" /> */}

        <div className={style.produto_caneca_conteudo}>
          <img src={Canecas} alt="" />
          <button className={style.button_canecas}>Canecas Personalizadas</button>
        </div>
      </div>


      <div className={style.galeria_produtos_card}>
         <div className={style.produtos_canecas_conteudo}>
          <div className={style.produto_descricao}>
            Canecas
            {/* <Button texto="Ver Tudo" /> */}
          </div>
        </div>

        <div className={style.produtos_copos_conteudo}>
          <div className={style.produto_descricao}>
            Copos & Garrafas
            {/* <Button texto="Ver Tudo" /> */}
          </div>
        </div>
        <div className={style.produtos_camiseta_conteudo}>
          <div className={style.produto_descricao}>
            Camisetas
            {/* <Button texto="Ver Tudo" /> */}
          </div>
        </div>

        <div className={style.produtos_azulejos_conteudo}>
          <div className={style.produto_descricao}>
            Azulejos
            {/* <Button texto="Ver Tudo" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
