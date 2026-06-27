import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "navbar" | "footer" | "full";
  priority?: boolean;
};

const LOGO = {
  src: "/logo-nav.png",
  alt: "Madhav Chemicals — Clean Solutions. Better Life.",
  width: 1024,
  height: 682,
} as const;

export default function Logo({ variant = "full", priority = false }: LogoProps) {
  const className =
    variant === "navbar"
      ? "h-9 w-auto object-contain sm:h-10"
      : variant === "footer"
        ? "h-28 w-auto object-contain sm:h-32"
        : "h-32 w-auto object-contain sm:h-40";

  return (
    <Link href="/" className="inline-block leading-none">
      <Image
        src={LOGO.src}
        alt={LOGO.alt}
        width={LOGO.width}
        height={LOGO.height}
        unoptimized
        priority={priority || variant === "navbar"}
        className={className}
      />
    </Link>
  );
}
