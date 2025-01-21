import ShareOptions from "@/components/ShareOptions";
import socialNetwork from "@/components/ShareOptions/socialNetwork";

export default function HowItWorks(): JSX.Element {
  return (
    <div className="w-full">
      <div>
        <p className="text-base font-medium text-darkGray lg:text-xl lg:font-normal">
          O tratamento contra o câncer vai além do combate à doença.
          Paralelamente à eliminação das células cancerosas, é preciso cuidar da
          mente, do espírito e do restante do corpo do paciente. Além disso,
          familiares e amigos próximos que estejam acompanhando as boas e más
          notícias das consultas, as sessões de quimioterapia e de radioterapia
          e seus possíveis efeitos adversos e dando suporte à recuperação das
          cirurgias necessitam de apoio, justamente para conseguirem seguir
          adiante nessa jornada.
        </p>
      </div>
      <p className="mt-8 text-base font-medium text-darkGray lg:text-xl lg:font-normal">
        É aí que entra a medicina integrativa na oncologia. Essa prática aborda
        de forma integral o cuidado ao paciente, por meio da proposta de
        inclusão de terapias complementares às tradicionais terapias utilizadas
        contra o câncer, como cirurgia, quimioterapia e radioterapia, entre
        outras. O propósito da oncologia integrativa é otimizar a qualidade de
        vida, atenuando os efeitos físicos e emocionais que podem envolver esse
        período da vida do paciente e das pessoas ao seu redor.
      </p>
      <p className="mt-8 text-base font-medium text-darkGray lg:text-xl lg:font-normal">
        Todas as possibilidades de terapias complementares são consideradas na
        medicina integrativa, incluindo aquelas colocadas em prática por
        profissionais que não sejam médicos.Aqui, a equipe multidisciplinar de
        que tanto se fala quando o assunto é tratamento oncológico ganha uma
        nova dimensão, com a integração de educadores físicos, terapeutas
        holísticos, especialistas em corpo humano e mesmo de artistas.
      </p>
      <div className="mt-20">
        <h2 className="text-2xl text-primary md:text-3xl lg:text-[40px]">
          Importância da medicina integrativa durante o tratamento de câncer
        </h2>
        <p className="mt-8 text-base font-medium text-darkGray lg:text-xl lg:font-normal">
          O tratamento contra o câncer vai além do combate à doença.
          Paralelamente à eliminação das células cancerosas, é preciso cuidar da
          mente, do espírito e do restante do corpo do paciente. Além disso,
          familiares e amigos próximos que estejam acompanhando as boas e más
          notícias das consultas, as sessões de quimioterapia e de radioterapia
          e seus possíveis efeitos adversos e dando suporte à recuperação das
          cirurgias necessitam de apoio, justamente para conseguirem seguir
          adiante nessa jornada.
        </p>
        <p className="mt-8 text-base font-medium text-darkGray lg:text-xl lg:font-normal">
          É aí que entra a medicina integrativa na oncologia. Essa prática
          aborda de forma integral o cuidado ao paciente, por meio da proposta
          de inclusão de terapias complementares às tradicionais terapias
          utilizadas contra o câncer, como cirurgia, quimioterapia e
          radioterapia, entre outras. O propósito da oncologia integrativa é
          otimizar a qualidade de vida, atenuando os efeitos físicos e
          emocionais que podem envolver esse período da vida do paciente e das
          pessoas ao seu redor.
          <br />
          <br />
          Todas as possibilidades de terapias complementares são consideradas na
          medicina integrativa, incluindo aquelas colocadas em prática por
          profissionais que não sejam médicos. Aqui, a equipe multidisciplinar
          de que tanto se fala quando o assunto é tratamento oncológico ganha
          uma nova dimensão, com a integração de educadores físicos, terapeutas
          holísticos, especialistas em corpo humano e mesmo de artistas.
        </p>
      </div>

      <div className="mt-10">
        <ShareOptions options={socialNetwork} />
      </div>
    </div>
  );
}
