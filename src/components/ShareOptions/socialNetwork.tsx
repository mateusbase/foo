import { FaWhatsapp } from "react-icons/fa";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { TbBrandX } from "react-icons/tb";
import { ShareOption } from "./types";

const socialNetwork: ShareOption[] = [
  {
    id: 1,
    icon: <FiFacebook />,
    name: "Facebook",
    url: "https://facebook.com",
  },
  {
    id: 2,
    icon: <TbBrandX />,
    name: "X",
    url: "https://twitter.com",
  },
  {
    id: 3,
    icon: <FaWhatsapp />,
    name: "Whatsapp",
    url: "https://whatsapp.com",
  },
  {
    id: 4,
    icon: <FiLinkedin />,
    name: "Linkedin",
    url: "https://linkedin.com",
  },
  {
    id: 5,
    icon: <TfiEmail />,
    name: "Email",
    url: "mailto:example@example.com",
  },
];

export default socialNetwork;
