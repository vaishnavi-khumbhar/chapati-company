import { FaWhatsapp } from "react-icons/fa";

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/919876543210"
      className="whatsapp-float"
      target="_blank"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsappButton;