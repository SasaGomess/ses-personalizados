import style from "./Hero.module.css";
import Button from "../../ui/Button/Button";
import HeroImagemUm from "../../../assets/imagens/hero_img1.png";
import HeroImagemDois from "../../../assets/imagens/hero_img2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Hero() {
  const abrirWhats = () => {
    window.open(
      "https://wa.me/5511962510307?text=Olá!%20Vim%20pelo%20site%20e%20quero%20comprar!",
      "_blank"
    );
  };
  return (
    <section className={style.hero}>
      <div className={style.hero_conteudo}>
        <h1>
          Personalize com amor <span className={style.rosa}>presentes</span>{" "}
          para quem você <span className={style.roxo}>ama.</span>
        </h1>
        <p>
          Com a S&S Personalizados você pode personalizar do jeito que quiser
          canecas. copos, camisetas e muito mais!
        </p>
        <Button texto="Personalize Agora" onClick={abrirWhats} />
      </div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          reverseDirection: true,
          disableOnInteraction: false,
        }}
        speed={900}
        modules={[Autoplay]}
      >
        <SwiperSlide className={style.hero_imagem}>
          <div className={style.hero_imagem}>
            <img src={HeroImagemUm} alt="Apresenta Produtos da S&S" />
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.hero_imagem}>
            <img src={HeroImagemDois} alt="Apresenta Produtos da S&S" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
