import { Link } from "react-router";
import { Menu } from "./menu";

export function Brand() {
  return (
    <Link
      className="flex items-center font-medium text-link text-sm transition-all duration-300"
      to={"/"}
    >
      your_brand.domain
    </Link>
  );
}

export function Header() {
  return (
    <header className="flex h-24 tablet:h-28 items-center justify-between">
      <Brand />
      <Menu />
    </header>
  );
}
