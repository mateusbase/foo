interface MiniRoundedCardProps {
  id: number;
  text: string;
  image: string;
}

let presicisionImageSrc =
  "/assets/images/banner_images/precision_medicine_sm.png";
let resultBannerImageSrc = "/assets/images/banner_images/result_banner_sm.png";

if (typeof window !== "undefined" && window.innerWidth >= 1024) {
  presicisionImageSrc =
    "/assets/images/banner_images/precision_medicine_lg.png";
  resultBannerImageSrc = "/assets/images/banner_images/result_banner_lg.png";
}

const miniRoundedCardsMock: MiniRoundedCardProps[] = [
  {
    id: 1,
    text: "O resultado é divulgado ao médico em até 20 dias corridos.",
    image: resultBannerImageSrc,
  },
  {
    id: 2,
    text: "Estímulo para a participação nos exames de acompanhamento e detecção precoce de novos tumores originais.",
    image: presicisionImageSrc,
  },
];

export default miniRoundedCardsMock;
