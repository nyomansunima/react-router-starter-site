import * as React from "react";
import { Link, useLocation } from "react-router";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

type NavMenuItemProps = {
  children: React.ReactNode;
  href: string;
};

export function NavMenuItem({ children, href }: NavMenuItemProps) {
  return (
    <li className="col-span-1 flex w-full">
      <Link
        className="hover:-translate-x-1 flex items-center justify-center text-foreground text-sm transition-all duration-300 hover:text-link"
        to={href}
      >
        {children}
      </Link>
    </li>
  );
}

export function Menu() {
  const [open, setOpen] = React.useState(false);
  const _location = useLocation();

  React.useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger
        aria-label="Menu Button"
        className="group relative flex h-10 w-10 cursor-pointer items-center justify-center"
      >
        <span className="-translate-x-1 -rotate-6 group-hover:-rotate-12 group-hover:-translate-x-2 absolute flex h-10 w-10 items-center justify-center rounded-2xl border-2 border-border border-dashed bg-surface text-sm transition-all duration-300 group-hover:border-link" />
        <span className="absolute flex h-10 w-10 translate-x-1 rotate-6 items-center justify-center rounded-2xl border-2 border-border border-dashed bg-surface text-sm transition-all duration-300 group-hover:translate-x-2 group-hover:rotate-12 group-hover:border-link" />
        <span className="absolute flex h-10 w-10 items-center justify-center rounded-2xl border-2 border-border border-dashed bg-surface text-sm transition-all duration-300 group-hover:translate-y-2 group-hover:border-link">
          <i className="fi fi-br-flame text-xs" />
        </span>
      </PopoverTrigger>
      <PopoverContent>
        <ul className="grid w-full grid-cols-2 gap-x-4 gap-y-4">
          <NavMenuItem href="/works">Works</NavMenuItem>
          <NavMenuItem href="/collabs">Collabs</NavMenuItem>
          <NavMenuItem href="/crafts">Crafts</NavMenuItem>
          <NavMenuItem href="/stories">Stories</NavMenuItem>
          <NavMenuItem href="/journeys">Journeys</NavMenuItem>
          <NavMenuItem href="/resources">Resources</NavMenuItem>
          <NavMenuItem href="/about">About</NavMenuItem>
          <NavMenuItem href="/contact">Contact</NavMenuItem>
          <NavMenuItem href="/support">Support</NavMenuItem>
        </ul>
      </PopoverContent>
    </Popover>
  );
}
