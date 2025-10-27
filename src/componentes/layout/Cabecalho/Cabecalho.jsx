import style from './Cabecalho.module.css'
import Logo from '../../../assets/imagens/Logo.png'
import Caneta from '../../../assets/imagens/caneta.png'
import Button from '../../ui/Button/Button'

export default function Cabecalho() {

    const abrirWhats = () => {
window.open(
      "https://wa.me/5511962510307?text=Olá!%20Vim%20pelo%20site%20e%20quero%20comprar!",
      "_blank"
    );
    }
    return (
        <header>
            <img src={Logo} alt="Logo S&S" />
                <nav className={style.links_conteudo}>
                    <a href="#home">Home</a>
                    <a href="#galeria_fotos">Catálogo</a>
                    <a href="#sobreses">Sobre nós</a>

                    <a href="#como_personalizar">
                        <button className={style.espaco_criativo}>
                        <img src={Caneta} alt="Caneta Espaco Criativo" />
                        Como Personalizar
                    </button>
                    </a>
                    
                    <Button
                texto="Quero Comprar"
                onClick={abrirWhats} />
                </nav>
        </header>
    )
}