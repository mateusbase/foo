import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export default function InformationSlider({
  title,
  description,
  image,
}: InformationSliderProps): JSX.Element {
  return (
    <section className="flex h-[536px] w-full justify-between text-white">
      <section className="bg-padding-box flex h-full w-1/2 flex-col justify-between gap-2 rounded-bl-[100px] bg-gradient-to-r from-primary-foreground to-secondary-foreground bg-no-repeat px-20 py-10">
        <div className="">
          <p className="font-">Medicina de Precisão</p>
        </div>

        <div>
          <p className="text-6xl font-extralight">
            Descubra os benefícios da medicina de precisão
          </p>
        </div>

        <div>
          <p className="text-2xl">
            Perguntas e respostas para você entender como identificar,
            autoavaliar e muitas vezes até previnir o aparecimento do câncer em
            sua família.
          </p>
        </div>

        <div className="flex gap-2">
          <MdKeyboardArrowLeft size="30px" />
          <MdOutlineKeyboardArrowRight size="30px" />
        </div>
      </section>

      <section className="h-full w-1/2">
        <img
          src="https://placehold.co/760x536/000000/FFFF"
          alt="Imagem 1"
          className="h-full w-full"
        />
      </section>
    </section>
  );
}
