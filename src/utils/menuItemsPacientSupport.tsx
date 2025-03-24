import ProgramaIDColorretal from "@/components/suporte-ao-paciente/programa-id-colorretal-kras-nras-braf";
import ProgramaIDMama from "@/components/suporte-ao-paciente/programa-id-mama-pik3ca-akt1-pten";
import ProgramaIDPulmao from "@/components/suporte-ao-paciente/programa-id-pulmao-egfr-alk-ros1";

interface MenuItem {
  id: number;
  name: string;
  slug: string;
  component: JSX.Element;
}

export const pacientSupportMenuItems: MenuItem[] = [
  {
    id: 1,
    name: "Programa ID Mama (PIK3CA, AKT1, PTEN)",
    slug: "programa-id-mama-pik3ca-akt1-pten",
    component: <ProgramaIDMama />,
  },
  {
    id: 2,
    name: "Programa ID Pulmão (EGFR, ALK, ROS1)",
    slug: "programa-id-pulmao-egfr-alk-ros1",
    component: <ProgramaIDPulmao />,
  },
  {
    id: 3,
    name: "Programa ID Colorretal (KRAS, NRAS, BRAF)",
    slug: "programa-id-colorretal-kras-nras-braf",
    component: <ProgramaIDColorretal />,
  },
];
