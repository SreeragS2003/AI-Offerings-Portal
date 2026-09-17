export interface Offering {
  id: number;
  name: string;
  category: string;
  tagline: string;
  description: string;
  url: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
}

export type AppTab = "offerings" | "team";
