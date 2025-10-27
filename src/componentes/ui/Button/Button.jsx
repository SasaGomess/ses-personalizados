import style from './Button.module.css'

export default function Button({texto}) {
    return(
        <button className={style.cta_button}>{texto}
        <span className="cta-button__light"></span>
        </button>
          
    )
}