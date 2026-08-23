export type TabType = 'home' | 'about' | 'hobbies' | 'products' | 'contact';

export interface VibeToolItem {
  id: string;
  title: string;
  titleEn: string;
  category: string;
  tagline: string;
  description: string;
  tags: string[];
  image: string;
  badge?: string;
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
  insights?: string;
}

export interface MediaShelfItem {
  id: string;
  title: string;
  author: string;
  category: '科幻' | '人物传记' | '思维工具' | '哲学心理';
  tag: string;
  note: string;
  coverBadge?: string;
}

export interface HobbyItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  category: string;
  image: string;
  quote: string;
  details: string[];
}

