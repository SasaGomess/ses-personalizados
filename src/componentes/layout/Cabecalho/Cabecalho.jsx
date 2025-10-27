import style from './Cabecalho.module.css'
import Logo from '../../../assets/imagens/Logo.png'
import Caneta from '../../../assets/imagens/caneta.png'
import Button from '../../ui/Button/Button'

export default function Cabecalho() {
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
                        Espaço Criativo
                    </button>
                    </a>
                    
                    <Button
                texto="Quero Personalizar" />
                </nav>
        </header>
    )
}