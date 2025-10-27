import style from './Button.module.css'

export default function Button({texto, onClick}) {
    return(
        <button className={style.cta_button}
        onClick={onClick}
        >{texto}
        <span className="cta-button__light"></span>
        </button>
          
    )
}