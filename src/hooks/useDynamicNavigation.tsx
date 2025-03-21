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
  activeContent: React.ReactNode;
  title: string;
  handleMenuItemClick: (id: number) => void;
  activeItem: number;
}

export const useDynamicNavigation = (
  menuItems: DynamicNavigationOptions[],
  basePath: string,
): UseDynamicNavigationReturn => {
  const router = useRouter();
  const { slug } = router.query;

  const [activeItem, setActiveItem] = useState<number>(menuItems[0]?.id || 1);

  useEffect(() => {
    if (slug) {
      const matchedItem = menuItems.find((menuItem) => menuItem.slug === slug);
      if (matchedItem) {
        setActiveItem(matchedItem.id);
      }
    }
  }, [slug, menuItems]);

  const activeContent = useMemo(() => {
    const currentItem = menuItems.find(
      (menuItem) => menuItem.id === activeItem,
    );
    return currentItem ? currentItem.component : null;
  }, [activeItem, menuItems]);

  const title = useMemo(() => {
    const currentItem = menuItems.find(
      (menuItem) => menuItem.id === activeItem,
    );
    return currentItem ? currentItem.name : "Item não encontrado";
  }, [activeItem, menuItems]);

  const handleMenuItemClick = (id: number): void => {
    const selectedItem = menuItems.find((menuItem) => menuItem.id === id);
    if (selectedItem) {
      setActiveItem(id);
      router.push(`${basePath}/${selectedItem.slug}`, undefined, {
        shallow: true,
      });
    }
  };

  return {
    activeContent,
    title,
    handleMenuItemClick,
    activeItem,
  };
};
