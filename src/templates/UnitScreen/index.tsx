import { Button, Input } from "@nextui-org/react";
import {
  Activity,
  CameraIcon,
  Clock,
  Heart,
  MapPin,
  MessageSquare,
  Phone,
  Search,
  User,
} from "lucide-react";

export default function UnitScreen(): JSX.Element {
  return (
    <main>
      <div
        className="relative h-[343px] w-full bg-gradient-to-r from-[#00B6AD] to-[#BA99E7]"
        style={{ height: "343px", opacity: 1 }}
      >
        <div className="absolute inset-0 flex justify-center">
          <div className="flex w-full max-w-screen-2xl flex-col justify-center">
            <h1
              className="font-bold text-white"
              style={{ fontSize: "60px", lineHeight: "72px" }}
            >
              Oncoclínicas Faria Lima
            </h1>
            <p
              className="mt-4 text-white"
              style={{
                fontSize: "18px",
                lineHeight: "24px",
                fontWeight: "500",
              }}
            >
              Avenida Brigadeiro Faria Lima, 4.300 - 6º e 10º Andar - Vila
              Olímpia São Paulo/SP
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-[-56.5px] right-0 flex h-[113px] w-[1256px] items-center justify-between rounded-l-[20px] bg-[#007D77] pl-6 pr-10 text-white"
          style={{ borderRadius: "20px 0px 0px 20px", opacity: 1 }}
        >
          <div
            className="flex items-center gap-8 text-lg font-medium"
            style={{ fontSize: "24px", marginLeft: "30px" }}
          >
            <a href="#" className="flex items-center gap-2 hover:underline">
              <MessageSquare size={24} /> Fale por WhatsApp
            </a>
            <span>|</span>
            <a href="#" className="flex items-center gap-2 hover:underline">
              <Phone size={24} /> Ligar na central de atendimento
            </a>
            <span>|</span>
            <a href="#" className="flex items-center gap-2 hover:underline">
              <MapPin size={24} /> Mostrar no mapa
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-between py-28">
        <div className="font-mono z-10 items-start justify-between text-sm lg:flex">
          <h1 className="text-left">
            Home &gt; Unidades &gt; São Paulo &gt; Oncoclínicas Faria Lima
          </h1>
        </div>

        <div className="mt-5 flex">
          <div className="flex-1">
            <div>
              <h2
                className="text-left font-bold"
                style={{ fontSize: "42px", lineHeight: "50px", color: "#007D77" }}
              >
                Especialidades e Serviços Oncoclínicas Faria Lima
              </h2>

              <div className="mt-20 grid grid-cols-3 gap-20">
                <div
                  className="flex items-center gap-2"
                  style={{ fontSize: "20px", color: "#007D77" }}
                >
                  <Heart size={60} className="text-primary" /> Cardiologia Oncológica
                </div>
                <div
                  className="flex items-center gap-2"
                  style={{ fontSize: "20px", color: "#007D77" }}
                >
                  <User size={60} className="text-primary" /> Dermatologia
                </div>
                <div
                  className="flex items-center gap-2"
                  style={{ fontSize: "20px", color: "#007D77" }}
                >
                  <Activity size={60} className="text-primary" /> Genética Médica
                </div>

                <div
                  className="flex items-center gap-2"
                  style={{ fontSize: "20px", color: "#007D77" }}
                >
                  <Heart size={60} className="text-primary" /> Hematologia
                </div>
                <div
                  className="flex items-center gap-2"
                  style={{ fontSize: "20px", color: "#007D77" }}
                >
                  <User size={60} className="text-primary" /> Medicina Paliativa
                </div>
                <div
                  className="flex items-center gap-2"
                  style={{ fontSize: "20px", color: "#007D77" }}
                >
                  <Activity size={60} className="text-primary" /> Oncologia Clínica
                </div>

                <div
                  className="flex items-center gap-2"
                  style={{ fontSize: "20px", color: "#007D77" }}
                >
                  <Activity size={60} className="text-primary" /> Crioterapia
                </div>
              </div>
            </div>

            <div>
              <h2
                className="text-left font-bold mt-32"
                style={{ fontSize: "42px", lineHeight: "50px", color: "#007D77" }}
              >
                Facilidades e comodidades
              </h2>

              <div className="mt-20 grid grid-cols-3 gap-20">
                <div
                  className="flex items-center gap-2"
                  style={{ fontSize: "20px", color: "#007D77" }}
                >
                  <Heart size={60} className="text-primary" /> Estacionemento
                </div>

                <div
                  className="flex items-center gap-2"
                  style={{ fontSize: "20px", color: "#007D77" }}
                >
                  <User size={60} className="text-primary" /> Wi-fi
                </div>

                <div
                  className="flex items-center gap-2"
                  style={{ fontSize: "20px", color: "#007D77" }}
                >
                  <Activity size={60} className="text-primary" /> Lanche para paciente
                </div>

              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mt-32">
                <h2
                  className="font-bold"
                  style={{ fontSize: "42px", lineHeight: "50px", color: "#007D77" }}
                >
                  Convênios atendidos nesta unidade
                </h2>

                <Input
                  placeholder="Buscar convênio"
                  size="lg"
                  radius="full"
                  variant="bordered"
                  endContent={<Search className="text-2xl text-default-400" />}
                  className="max-w-xs"
                />
              </div>

              <div className="mt-20 grid grid-cols-3 gap-x-20 gap-y-4 font-bold">
                <div
                  className="flex items-center"
                  style={{ fontSize: "20px", color: "#5C5C5C" }}
                >
                  Amil Assistência Médica
                </div>
                <div
                  className="flex items-center"
                  style={{ fontSize: "20px", color: "#5C5C5C" }}
                >
                  Assim Saúde
                </div>
                <div
                  className="flex items-center"
                  style={{ fontSize: "20px", color: "#5C5C5C" }}
                >
                  Bradesco Seguros
                </div>
                <div
                  className="flex items-center"
                  style={{ fontSize: "20px", color: "#5C5C5C" }}
                >
                  Central Nacional Unimed
                </div>
                <div
                  className="flex items-center"
                  style={{ fontSize: "20px", color: "#5C5C5C" }}
                >
                  (CNU) NotreDame Intermédica
                </div>
                <div
                  className="flex items-center"
                  style={{ fontSize: "20px", color: "#5C5C5C" }}
                >
                  Prevent Sênior São Francisco
                </div>

                <div
                  className="flex items-center"
                  style={{ fontSize: "20px", color: "#5C5C5C" }}
                >
                  Amil Assistência Médica
                </div>
                <div
                  className="flex items-center"
                  style={{ fontSize: "20px", color: "#5C5C5C" }}
                >
                  Assim Saúde
                </div>
                <div
                  className="flex items-center"
                  style={{ fontSize: "20px", color: "#5C5C5C" }}
                >
                  Bradesco Seguros
                </div>
                <div
                  className="flex items-center"
                  style={{ fontSize: "20px", color: "#5C5C5C" }}
                >
                  Central Nacional Unimed
                </div>
                <div
                  className="flex items-center"
                  style={{ fontSize: "20px", color: "#5C5C5C" }}
                >
                  (CNU) NotreDame Intermédica
                </div>
                <div
                  className="flex items-center"
                  style={{ fontSize: "20px", color: "#5C5C5C" }}
                >
                  Prevent Sênior São Francisco
                </div>

                <div
                  className="flex items-center"
                  style={{ fontSize: "20px", color: "#5C5C5C" }}
                >
                  Amil Assistência Médica
                </div>
                <div
                  className="flex items-center"
                  style={{ fontSize: "20px", color: "#5C5C5C" }}
                >
                  Assim Saúde
                </div>
                <div
                  className="flex items-center"
                  style={{ fontSize: "20px", color: "#5C5C5C" }}
                >
                  Bradesco Seguros
                </div>
                <div
                  className="flex items-center"
                  style={{ fontSize: "20px", color: "#5C5C5C" }}
                >
                  Central Nacional Unimed
                </div>
                <div
                  className="flex items-center"
                  style={{ fontSize: "20px", color: "#5C5C5C" }}
                >
                  (CNU) NotreDame Intermédica
                </div>
                <div
                  className="flex items-center"
                  style={{ fontSize: "20px", color: "#5C5C5C" }}
                >
                  Prevent Sênior São Francisco
                </div>

                <div
                  className="flex items-center"
                  style={{ fontSize: "20px", color: "#5C5C5C" }}
                >
                  Amil Assistência Médica
                </div>
                <div
                  className="flex items-center"
                  style={{ fontSize: "20px", color: "#5C5C5C" }}
                >
                  Assim Saúde
                </div>
                <div
                  className="flex items-center"
                  style={{ fontSize: "20px", color: "#5C5C5C" }}
                >
                  Bradesco Seguros
                </div>
                <div
                  className="flex items-center"
                  style={{ fontSize: "20px", color: "#5C5C5C" }}
                >
                  Central Nacional Unimed
                </div>
                <div
                  className="flex items-center"
                  style={{ fontSize: "20px", color: "#5C5C5C" }}
                >
                  (CNU) NotreDame Intermédica
                </div>
                <div
                  className="flex items-center"
                  style={{ fontSize: "20px", color: "#5C5C5C" }}
                >
                  Prevent Sênior São Francisco
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mt-32">
                <h2
                  className="font-bold"
                  style={{ fontSize: "42px", lineHeight: "50px", color: "#007D77" }}
                >
                  Corpo Clínico
                </h2>

                <div className="flex gap-5">
                  <Input
                    placeholder="Especialidade"
                    size="lg"
                    radius="full"
                    variant="bordered"
                    endContent={<Search className="text-2xl text-default-400" />}
                    className="max-w-xs"
                  />

                  <Input
                    placeholder="Buscar por nome ou CRM"
                    size="lg"
                    radius="full"
                    variant="bordered"
                    endContent={<Search className="text-2xl text-default-400" />}
                    className="max-w-xs"
                  />
                </div>
              </div>

              <div className="mt-10 flex justify-between">
                <div
                  className="w-[352px] h-[552px] border border-[#707070] rounded-bl-[30px] flex flex-col items-start"
                  style={{ opacity: 1 }}
                >
                  <img
                    src="https://img.freepik.com/fotos-premium/medico-alegre-um-rosto-feliz-na-profissao-medica-isolado-em-um-fundo-branco_94628-20220.jpg?w=1800"
                    alt="Nome do Médico"
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold" style={{ fontSize: "24px", color: "#007D77" }}>
                      Carla Lira
                    </h3>
                    <p className="font-bold text-gray-600 mt-1">CRM: 123456</p>
                    <p className="text-gray-600 mt-2">Especialidade</p>
                    <p className="mt-4" style={{ color: "#007D77", fontWeight: "bold" }}>
                      RQE
                    </p>
                    <p className="text-gray-600 mt-1">12345</p>
                    <p className="mt-4" style={{ color: "#007D77", fontWeight: "bold" }}>
                      Local de Atendimento
                    </p>
                    <p className="text-gray-600 mt-1">Hospital XYZ</p>
                  </div>
                </div>

                <div
                  className="w-[352px] h-[552px] border border-[#707070] rounded-bl-[30px] flex flex-col items-start"
                  style={{ opacity: 1 }}
                >
                  <img
                    src="https://img.freepik.com/fotos-premium/a-presenca-iluminadora-da-enfermeira-isolada-em-um-fundo-branco-ai-generativo_94628-9638.jpg?w=1800"
                    alt="Nome do Médico"
                    className="w-full h-56 object-cover "
                  />
                  <div className="p-4">
                    <h3 className="font-bold" style={{ fontSize: "24px", color: "#007D77" }}>
                      Carla Lira
                    </h3>
                    <p className="font-bold text-gray-600 mt-1">CRM: 123456</p>
                    <p className="text-gray-600 mt-2">Especialidade</p>
                    <p className="mt-4" style={{ color: "#007D77", fontWeight: "bold" }}>
                      RQE
                    </p>
                    <p className="text-gray-600 mt-1">12345</p>
                    <p className="mt-4" style={{ color: "#007D77", fontWeight: "bold" }}>
                      Local de Atendimento
                    </p>
                    <p className="text-gray-600 mt-1">Hospital XYZ</p>
                  </div>
                </div>

                <div
                  className="w-[352px] h-[552px] border border-[#707070] rounded-bl-[30px] flex flex-col items-start"
                  style={{ opacity: 1 }}
                >
                  <img
                    src="https://img.freepik.com/fotos-premium/mulher-prestadora-de-servicos-de-saude-em-scrub-wear-generative-ai_94628-7730.jpg?w=1800"
                    alt="Nome do Médico"
                    className="w-full h-56 object-cover "
                  />
                  <div className="p-4">
                    <h3 className="font-bold" style={{ fontSize: "24px", color: "#007D77" }}>
                      Carla Lira
                    </h3>
                    <p className="font-bold text-gray-600 mt-1">CRM: 123456</p>
                    <p className="text-gray-600 mt-2">Especialidade</p>
                    <p className="mt-4" style={{ color: "#007D77", fontWeight: "bold" }}>
                      RQE
                    </p>
                    <p className="text-gray-600 mt-1">12345</p>
                    <p className="mt-4" style={{ color: "#007D77", fontWeight: "bold" }}>
                      Local de Atendimento
                    </p>
                    <p className="text-gray-600 mt-1">Hospital XYZ</p>
                  </div>
                </div>


              </div>
              <Button color="primary" variant="bordered" startContent={<CameraIcon />}>
                Take a photo
              </Button>

            </div>
          </div>

          <div
            className="ml-8 flex h-[970px] w-[506px] flex-col rounded-[20px] bg-[#F0F0F0] p-10"
            style={{ borderRadius: "20px", opacity: 1 }}
          >
            <div className="mb-6">
              <div className="mb-2">
                <div className="flex items-center gap-2">
                  <Clock size={34} className="text-[#007D77]" />
                  <h3
                    className="font-bold text-[#007D77]"
                    style={{ fontSize: "20px", lineHeight: "26px" }}
                  >
                    Horário de funcionamento
                  </h3>
                </div>
                <p
                  className="text-[#5C5C5C] mt-2"
                  style={{ fontSize: "18px", lineHeight: "30px", marginLeft: "40px" }}
                >
                  Segunda a Sexta-feira - Das 8h às 18h
                </p>
              </div>
            </div>

            <div className="mb-6">
              <div className="mb-2">
                <div className="flex items-center gap-2">
                  <MapPin size={34} className="text-[#007D77]" />
                  <h3
                    className="font-bold text-[#007D77]"
                    style={{ fontSize: "20px", lineHeight: "26px" }}
                  >
                    Endereço
                  </h3>
                </div>
                <p
                  className="text-[#5C5C5C] mt-2"
                  style={{ fontSize: "18px", lineHeight: "30px", marginLeft: "40px" }}
                >
                  Avenida Brigadeiro Faria Lima, 4.300 - 6º e 10º Andar - Vila Olímpia São
                  Paulo/SP
                </p>
              </div>
            </div>

            <div className="mb-6 max-w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.7558529423423!2d-46.69341978502346!3d-23.569239884679595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce573e7920f963%3A0x183c9f1d5287695d!2sAv.%20Brigadeiro%20Faria%20Lima%2C%204300%20-%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004527-120%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1692616753152!5m2!1spt-BR!2sus"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: "20px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="mb-6">
              <h3
                className="mb-2 font-bold text-[#007D77]"
                style={{ fontSize: "20px", lineHeight: "26px" }}
              >
                Estrutura da Unidade
              </h3>
              <p
                className="text-[#5C5C5C]"
                style={{ fontSize: "18px", lineHeight: "30px" }}
              >
                • 12 consultórios <br />
                • 17 leitos (7 suítes com vista) <br />
                • Sala de emergência <br />• Área arborizada
              </p>
            </div>

            <div>
              <h3
                className="mb-2 font-bold text-[#007D77]"
                style={{ fontSize: "20px", lineHeight: "26px" }}
              >
                Composição da Equipe
              </h3>
              <p
                className="text-[#5C5C5C]"
                style={{ fontSize: "18px", lineHeight: "30px" }}
              >
                • Nutricionistas <br />
                • Psicologos <br />• Massoterapeutas
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
