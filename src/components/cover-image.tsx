import Image from "next/image";

type CoverImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  overlayClassName?: string;
};

export function CoverImage({
  src,
  alt,
  priority = false,
  className,
  overlayClassName
}: CoverImageProps) {
  const isPng = src.toLowerCase().endsWith(".png");

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        unoptimized={isPng}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {overlayClassName ? <div className={`absolute inset-0 ${overlayClassName}`} /> : null}
    </div>
  );
}
