import BaseButton from "@/components/Button";
import { IoIosCalendar, IoIosMap, IoIosTime } from "react-icons/io";
import PageLayout from "@/components/PageLayout";
import BaseInput from "@/components/Input";

export default function EventScreen(): JSX.Element {
  return (
    <>
      <PageLayout
        title="Eventos Oncoclínicas"
        subtitle="Congressos, palestras, simpósios e muito mais."
      >
        <div className="mt-14 hidden md:block">
          <img
            src="https://vidavg.com.br/wp-content/uploads/2021/10/Diagnostico-precoce-aumenta-chances-de-cura-do-cancer-de-mama-reforca-o-mastologista-Luciano-Florisbelo.jpg"
            alt="Imagem descritiva"
            className="h-[466px] w-full object-cover"
          />
        </div>

        <div className="mt-10 flex flex-col items-center justify-center md:flex-row md:items-start md:justify-between">
          <div className="relative flex flex-col items-start md:bottom-48 md:left-5">
            <img
              src="https://www.clubenoticias.com/images/noticias/8693/7d3c47363b7ee2b12f9204895d4b369b.jpg"
              alt="Foto"
              className="h-[316px] w-[320px] rounded-2xl object-cover"
            />

            <div className="mt-8 text-left">
              <div className="flex items-center text-lg text-darkGray">
                <IoIosCalendar size={24} className="mr-2" />
                <p className="font-bold">23/09/2023 a 07/10/2023</p>
              </div>

              <div className="mt-4 flex items-center text-lg text-darkGray">
                <IoIosMap size={24} className="mr-2" />
                <p className="font-bold">Evento Online</p>
              </div>

              <div className="mt-4 flex items-center text-lg text-darkGray">
                <IoIosTime size={24} className="mr-2" />
                <p className="font-bold">Das 9h às 19h</p>
              </div>
            </div>

            <div className="mt-10 hidden w-full justify-center md:flex">
              <div className="flex h-auto w-[493px] flex-col justify-between rounded-[20px] bg-primary p-16">
                <h2 className="text-left text-3xl font-bold text-white">
                  Inscreva-se
                </h2>

                <div className="mt-10 flex grow flex-col justify-between">
                  <div className="space-y-10">
                    <BaseInput
                      placeholder="Seu nome"
                      className="rounded-full bg-white"
                      radius="full"
                    />
                    <BaseInput
                      placeholder="Seu email"
                      className="rounded-full bg-white"
                      radius="full"
                    />
                    <BaseInput
                      placeholder="Seu telefone"
                      className="rounded-full bg-white"
                      radius="full"
                    />
                    <BaseInput
                      placeholder="Seu CPF"
                      className="rounded-full bg-white"
                      radius="full"
                    />
                  </div>

                  <BaseButton
                    color="primary"
                    size="lg"
                    variant="solid"
                    width="100%"
                    className="mt-6 w-full border border-white text-white"
                  >
                    Confirmar
                  </BaseButton>

                  <div className="mt-4 flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="terms"
                      className="size-5 rounded border-white text-primary focus:ring-primary"
                    />
                    <label
                      htmlFor="terms"
                      className="text-left text-[14px] leading-[18px] text-white"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum pellentesque nunc lectus, vitae lacinia ex
                      hendrerit in. Fusce id ex id sem ullamcorper. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit.
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center md:ml-52 md:mt-0 md:flex-1 md:text-left">
            <h1 className="text-[42px] text-primary">
              Novas tecnologias no combate ao câncer de mama
            </h1>

            <p className="mt-6 text-lg leading-[28px] text-darkGray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum pellentesque nunc lectus, vitae lacinia ex hendrerit
              in. Fusce id ex id sem ullamcorper. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vestibulum pellentesque nunc lectus,
              vitae lacinia ex hendrerit in. Fusce id ex id sem ullamcorper.
            </p>

            <h1 className="mt-10 text-[42px] font-bold text-primary">
              Médicos convidados
            </h1>
          </div>
        </div>
      </PageLayout>

      <div className="mt-10 block w-full justify-center md:hidden">
        <div className="flex size-auto flex-col justify-between bg-primary p-16">
          <h2 className="text-left text-3xl font-bold text-white">
            Inscreva-se
          </h2>

          <div className="mt-10 flex grow flex-col justify-between">
            <div className="space-y-10">
              <BaseInput
                placeholder="Seu nome"
                className="rounded-full bg-white"
                radius="full"
              />
              <BaseInput
                placeholder="Seu email"
                className="rounded-full bg-white"
                radius="full"
              />
              <BaseInput
                placeholder="Seu telefone"
                className="rounded-full bg-white"
                radius="full"
              />
              <BaseInput
                placeholder="Seu CPF"
                className="rounded-full bg-white"
                radius="full"
              />
            </div>

            <BaseButton
              color="primary"
              size="lg"
              variant="solid"
              width="100%"
              className="mt-6 w-full border border-white text-white"
            >
              Confirmar
            </BaseButton>

            <div className="mt-4 flex items-start space-x-3">
              <input
                type="checkbox"
                id="terms"
                className="size-5 rounded border-white text-primary focus:ring-primary"
              />
              <label
                htmlFor="terms"
                className="text-left text-[14px] leading-[18px] text-white"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum pellentesque nunc lectus, vitae lacinia ex hendrerit
                in. Fusce id ex id sem ullamcorper. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
