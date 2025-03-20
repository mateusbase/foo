import { useRouter } from "next/router";
import { useEffect, useState, useMemo } from "react";

interface DynamicOption {
  slug: string;
  title: string;
  subtitle?: string;
  componentPath: string;
}

interface UseDynamicRouterReturn {
  activeSlug: string;
  component: React.ReactNode;
  pushComponent: (newSlug: string) => void;
  options: DynamicOption[];
  title: string;
  subtitle: string;
}

export const useDynamicRouter = (
  options: DynamicOption[],
  basePath: string,
): UseDynamicRouterReturn => {
  const router = useRouter();
  const { query, isReady } = router;

  const [currentSlug, setCurrentSlug] = useState<string>(
    options[0]?.slug || "",
  );

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

  const activeSlug = currentSlug;
  const activeOption = useMemo(
    () => options.find((opt) => opt.slug === activeSlug) || options[0],
    [activeSlug, options],
  );

  const [component, setComponent] = useState<React.ReactNode>(null);

  useEffect(() => {
    if (!isReady || !activeSlug) return;

    const loadComponent = async (): Promise<void> => {
      try {
        const module = await import(
          `@/components/${activeOption.componentPath}`
        );
        setComponent(<module.default />);
      } catch (error) {
        console.error("Erro ao carregar o componente:", error);
        setComponent(<div className="p-4">Erro ao carregar conteúdo.</div>);
      }
    };

    loadComponent();
  }, [activeSlug, isReady, activeOption]);

  const pushComponent = (newSlug: string): void => {
    setCurrentSlug(newSlug);
    router.push(`/${basePath}/${newSlug}`, undefined, {
      shallow: true,
      scroll: false,
    });
  };

  return {
    activeSlug,
    component,
    pushComponent,
    title: activeOption.title || "Página",
    subtitle: activeOption.subtitle || "",
    options,
  };
};
