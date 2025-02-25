interface ProjectCardMock {
  id: number;
  image: string;
  title: string;
  text: string;
}

const projectCardMocks: ProjectCardMock[] = [
  {
    id: 1,
    image: "/assets/images/projetos-e-patrocinios/image.svg",
    title: "+25 projetos",
    text: "apoiados via Leis de Incentivo",
  },
  {
    id: 2,
    image: "/assets/images/projetos-e-patrocinios/image (1).svg",
    title: "7 estados",
    text: "brasileiros",
  },
];

export default projectCardMocks;
