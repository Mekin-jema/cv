import { Globe, Briefcase, Award, MessageSquare } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: Globe },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: Award },
  { id: 'contact', label: 'Contact', icon: MessageSquare },
];