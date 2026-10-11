import type { UiKey } from "@/i18n";

export interface Stat {
  value: number;
  label: UiKey;
}

// TODO(content): real figures.
export const stats: readonly Stat[] = [
  { value: 15, label: "home.stats.years" },
  { value: 350, label: "home.stats.audits" },
  { value: 80, label: "home.stats.clients" },
];
