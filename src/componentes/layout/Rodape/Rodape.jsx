import style from './Rodape.module.css'
import Logo from '../../../assets/imagens/logo_footer.png'
import Insta from '../../../assets/imagens/instagram.png'
import Whats from '../../../assets/imagens/whatsapp.png'
import Onda from '../../../assets/imagens/onda.png'

export default function Rodape() {
    return (
        <>
        <div className={style.onda}>
            <img src={Onda} alt="" />
        </div>
        <footer>
            <div className={style.rodape_conteudo}>
                <div className={style.navegacao}>
                    <h3>Navegue & Crie</h3>
                    <a href="#galeria_fotos">Catálogo</a>
                    <a href="#sobreses">Sobre Nos</a>
                    <a href="#como_personalizar">Como Fazer o Pedido</a>
                    <a href="#home">Home</a>
                </div>
                <img src={Logo} alt="Logo s&s Personalizados" />
                <div className={style.contato}>
                    <h3>Contato</h3>
                    <p>+55 (11) 9625-0307 - Telefone / WhatsApp</p>
                    <p>ses_contato@gmail.com</p>
                    <div className={style.sociais}>
                        <a href="https://www.instagram.com/personaliza_ses/">
                            <img src={Insta} alt="Logo Instagram" />
                        </a>
                        
                        <img src={Whats} alt="Logo WhatsApp" />
                    </div>
                </div>
            </div>
            <p className={style.copy}>©2025 S&S Personalizados. Todos os Direitos Reservados</p>
        </footer>
        </>
    )
}