import Image from "next/image";

type ProductImageFrameProps = {
  src?: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
  priority?: boolean;
  variant?: "card" | "detail";
  size?: "default" | "compact";
};

export default function ProductImageFrame({
  src,
  alt,
  className = "",
  fallbackClassName = "bg-gradient-to-br from-brand-100 to-white",
  priority = false,
  variant = "card",
  size = "default",
}: ProductImageFrameProps) {
  if (variant === "detail") {
    return (
      <div className={`w-full overflow-hidden rounded-2xl bg-white ${className}`}>
        {src ? (
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={900}
            priority={priority}
            className="h-auto w-full rounded-2xl object-contain"
          />
        ) : (
          <div className={`aspect-[4/3] w-full rounded-2xl ${fallbackClassName}`} />
        )}
      </div>
    );
  }

  const isCompact = size === "compact";
  const aspectClass = isCompact ? "aspect-[5/4]" : "aspect-[4/3]";
  const radiusClass = isCompact ? "rounded-lg" : "rounded-2xl";
  const imagePadClass = isCompact ? "p-1.5" : "p-2";

  return (
    <div
      className={`relative ${aspectClass} w-full overflow-hidden ${radiusClass} bg-white ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={
            isCompact
              ? "(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
          className={`${radiusClass} object-contain object-center ${imagePadClass} transition-transform duration-200 group-hover:scale-[1.02]`}
        />
      ) : (
        <div className={`h-full w-full ${radiusClass} ${fallbackClassName}`} />
      )}
    </div>
  );
}
