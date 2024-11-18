import React from "react";
import { Link } from "@nextui-org/react";
import { Calendar } from "lucide-react";

interface MobileMenuProps {
  routes: { label: string; pathname: string }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ routes }) => {
  return (
    <div className="fixed left-0 top-[96px] z-40 h-screen w-full overflow-y-auto bg-white shadow-md">
      <ul className="flex flex-col gap-4 px-5 py-4">
        {routes.map((route) => (
          <li key={route.label}>
            <Link
              href={route.pathname}
              className="block py-2 text-lg uppercase"
            >
              {route.label}
            </Link>
          </li>
        ))}
        <li className="w-full">
          <div className="flex size-full flex-row items-center justify-center gap-2 bg-secondary p-6 font-semibold text-white sm:hidden">
            <Link
              className="flex w-full items-center justify-center text-sm text-white"
              href="/agende-sua-consulta"
            >
              <Calendar size={24} className="mr-2 text-white" />
              Agende uma consulta ou exame
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
