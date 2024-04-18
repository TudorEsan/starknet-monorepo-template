import PulsarLogoWhite from "../../public/logos/logo-white-text.svg";
import PulsarLogoBlack from "../../public/logos/logo-black-text.svg";
import { ThemeImage } from "./theme-image";

interface Props {
  width?: number;
  height?: number;
  className?: string;
}

export const PulsarLogo = ({ width = 132, height = 34, className }: Props) => {
  return (
    <>
      <ThemeImage
        lightSrc={PulsarLogoBlack}
        darkSrc={PulsarLogoWhite}
        width={width}
        height={height}
        className={className}
        alt="Pulsar.Money"
      />
    </>
  );
};
