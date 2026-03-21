import type { ReactNode } from 'react';
import { Header } from './Header';

interface LayoutProps {
  children: ReactNode;
  onHome: () => void;
  breadcrumb?: string;
  onAdmin?: () => void;
}

export function Layout({ children, onHome, breadcrumb, onAdmin }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header onHome={onHome} breadcrumb={breadcrumb} onAdmin={onAdmin} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>
    </div>
  );
}
