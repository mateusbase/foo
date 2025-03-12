import { InstitutionalOption } from "@/templates/InstitutionalScreen/data/institucionalOptions";
import { useRouter } from "next/router";
import { useEffect, useState, useMemo } from "react";

interface UseInstitutionalRouterReturn {
  activeSlug: string;
  component: React.ReactNode;
  pushComponent: (newSlug: string) => void;
  options: InstitutionalOption[];
  title: string;
  subtitle: string;
}

export const useInstitutionalRouter = (
  options: InstitutionalOption[],
): UseInstitutionalRouterReturn => {
  const router = useRouter();
  const { query, isReady } = router;

  const [currentSlug, setCurrentSlug] = useState<string>(
    isReady && query.slug ? query.slug.toString() : options[0]?.slug || "",
  );
  const [component, setComponent] = useState<React.ReactNode>(null);

  useEffect(() => {
    if (isReady && query.slug) {
      const normalizedSlug = query.slug
        .toString()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ç/g, "c")
        .toLowerCase();

      if (normalizedSlug !== currentSlug) {
        setCurrentSlug(normalizedSlug);
      }
    }
  }, [query.slug, isReady, currentSlug]);

  const activeSlug = currentSlug || "";

  const activeOption = useMemo(
    () => options.find((opt) => opt.slug === activeSlug) || options[0],
    [activeSlug, options],
  );

  useEffect(() => {
    if (!isReady || !activeSlug) return;

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
      "protecao-de-dados": () => import("@/components/institutional/seguranca"),
      "projetos-e-patrocinios": () =>
        import("@/components/institutional/projetos-e-patrocinios"),
      "relatorio-de-transparencia-salarial": () =>
        import("@/components/institutional/transparencia"),
      investidores: () => import("@/components/institutional/investidores"),
      carreiras: () => import("@/components/institutional/carreiras"),
    };

    const loadComponent = async (): Promise<void> => {
      try {
        const load = componentMap[activeSlug] || componentMap[options[0].slug];
        const Component = await load().then((m) => m.default);
        setComponent(<Component />);
      } catch (error) {
        setComponent(null);
      }
    };

    loadComponent();
  }, [activeSlug, isReady, options]);

  const pushComponent = (newSlug: string): void => {
    setCurrentSlug(newSlug);
    router.push(`/institucional/${newSlug}`, undefined, {
      shallow: true,
      scroll: false,
    });
  };

  return {
    activeSlug,
    component,
    pushComponent,
    title: activeOption.title || "Institucional",
    subtitle: activeOption.subtitle || "",
    options,
  };
};
