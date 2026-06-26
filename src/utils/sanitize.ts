const ENTITY_MAP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "/": "&#x2F;",
};

export function escapeHtml(value: string): string {
  return value.replace(/[&<>"'/]/g, (ch) => ENTITY_MAP[ch] ?? ch);
}

export function sanitizeInput(value: string): string {
  return value.trim().replace(/[\0<>"']/g, "");
}

export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength).trimEnd() + "...";
}
