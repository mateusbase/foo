import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";

interface DynamicNavigationOptions {
  id: number;
  name: string;
  slug: string;
  component: React.ReactNode;
  subtitle?: string;
}

interface UseDynamicNavigationReturn {
  activeSlug: string;
  activeContent: React.ReactNode;
  pushComponent: (newSlug: string) => void;
  title: string;
  subtitle: string;
}

export const useDynamicNavigation = (
  menuItems: DynamicNavigationOptions[],
  basePath: string,
): UseDynamicNavigationReturn => {
  const router = useRouter();
  const { query, isReady } = router;
  const { slug } = query;

  const [activeSlug, setActiveSlug] = useState<string>(() => {
    if (isReady && slug) {
      return slug.toString();
    }
    return menuItems[0]?.slug || "";
  });

  useEffect(() => {
    if (isReady && slug) {
      setActiveSlug(slug.toString());
    }
  }, [slug, isReady]);

  const activeItem = useMemo(() => {
    return menuItems.find((item) => item.slug === activeSlug) || menuItems[0];
  }, [activeSlug, menuItems]);

  const pushComponent = (newSlug: string): void => {
    setActiveSlug(newSlug);
    router.push(`${basePath}/${newSlug}`, undefined, {
      shallow: true,
      scroll: false,
    });
  };

  return {
    activeSlug,
    activeContent: activeItem.component,
    pushComponent,
    title: activeItem.name,
    subtitle: activeItem.subtitle || "",
  };
};
