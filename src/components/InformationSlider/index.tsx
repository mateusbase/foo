import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";


export default function InformationSlider(): JSX.Element {
  return (
    <section className="w-full h-[536px] text-white flex justify-between">
      <section className="w-1/2 rounded-bl-[100px] py-10 px-20 gap-2 flex flex-col justify-between bg-gradient-to-r from-[#00B6AD] to-[#BA99E7] bg-no-repeat bg-padding-box h-full">

        <div className="">
          <p className="font-">Medicina de Precisão</p>
        </div>

        <div>
          <p className="text-6xl font-extralight">Descubra os benefícios da medicina de precisão</p>
        </div>

        <div>
          <p className="text-2xl">Perguntas e respostas para você entender como identificar, autoavaliar e muitas vezes até previnir o aparecimento do câncer em sua família.</p>
        </div>

        <div className="flex gap-2">
          <MdKeyboardArrowLeft size="30px" />
          <MdOutlineKeyboardArrowRight size="30px" />
        </div>
      </section>

      <section className="w-1/2 h-full">
        <img
          src="https://via.placeholder.com/352x198"
          alt="Imagem 1"
          className="w-full h-full"
        />
      </section>

    </section>
  )
}
