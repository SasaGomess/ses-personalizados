import style from "./SobreSes.module.css";

export default function SobreSes() {
  return (
    <section className={style.sobreSes} id="sobreses">
        <h1>Proporcionamos experiências incríveis desde 2019 </h1>
        <p>Somos apaixonados por transformar ideias em presentes únicos. Cada peça é feita com amor e atenção aos detalhes.</p>
        <div className={style.sobre_imagens}>
            <div className={style.card_um}></div>
            <div className={style.card_dois}></div>
        </div>
    </section>
  );
}