import { Clock, MapPin } from "lucide-react";

const MapCard = (): JSX.Element => {
  return (
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
            className="mt-2 text-[#5C5C5C]"
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
            className="mt-2 text-[#5C5C5C]"
            style={{ fontSize: "18px", lineHeight: "30px", marginLeft: "40px" }}
          >
            Avenida Brigadeiro Faria Lima, 4.300 - 6º e 10º Andar - Vila Olímpia
            São Paulo/SP
          </p>
        </div>
      </div>

      <div className="mb-6 max-w-full">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.7558529423423!2d-46.69341978502346!3d-23.569239884679595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce573e7920f963%3A0x183c9f1d5287695d!2sAv.%20Brigadeiro%20Faria%20Lima%2C%204300%20-%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004527-120%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1692616753152!5m2!1spt-BR!2sus"
          width="100%"
          height="250"
          style={{ border: 0, borderRadius: "20px" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
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
  );
};

export default MapCard;
