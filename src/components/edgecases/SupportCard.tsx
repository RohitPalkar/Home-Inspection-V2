import { Phone, Mail } from "lucide-react";

export function SupportCard() {
  return (
    <div className="rounded-2xl bg-card border border-border shadow-card p-6">
      <h3 className="font-semibold text-foreground text-sm mb-4">Need Help?</h3>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent grid place-items-center shrink-0">
            <Phone className="w-4 h-4 text-primary" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Phone</div>
            <div className="text-sm font-semibold text-foreground">1-800-531-8722</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent grid place-items-center shrink-0">
            <Mail className="w-4 h-4 text-primary" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Email</div>
            <div className="text-sm font-semibold text-foreground">support@usaa.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}
