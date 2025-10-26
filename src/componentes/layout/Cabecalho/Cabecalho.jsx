import style from './Cabecalho.module.css'
import Logo from '../../../assets/imagens/Logo.png'
import Caneta from '../../../assets/imagens/caneta.png'
import Button from '../../ui/Button/Button'

export default function Cabecalho() {
    return (
        <header>
            <img src={Logo} alt="Logo S&S" />
                <div className={style.links_conteudo}>
                    <p>Home</p>
                    <p>Catálogo</p>
                    <p>Sobre nós</p>
                    <button className={style.espaco_criativo}>
                        <img src={Caneta} alt="Caneta Espaco Criativo" />
                        Espaço Criativo
                    </button>
                    <Button
                texto="Quero Personalizar" />
                </div>
        </header>
    )
}