"use client";
import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Slant } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";

type Menus = "main" | "other";
export type MenuItem = { label: string; href: string };

const submenuVariants = {
  hidden: { x: "-50px", opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: "50px", opacity: 0 },
};

interface MobileNavbarProps {
  mainMenuItems: MenuItem[];
}

export const MobileNavbar = ({ mainMenuItems }: MobileNavbarProps) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const { theme } = useTheme();

  const renderMenuContent = (menuName: Menus) => {
    switch (menuName) {
      case "main":
        return (
          <motion.div
            variants={submenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col items-center justify-center pt-12 space-y-4"
          >
            {mainMenuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="menu-item text-3xl text-center cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex space-x-2 lg:hidden">
        <Slant toggled={isOpen} toggle={setOpen} size={24} />
      </div>
      <Menu
        isOpen={isOpen}
        // width="100vw"
        styles={{
          bmMenuWrap: {
            backgroundColor: theme === "dark" ? "#030303" : "#fff",
            left: "0%",
          },
          bmBurgerButton: { display: "none" },
        }}
        onClose={() => setOpen(false)}
      >
        <AnimatePresence mode="wait">
          {/* hardcoding it to only one main menu for now */}
          {renderMenuContent("main")}
        </AnimatePresence>
      </Menu>
    </div>
  );
};
