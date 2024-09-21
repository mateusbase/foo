import { Clock, MapPin } from "lucide-react";

const MapCard = (): JSX.Element => {
  return (
    <div className="ml-8 flex h-[970px] w-[506px] flex-col rounded-[20px] bg-gray-100 p-10">
      <div className="mb-6">
        <div className="mb-2">
          <div className="flex items-center gap-2">
            <Clock size={34} className="text-primary" />
            <h3 className="text-[20px] font-bold leading-[26px] text-primary">
              Horário de funcionamento
            </h3>
          </div>
          <p className="ml-10 mt-2 text-[18px] leading-[30px] text-darkGray">
            Segunda a Sexta-feira - Das 8h às 18h
          </p>
        </div>
      </div>

      <div className="mb-6">
        <div className="mb-2">
          <div className="flex items-center gap-2">
            <MapPin size={34} className="text-primary" />
            <h3 className="text-[20px] font-bold leading-[26px] text-primary">
              Endereço
            </h3>
          </div>
          <p className="ml-10 mt-2 text-[18px] leading-[30px] text-darkGray">
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
          className="rounded-[20px] border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="mb-6">
        <h3 className="mb-2 text-[20px] font-bold leading-[26px] text-primary">
          Estrutura da Unidade
        </h3>
        <p className="text-[18px] leading-[30px] text-darkGray">
          • 12 consultórios <br />
          • 17 leitos (7 suítes com vista) <br />
          • Sala de emergência <br />• Área arborizada
        </p>
      </div>

      <div>
        <h3 className="mb-2 text-[20px] font-bold leading-[26px] text-primary">
          Composição da Equipe
        </h3>
        <p className="text-[18px] leading-[30px] text-darkGray">
          • Nutricionistas <br />
          • Psicólogos <br />• Massoterapeutas
        </p>
      </div>
    </div>
  );
};

export default MapCard;
