// apps/frontend/components/ui/GlassCard.tsx
import { ReactNode } from 'react';
import clsx from 'clsx';

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <section className={clsx('glass-card p-4 md:p-5', className)}>
      {children}
    </section>
  );
}
