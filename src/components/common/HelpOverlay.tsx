import { X } from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

interface HelpOverlayProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  wide?: boolean;
}

export function HelpOverlay({ open, onClose, title, children, wide }: HelpOverlayProps) {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  if (isMobile) {
    return (
      <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label={title}>
        <div className="absolute inset-0 bg-black/50" onClick={onClose} />
        <div className="absolute inset-x-0 bottom-0 bg-card rounded-t-2xl shadow-elevated max-h-[85vh] flex flex-col">
          <div className="flex flex-col items-center pt-3 pb-2">
            <div className="w-12 h-1.5 rounded-full bg-border" />
          </div>
          <div className="px-5 pb-2 border-b border-border">
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          </div>
          <div className="overflow-y-auto px-5 py-4 flex-1 text-sm text-foreground/90 space-y-4">
            {children}
          </div>
          <div className="p-4 border-t border-border">
            <button
              ref={closeRef}
              onClick={onClose}
              className="w-full min-h-[44px] rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary-hover transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label={title}>
        <div className="absolute inset-0 bg-black/40" onClick={onClose} />
        <div
          className="absolute right-0 top-0 h-full bg-card shadow-elevated flex flex-col"
          style={{ width: wide ? 440 : 380 }}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <button
              ref={closeRef}
              aria-label="Close help panel"
              onClick={onClose}
              className="w-10 h-10 rounded-full hover:bg-muted grid place-items-center"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
          <div className="overflow-y-auto px-5 py-4 flex-1 text-sm text-foreground/90 space-y-4">
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-card rounded-xl shadow-elevated w-[480px] max-w-full max-h-[85vh] flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <button
            ref={closeRef}
            aria-label="Close help panel"
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-muted grid place-items-center"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
        <div className="overflow-y-auto px-6 py-5 flex-1 text-sm text-foreground/90 space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
}
