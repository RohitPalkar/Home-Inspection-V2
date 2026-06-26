import { Info } from "lucide-react";

interface HelpLinkProps {
  label: string;
  onClick: () => void;
}

export function HelpLink({ label, onClick }: HelpLinkProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
    >
      <Info className="w-4 h-4" />
      {label}
    </button>
  );
}
