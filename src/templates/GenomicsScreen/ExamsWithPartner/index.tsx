import Link from "next/link";
import { IoChevronForwardCircleOutline } from "react-icons/io5";

export default function ExamsWithPartner(): JSX.Element {
  const exams = [
    { label: "Signatera ®", value: "1-1" },
    { label: "Mammaprint ®", value: "1-2" },
    {
      label: "Oncotype DX ®",
      value: "1-3",
      linkTo: "genomica/oncotype-dx",
    },
  ];

  return (
    <div className="w-full flex-col gap-10">
      <h1 className="mb-4 font-lato-bold text-5xl text-primary">
        Exames com Parceiros
      </h1>

      <div className="mb-32 mt-14 flex w-full flex-col gap-6">
        {exams.map((exam) => (
          <Link
            href={exam.linkTo || "/"}
            key={exam.value}
            className="flex h-[89px] w-full max-w-[758px] cursor-pointer items-center justify-between rounded-2xl bg-primary px-7 py-8 text-white"
          >
            <h2 className="font-lato-bold text-2xl">{exam.label}</h2>
            <IoChevronForwardCircleOutline className="right-[38px] text-3xl text-white" />
          </Link>
        ))}
      </div>
    </div>
  );
}
