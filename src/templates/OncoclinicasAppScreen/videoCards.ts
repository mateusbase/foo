export interface VideoCardProps {
  id: number;
  src: string;
  description: string;
}

const videoCardMocks: VideoCardProps[] = [
  {
    id: 1,
    src: "https://www.youtube.com/watch?v=GoHN_plQBqs&t=3s",
    description: "Agenda",
  },
  {
    id: 2,
    src: "https://www.youtube.com/watch?v=GoHN_plQBqs&t=3s",
    description: "Visão Geral",
  },
  {
    id: 3,
    src: "https://www.youtube.com/watch?v=GoHN_plQBqs&t=3s",
    description: "Primeiro acesso",
  },
];

export default videoCardMocks;
