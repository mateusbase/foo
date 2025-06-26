import React from "react";
import { Calendar } from "lucide-react";
import Link from "next/link";

interface MobileMenuProps {
  routes: { label: string; pathname: string }[];
  onLinkClick: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ routes, onLinkClick }) => {
  return (
    <div className="fixed left-0 top-[96px] z-40 h-screen w-full overflow-y-auto bg-white shadow-md">
      <ul className="flex flex-col gap-4 px-5 py-4">
        {routes.map((route) => (
          <li key={route.label}>
            <Link
              href={route.pathname}
              onClick={onLinkClick}
              className="block py-2 text-lg uppercase text-primary"
            >
              {route.label}
            </Link>
          </li>
        ))}

        <li className="w-full">
          <Link
            className="flex size-full w-full flex-row items-center justify-center gap-2 bg-secondary p-6 text-sm font-semibold text-white sm:hidden"
            href="/agende-sua-consulta"
            onClick={onLinkClick}
          >
            <Calendar size={24} className="mr-2 text-white" />
            Agende uma consulta ou exame
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
