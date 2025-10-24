// src/config/navigation.ts
import { Home, BookOpen, Heart, FileText, Mail } from 'lucide-react';

export interface NavItem {
  path: string;
  icon: React.ComponentType<any>;
  label: string;
  type: 'link' | 'button';
  action?: () => void;
}

export const navigationConfig: NavItem[] = [
  { path: '/', icon: Home, label: 'Home', type: 'link' },
  { path: '/portfolio', icon: BookOpen, label: 'Portfolio', type: 'link' },
  { path: '/passions', icon: Heart, label: 'Passions', type: 'link' },
  { path: '/cv', icon: FileText, label: 'CV', type: 'link' },
  // Note: Contact is a button, not a link
  { path: '#contact', icon: Mail, label: 'Contact', type: 'button' },
];

// Helper function to get navigation items for different contexts
export const getNavItems = (scrollToContact?: () => void) => {
  return navigationConfig.map(item => {
    if (item.type === 'button' && scrollToContact) {
      return { ...item, action: scrollToContact };
    }
    return item;
  });
};