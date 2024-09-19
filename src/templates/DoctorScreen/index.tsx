import { useRouter } from "next/router";
import PageHeader from "@/components/PageHeader/page-header.component";
import Breadcrumb from "../UnitScreen/components/breadcrumb.component";

export default function DoctorScreen(): JSX.Element {
  const router = useRouter();

  const { medico } = router.query;

  return (
    <main>
      <PageHeader
        title={medico ? decodeURIComponent(medico as string) : "Nome do Médico"}
        address="Oncologia clínica"
        showContactSection={false}
      />

      <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col py-20">
        <Breadcrumb />

        <div className="mt-14">
          <img
            src="https://i2.wp.com/robertopestana.com.br/wp-content/uploads/2022/02/891351.png?w=750&quality=90&strip=all&ssl=1"
            alt="Imagem descritiva"
            className="h-[466px] w-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}
