interface CertificationData {
  id: number;
  name: string;
  imageSrc: string;
  shouldShowMore?: boolean;
}

const certificationsData: CertificationData[] = [
  {
    id: 1,
    name: "Acreditação Internacional Qmentum",
    imageSrc: "/assets/images/image 34.png",
    shouldShowMore: true,
  },
  {
    id: 2,
    name: "Selo de Excelência Unimed BH",
    imageSrc: "/assets/images/image 33.png",
    shouldShowMore: false,
  },
];

export default certificationsData;
