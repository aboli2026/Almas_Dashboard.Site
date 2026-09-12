export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatarSeed: string;
  comment: string;
  rating: number;
  highlightTag?: string;
}

export interface InstallStep {
  stepNumber: number;
  title: string;
  description: string;
  codeSnippet?: string;
  note?: string;
  badge: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface ThemeVariant {
  id: string;
  name: string;
  subtitle: string;
  imageSrc: string;
  accentColor: string;
  tag: string;
}
