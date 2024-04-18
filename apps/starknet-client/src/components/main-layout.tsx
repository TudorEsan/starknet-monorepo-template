"use client";
import React from "react";
import { ChildrenProps } from "@pulsarmoney/ui/types/component.types";
import { AppNavbar } from "@pulsarmoney/ui/components/navbar";
import { ThemeToggle } from "@pulsarmoney/ui/components/theme-toggle";
import { StaticDrawer } from "@pulsarmoney/ui/components/static-drawer";
import ConnectWallet from "./wallet/connect";

import { HomeIcon as HomeIconSolid } from "@heroicons/react/solid";
import { HomeIcon } from "@heroicons/react/outline";

const drawerLinks = [
  {
    name: "Home",
    link: "/",
    icon: HomeIcon,
    iconSolid: HomeIconSolid,
  },
];

export const MainLayout = ({ children }: ChildrenProps) => {
  return (
    <div>
      <StaticDrawer links={drawerLinks} />
      <AppNavbar
        mobileMenuItems={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ]}
      >
        <div className="flex items-center gap-3 justify-end">
          <ThemeToggle />
          <ConnectWallet />
        </div>
      </AppNavbar>
      {children}
    </div>
  );
};
