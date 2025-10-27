import { FaWhatsapp } from "react-icons/fa";
import style from './WhatsAppButton.module.css'

export default function WhatsAppButton() {
  const handleClick = () => {
    // Substitua pelo número da sua mãe com DDI (ex: 55 + DDD + número)
    window.open(
      "https://wa.me/5511962510307?text=Olá!%20Vim%20pelo%20site%20e%20quero%20falar%20com%20você!",
      "_blank"
    );
  };

  return (
    <button
    className={style.wts_button}
      onClick={handleClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.boxShadow = "0px 6px 15px rgba(0, 0, 0, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
      }}
    >
      <FaWhatsapp size={32} />
    </button>
  );
};
