interface CancerTypesProps {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const cancerTypesMock: CancerTypesProps[] = [
  {
    id: 1,
    title: "Próstata",
    description:
      "Pode ser assintomático em seus estágios iniciais, portanto exames de triagem regulares são essenciais.",
    icon: "/assets/images/uro-oncology/CancerTypesCard/prostata.png",
  },
  {
    id: 2,
    title: "Bexiga",
    description:
      "Os sintomas incluem sangue na urina, dor e necessidade frequente de urinar.",
    icon: "/assets/images/uro-oncology/CancerTypesCard/bexiga.png",
  },
  {
    id: 3,
    title: "Renal",
    description:
      "Os principais sintomas são sangue na urina e massa abdominal palpável.",
    icon: "/assets/images/uro-oncology/CancerTypesCard/rim.png",
  },
  {
    id: 4,
    title: "Testicular",
    description:
      "Os sintomas incluem inchaço ou massa no testículo, dor abdominal e dor na parte inferior das costas.",
    icon: "/assets/images/uro-oncology/CancerTypesCard/testiculo2.png",
  },
];

export default cancerTypesMock;
