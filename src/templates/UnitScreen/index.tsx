import {
  Activity,
  Clock,
  Heart,
  MapPin,
  MessageSquare,
  Phone,
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
              <h2
                className="text-left font-bold mt-32"
                style={{ fontSize: "42px", lineHeight: "50px", color: "#007D77" }}
              >
                Convênios atendidos nesta unidade
              </h2>

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
