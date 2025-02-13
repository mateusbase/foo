import { Link, NavbarItem } from "@heroui/react";
import { useRouter } from "next/router";
import { NavLinkProps } from "./types";

export default function NavLink({ route }: NavLinkProps): JSX.Element {
  const router = useRouter();
  const isSelected = router.pathname === route.pathname;

  return (
    <NavbarItem isActive={isSelected}>
      <Link
        color="success"
        href={route.pathname}
        size="md"
        className={`text-primary lg:text-sm xl:text-base ${isSelected && "font-bold"}`}
      >
        {route.label}
      </Link>
    </NavbarItem>
  );
}
