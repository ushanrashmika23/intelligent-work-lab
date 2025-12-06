export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  specialization: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface ResearchTheme {
  id: string;
  title: string;
  description: string;
  icon: string; // Icon name reference
  imageUrl: string;
}

export interface Publication {
  id: string;
  title: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
  abstract?: string;
  link?: string;
}