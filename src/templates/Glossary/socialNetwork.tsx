import { FaWhatsapp } from "react-icons/fa";
import { FiFacebook, FiLinkedin, FiX } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

type SocialNetwork = {
  icon: JSX.Element;
  name: string;
};

const socialNetwork: SocialNetwork[] = [
  {
    icon: <FiFacebook />,
    name: "Facebook",
  },
  {
    icon: <FiX />,
    name: "X",
  },
  {
    icon: <FaWhatsapp />,
    name: "Whatsapp",
  },
  {
    icon: <FiLinkedin />,
    name: "Linkedin",
  },
  {
    icon: <TfiEmail />,
    name: "Email",
  },
];

export default socialNetwork;
