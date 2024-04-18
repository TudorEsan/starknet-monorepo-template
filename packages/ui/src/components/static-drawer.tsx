"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "../lib/utils";

import { PulsarLogo } from "./logos";

type DrawerLink = {
  name: string;
  link: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  iconSolid: React.FC<React.SVGProps<SVGSVGElement>>;
};

interface DrawerProps {
  links: DrawerLink[];
}

export const StaticDrawer = ({ links }: DrawerProps) => {
  const pathname = usePathname();
  const isActive = (link: string) => {
    if (link === "/") {
      return pathname === link;
    }
    return pathname.startsWith(link);
  };
  return (
    <div
      className={cn("hidden w-52 h-screen fixed border-r pt-4 pl-2 lg:block")}
    >
      <Link href={"/"}>
        <PulsarLogo className="mx-auto mt-4" height={31} width={160} />
      </Link>
      {/* Navigation links or content here */}
      <div className="flex flex-col justify-between h-full pb-16">
        <div className="mt-12">
          {links.map((link) => {
            const Icon = isActive(link.link) ? link.iconSolid : link.icon;
            return (
              <Link href={link.link} key={`${link.link}drawer`}>
                <div
                  className={cn(
                    "flex items-center gap-2 mb-4 px-4 py-2 rounded-md w-48",
                    isActive(link.link) && "bg-sky-500/10",
                  )}
                  key={`link-${link.link}`}
                >
                  <Icon
                    className={cn(
                      "w-6 h-6 ",
                      isActive(link.link) && "text-sky-500",
                    )}
                  />
                  <p
                    className={cn(
                      "ml-2 text-sm",
                      isActive(link.link) && "text-sky-500",
                    )}
                  >
                    {link.name}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
