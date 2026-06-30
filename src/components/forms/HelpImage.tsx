interface HelpImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string[];
}

export function HelpImage({ src, alt, fallbackSrc }: HelpImageProps) {
  return (
    <img
      className="aspect-video rounded-lg object-cover w-full border border-border"
      src={src}
      alt={alt}
      onError={(e) => {
        const img = e.currentTarget;
        const fallbacks = fallbackSrc ?? [];
        const current = img.src;
        const idx = fallbacks.findIndex((f) => {
          try {
            return new URL(f).pathname === new URL(current).pathname;
          } catch {
            return current.endsWith(f);
          }
        });
        if (idx < fallbacks.length - 1) {
          img.src = fallbacks[idx + 1];
        }
      }}
    />
  );
}
