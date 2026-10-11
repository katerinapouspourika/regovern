import type { IconName } from "@/components/Icon.astro";
import type { UiKey } from "@/i18n";

export interface Service {
  /** Anchor on the services page, such as /services/#internal-audit. */
  id: string;
  icon: IconName;
  title: UiKey;
  summary: UiKey;
}

// TODO(content): real services list.
export const services: readonly Service[] = [
  {
    id: "internal-audit",
    icon: "clipboard-check",
    title: "services.internalAudit.title",
    summary: "services.internalAudit.summary",
  },
  {
    id: "risk-management",
    icon: "shield",
    title: "services.risk.title",
    summary: "services.risk.summary",
  },
  {
    id: "regulatory-compliance",
    icon: "scale",
    title: "services.compliance.title",
    summary: "services.compliance.summary",
  },
  {
    id: "governance-advisory",
    icon: "landmark",
    title: "services.governance.title",
    summary: "services.governance.summary",
  },
];
