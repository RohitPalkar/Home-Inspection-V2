import { HelpCircle, LogOut, Menu, ShieldCheck } from "lucide-react";
import { useState, type ReactNode } from "react";

interface ShellProps {
  children: ReactNode;
  onHelp?: () => void;
  onExit?: () => void;
  showExit?: boolean;
  progress?: number | null;
}

export function Shell({ children, onHelp, onExit, showExit = true, progress = null }: ShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to main content
      </a>

      <header
        className="sticky top-0 z-30 bg-card border-b border-border"
        style={{ paddingTop: "var(--safe-area-top)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary grid place-items-center text-primary-foreground shrink-0">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            </div>
            <span className="font-bold text-base sm:text-lg text-foreground truncate">
              Logoipsum
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-2" aria-label="Survey navigation">
            <button
              onClick={onHelp}
              className="inline-flex items-center gap-2 px-3 min-h-[44px] rounded-lg text-primary hover:bg-muted text-sm font-medium"
              aria-label="Get help with the survey"
            >
              <HelpCircle className="w-4 h-4" aria-hidden="true" />
              Need help?
            </button>
            {showExit && (
              <button
                onClick={onExit}
                className="inline-flex items-center gap-2 px-4 min-h-[44px] rounded-lg border border-border text-foreground hover:bg-muted text-sm font-medium"
                aria-label="Exit the survey"
              >
                <LogOut className="w-4 h-4" aria-hidden="true" />
                Exit Survey
              </button>
            )}
          </nav>

          <div className="flex md:hidden items-center gap-1">
            <button
              onClick={onHelp}
              className="inline-flex items-center gap-1.5 px-2 min-h-[44px] rounded-lg text-primary hover:bg-muted text-sm font-medium"
              aria-label="Get help with the survey"
            >
              <HelpCircle className="w-4 h-4" aria-hidden="true" />
              Help
            </button>
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="w-11 h-11 rounded-lg border border-border grid place-items-center hover:bg-muted"
            >
              <Menu className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {progress !== null && (
          <div className="px-4 sm:px-6 lg:px-8 pb-2">
            <div className="mx-auto max-w-7xl">
              <div className="flex items-center justify-between text-xs font-medium text-muted-foreground mb-1">
                <span>{progress}% Complete</span>
              </div>
              <div
                className="h-2 rounded-full bg-muted overflow-hidden"
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`Survey progress: ${progress}%`}
              >
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {menuOpen && (
          <div
            className="md:hidden border-t border-border bg-card px-4 py-3 space-y-2"
            role="navigation"
            aria-label="Mobile survey navigation"
          >
            {showExit && (
              <button
                onClick={onExit}
                className="w-full inline-flex items-center justify-center gap-2 px-4 min-h-[44px] rounded-lg border border-border text-foreground hover:bg-muted text-sm font-medium"
                aria-label="Exit the survey"
              >
                <LogOut className="w-4 h-4" aria-hidden="true" />
                Exit Survey
              </button>
            )}
          </div>
        )}
      </header>

      <main
        id="main-content"
        className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-10"
        style={{ paddingBottom: "calc(1rem + var(--safe-area-bottom))" }}
      >
        {children}
      </main>
    </div>
  );
}
