import type { ImageMetadata } from "astro";
import member1 from "@/assets/placeholders/team/member-1.jpg";
import member2 from "@/assets/placeholders/team/member-2.jpg";
import member3 from "@/assets/placeholders/team/member-3.jpg";
import member4 from "@/assets/placeholders/team/member-4.jpg";
import type { UiKey } from "@/i18n";

export interface TeamMember {
  photo: ImageMetadata;
  /** Names are translation keys too: Greek and Latin spellings differ. */
  name: UiKey;
  role: UiKey;
  bio: UiKey;
}

// TODO(content): real team members, photos and bios.
export const team: readonly TeamMember[] = [
  {
    photo: member1,
    name: "about.team.member1.name",
    role: "about.team.member1.role",
    bio: "about.team.member1.bio",
  },
  {
    photo: member2,
    name: "about.team.member2.name",
    role: "about.team.member2.role",
    bio: "about.team.member2.bio",
  },
  {
    photo: member3,
    name: "about.team.member3.name",
    role: "about.team.member3.role",
    bio: "about.team.member3.bio",
  },
  {
    photo: member4,
    name: "about.team.member4.name",
    role: "about.team.member4.role",
    bio: "about.team.member4.bio",
  },
];
