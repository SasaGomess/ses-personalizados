import style from './CardsPadrao.module.css'

export default function CardsPadrao({img, titulo, texto }) {
    return(
        <div className={style.passo}>
            <img src={img} alt="" />
            <p className={style.negrito}>{titulo}</p>
            <p>{texto}</p>

        </div>
          
    )
}