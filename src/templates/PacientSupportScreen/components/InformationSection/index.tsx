import Link from "next/link";

interface InformationSectionProps {
  informationText: string;
  whatsappContact: string;
  emailContact: string;
}

const InformationSection = (
  currentItem: InformationSectionProps,
): JSX.Element => {
  const { informationText, whatsappContact, emailContact } = currentItem;
  return (
    <section className="mb-20">
      <p className="mt-9">{informationText}</p>
      <Link href={whatsappContact}>
        Whatsapp: <span className="underline">{whatsappContact}</span>
      </Link>
      <br />
      <Link href={emailContact}>
        Email: <span className="underline">{emailContact}</span>
      </Link>
    </section>
  );
};

export default InformationSection;
