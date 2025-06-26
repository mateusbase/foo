import { Clock, MapPin, Phone, PinIcon } from "lucide-react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";

export const sections = [
  {
    href: "#",
    text: "Fale por WhatsApp",
    icon: <RiWhatsappFill />,
    isLink: true,
  },
  {
    href: "#",
    text: "Ligar na central de atendimento",
    icon: <BsFillTelephoneFill />,
    isLink: true,
  },
  {
    href: "#",
    text: "Mostrar no mapa",
    icon: <PinIcon size={0.8} />,
    isLink: true,
  },
];

export const mapSections = [
  {
    icon: <Phone size={34} className="text-primary" />,
    title: "Telefone",
  },
  {
    title: "Horário de funcionamento",
    icon: <Clock size={34} className="text-primary" />,
  },
  {
    title: "Endereço",
    icon: <MapPin size={0.8} className="text-primary" />,
  },
];
