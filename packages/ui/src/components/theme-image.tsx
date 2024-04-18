import Image from "next/image";
import type { ImageProps } from "next/image";

import { cn } from "../lib/utils";

interface Props extends Omit<ImageProps, "src"> {
  lightSrc: string;
  darkSrc: string;
}

export const ThemeImage: React.FC<Props> = ({
  lightSrc,
  darkSrc,
  className,
  ...props
}) => {
  return (
    <>
      <Image
        src={lightSrc}
        {...props}
        className={cn("dark:hidden", className)}
      />
      <Image
        src={darkSrc}
        {...props}
        className={cn("hidden dark:block", className)}
      />
    </>
  );
};
