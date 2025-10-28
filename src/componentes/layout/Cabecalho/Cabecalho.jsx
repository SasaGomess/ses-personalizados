import React, { useState } from "react";
import style from "./Cabecalho.module.css";
import Logo from "../../../assets/imagens/Logo.png";
import Caneta from "../../../assets/imagens/caneta.png";
import Button from "../../ui/Button/Button";

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);

  const abrirWhats = () => {
    window.open(
      "https://wa.me/5511962510307?text=Olá!%20Vim%20pelo%20site%20e%20quero%20comprar!",
      "_blank"
    );
  };

  return (
    <header className={style.header}>
      <img src={Logo} alt="Logo S&S" />

      <button
        className={style.menu_btn}
        onClick={() => setMenuAberto(!menuAberto)}
        aria-label="Menu"
        aria-expanded={menuAberto}
      >
        <span className={menuAberto ? style.bar1Active : style.bar1} />
        <span className={menuAberto ? style.bar2Active : style.bar2} />
        <span className={menuAberto ? style.bar3Active : style.bar3} />
      </button>

      <nav
        className={`${style.links_conteudo} ${menuAberto ? style.menu_aberto : ""}`}
        role="navigation"
      >
        <a href="#home" onClick={() => setMenuAberto(false)}>
          Home
        </a>
        <a href="#galeria_fotos" onClick={() => setMenuAberto(false)}>
          Catálogo
        </a>
        <a href="#sobreses" onClick={() => setMenuAberto(false)}>
          Sobre nós
        </a>

        <a href="#como_personalizar" onClick={() => setMenuAberto(false)}>
          <button className={style.espaco_criativo}>
            <img src={Caneta} alt="Caneta Espaço Criativo" />
            Como Personalizar
          </button>
        </a>

        <Button texto="Quero Comprar" onClick={abrirWhats} />
      </nav>
    </header>
  );
}
