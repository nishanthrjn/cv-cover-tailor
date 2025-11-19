// apps/frontend/components/ui/Buttons.tsx
import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
};

export function PrimaryButton({ children, className, ...rest }: BaseButtonProps) {
  return (
    <button
      {...rest}
      className={clsx('primary-btn text-xs', className)}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({ children, className, ...rest }: BaseButtonProps) {
  return (
    <button
      {...rest}
      className={clsx('secondary-btn text-[11px]', className)}
    >
      {children}
    </button>
  );
}
