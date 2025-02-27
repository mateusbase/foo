import { InstitutionalOption } from "@/templates/InstitutionalScreen/data/institucionalOptions";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface UseInstitutionalRouterReturn {
  activeSlug: string;
  component: React.ReactNode;
  pushComponent: (newSlug: string) => void;
  options: InstitutionalOption[];
}

export const useInstitutionalRouter = (
  options: InstitutionalOption[],
): UseInstitutionalRouterReturn => {
  const router = useRouter();
  const [component, setComponent] = useState<React.ReactNode>(null);
  const { query } = useRouter();
  const slug = typeof query.slug === "string" ? query.slug : options[0].slug;

  const getNormalizedSlug = (): string => {
    const rawSlug = Array.isArray(slug) ? slug[0] : slug;
    return (rawSlug || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ç/g, "c")
      .toLowerCase();
  };
  const componentMap: Record<
    string,
    () => Promise<{ default: React.ComponentType }>
  > = {
    historia: () => import("@/components/institutional/historia"),
    valores: () => import("@/components/institutional/valores"),
    compromisso: () => import("@/components/institutional/compromisso"),
    convenios: () => import("@/components/institutional/convenios"),
    compliance: () => import("@/components/institutional/compliance"),
    "parceria-dana-farber": () =>
      import("@/components/institutional/parceria-dana-farber"),
    seguranca: () => import("@/components/institutional/seguranca"),
    "projetos-e-patrocinios": () =>
      import("@/components/institutional/projetos-e-patrocinios"),
    transparencia: () => import("@/components/institutional/transparencia"),
    investidores: () => import("@/components/institutional/investidores"),
    carreiras: () => import("@/components/institutional/carreiras"),
  };

  const loadComponent = async (): Promise<void> => {
    const normalizedSlug = getNormalizedSlug();
    const activeOption =
      options.find((opt) => opt.slug === normalizedSlug) || options[0];

    try {
      const load =
        (await componentMap[activeOption.slug]) ||
        (await componentMap[options[0].slug]);
      const Component = await load().then((m) => m.default);
      setComponent(<Component />);
    } catch (error) {
      setComponent(null);
    }
  };

  const pushComponent = (newSlug: string): void => {
    router.push(`/institucional/${newSlug}`, undefined, {
      shallow: true,
      scroll: false,
    });
  };

  useEffect(() => {
    loadComponent();
  }, [slug]);

  return {
    activeSlug: getNormalizedSlug(),
    component,
    pushComponent,
    options,
  };
};
