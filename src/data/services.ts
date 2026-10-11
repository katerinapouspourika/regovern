import type { IconName } from "@/components/Icon.astro";
import type { UiKey } from "@/i18n";

export interface Service {
  /** Anchor on the services page, such as /services/#internal-audit. */
  id: string;
  icon: IconName;
  title: UiKey;
  /** One sentence, for cards. */
  summary: UiKey;
  /** A paragraph, for the service's own section. */
  description: UiKey;
  /** What the service includes, as a short list. */
  points: readonly UiKey[];
}

// TODO(content): real services list.
export const services: readonly Service[] = [
  {
    id: "internal-audit",
    icon: "clipboard-check",
    title: "services.internalAudit.title",
    summary: "services.internalAudit.summary",
    description: "services.internalAudit.description",
    points: [
      "services.internalAudit.point1",
      "services.internalAudit.point2",
      "services.internalAudit.point3",
    ],
  },
  {
    id: "risk-management",
    icon: "shield",
    title: "services.risk.title",
    summary: "services.risk.summary",
    description: "services.risk.description",
    points: [
      "services.risk.point1",
      "services.risk.point2",
      "services.risk.point3",
    ],
  },
  {
    id: "regulatory-compliance",
    icon: "scale",
    title: "services.compliance.title",
    summary: "services.compliance.summary",
    description: "services.compliance.description",
    points: [
      "services.compliance.point1",
      "services.compliance.point2",
      "services.compliance.point3",
    ],
  },
  {
    id: "governance-advisory",
    icon: "landmark",
    title: "services.governance.title",
    summary: "services.governance.summary",
    description: "services.governance.description",
    points: [
      "services.governance.point1",
      "services.governance.point2",
      "services.governance.point3",
    ],
  },
];
