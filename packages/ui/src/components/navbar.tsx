import { ChildrenProps } from "@/types";
import { MenuItem, MobileNavbar } from "./mobile-navbar";

type MobileNavbarProps = {
  mobileMenuItems: MenuItem[];
} & ChildrenProps;

export function AppNavbar({ children, mobileMenuItems }: MobileNavbarProps) {
  return (
    <div className="fixed z-50 top-0 left-0 lg:left-52 right-0  h-16 bg-white dark:bg-black border-b flex items-center ">
      <div className="flex justify-between items-center  my-auto px-6 xl:px-12 w-full ">
        <MobileNavbar mainMenuItems={mobileMenuItems} />
        <div className="flex items-center gap-3">{children}</div>
      </div>
    </div>
  );
}
