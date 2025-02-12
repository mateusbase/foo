import BaseButton from "@/components/Button";
import Image from "next/image";

const ContactBanner = (): JSX.Element => {
  return (
    <div className="full-bleed mt-4">
      <Image
        src="/assets/images/ocMulher/oc_mulher_banner_2.png"
        alt="OC Mulher"
        layout="responsive"
        width={1920}
        height={1080}
      />

      <div className="mb-5 flex flex-col gap-12 bg-custom-gradient-light px-10 pb-40 pt-12 font-lato-regular text-white md:py-14 md:pl-7 md:pr-20">
        <h1 className="text-center text-4xl">
          Ficou interessada em saber mais sobre o OC Mulher?
        </h1>
        <p className="text-center text-xl">
          Entre em contato para tirar dúvidas e entender como médicos e
          pacientes acessam o programa com nossos especialistas na prevenção e
          tratamento de tumores femininos.
        </p>
        <BaseButton className="border border-white bg-transparent text-white">
          <span className="text-lg">Conversar pelo WhatsApp</span>
        </BaseButton>
      </div>
    </div>
  );
};
export default ContactBanner;
