import BaseContainer from "@/components/Container";
import PageLayout from "@/components/PageLayout";
import MainOptionsActions from "@/components/MainOptionsActions";
import { options } from "@/utils/objectUtils";
import ShareOptions from "@/components/ShareOptions";
import socialNetwork from "@/components/ShareOptions/socialNetwork";
import NewsPreviewCard from "../NewScreen/components/NewsPreviewCard";
import { newsItems } from "../NewScreen/optionsMock";

export default function ClippingDetailsScreen(): JSX.Element {
  return (
    <>
      <PageLayout title="OC na mídia" mainOptions={false}>
        <div className="mb-10 mt-20 flex flex-col items-center justify-center px-4 md:px-0">
          <p className="text-xl text-darkGray">10 de outubro de 2025</p>

          <div className="max-w-7xl">
            <h1 className="my-4 text-center text-2xl font-light text-primary md:text-6xl">
              Oncoclínicas é destaque em premiação por prestação de serviços
              médicos
            </h1>
          </div>

          <p className="mt-6 text-left text-base leading-7 text-darkGray md:text-2xl">
            A Oncoclínicas foi reconhecida pelo seu trabalho de excelência na
            área da saúde, recebendo um importante prêmio de destaque na
            prestação de serviços médicos. A empresa continua a se destacar pelo
            seu compromisso com a inovação, qualidade no atendimento e o
            compromisso com os pacientes. Este reconhecimento reforça o papel da
            Oncoclínicas como referência nacional e internacional em tratamentos
            oncológicos. A premiação foi entregue durante uma cerimônia que
            contou com a presença de líderes da área da saúde e representantes
            do setor. A empresa reafirma sua missão de fornecer cuidado de alta
            qualidade, voltado para a humanização e excelência.
          </p>

          <img
            src="https://dummyimage.com/1536x581/"
            alt="Premiação Oncoclínicas"
            className="mt-8 w-full max-w-screen-2xl object-cover"
          />

          <div className="mt-6 space-y-6 text-left text-base leading-7 text-darkGray md:text-2xl">
            <p>
              A Oncoclínicas foi reconhecida pelo seu trabalho de excelência na
              área da saúde, recebendo um importante prêmio de destaque na
              prestação de serviços médicos. A empresa continua a se destacar
              pelo seu compromisso com a inovação, qualidade no atendimento e o
              compromisso com os pacientes. Este reconhecimento reforça o papel
              da Oncoclínicas como referência nacional e internacional em
              tratamentos oncológicos. A premiação foi entregue durante uma
              cerimônia que contou com a presença de líderes da área da saúde e
              representantes do setor. A empresa reafirma sua missão de fornecer
              cuidado de alta qualidade, voltado para a humanização e
              excelência.
            </p>

            <p>
              A Oncoclínicas foi reconhecida pelo seu trabalho de excelência na
              área da saúde, recebendo um importante prêmio de destaque na
              prestação de serviços médicos. A empresa continua a se destacar
              pelo seu compromisso com a inovação, qualidade no atendimento e o
              compromisso com os pacientes. Este reconhecimento reforça o papel
              da Oncoclínicas como referência nacional e internacional em
              tratamentos oncológicos. A premiação foi entregue durante uma
              cerimônia que contou com a presença de líderes da área da saúde e
              representantes do setor. A empresa reafirma sua missão de fornecer
              cuidado de alta qualidade, voltado para a humanização e
              excelência.
            </p>

            <p>
              A Oncoclínicas foi reconhecida pelo seu trabalho de excelência na
              área da saúde, recebendo um importante prêmio de destaque na
              prestação de serviços médicos. A empresa continua a se destacar
              pelo seu compromisso com a inovação, qualidade no atendimento e o
              compromisso com os pacientes. Este reconhecimento reforça o papel
              da Oncoclínicas como referência nacional e internacional em
              tratamentos oncológicos. A premiação foi entregue durante uma
              cerimônia que contou com a presença de líderes da área da saúde e
              representantes do setor. A empresa reafirma sua missão de fornecer
              cuidado de alta qualidade, voltado para a humanização e
              excelência.
            </p>

            <p>
              A Oncoclínicas foi reconhecida pelo seu trabalho de excelência na
              área da saúde, recebendo um importante prêmio de destaque na
              prestação de serviços médicos. A empresa continua a se destacar
              pelo seu compromisso com a inovação, qualidade no atendimento e o
              compromisso com os pacientes. Este reconhecimento reforça o papel
              da Oncoclínicas como referência nacional e internacional em
              tratamentos oncológicos. A premiação foi entregue durante uma
              cerimônia que contou com a presença de líderes da área da saúde e
              representantes do setor. A empresa reafirma sua missão de fornecer
              cuidado de alta qualidade, voltado para a humanização e
              excelência.
            </p>
          </div>
        </div>

        <div className="mb-10 flex lg:my-10">
          <ShareOptions options={socialNetwork} />
        </div>
      </PageLayout>

      <div className="hidden bg-gray-foreground py-20 lg:flex">
        <BaseContainer>
          <div>
            <p className="text-6xl font-light text-primary">
              Itens Relacionados
            </p>
          </div>
          <div className="mt-10 grid w-full grid-cols-4">
            {newsItems.map((news) => (
              <NewsPreviewCard
                key={news.id}
                title={news.title}
                date={news.date}
                description={news.description}
                imageUrl={news.image}
              />
            ))}
          </div>
        </BaseContainer>
      </div>

      <MainOptionsActions options={options} rounded="none" />
    </>
  );
}
