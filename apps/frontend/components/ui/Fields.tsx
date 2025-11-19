// apps/frontend/components/ui/Fields.tsx
import { TextareaHTMLAttributes, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import { ReactNode } from 'react';

type FieldWrapperProps = {
  label: string;
  helperText?: string;
  children: ReactNode;
};

export function FieldWrapper({ label, helperText, children }: FieldWrapperProps) {
  return (
    <div>
      <label className="block text-[11px] font-medium text-slate-200">
        {label}
      </label>
      {children}
      {helperText && (
        <p className="mt-0.5 text-[11px] text-red-300">{helperText}</p>
      )}
    </div>
  );
}

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export function TextInput({ className, ...rest }: TextInputProps) {
  return <input {...rest} className={clsx('mt-1 input-field', className)} />;
}

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string;
};

export function TextArea({ className, ...rest }: TextAreaProps) {
  return (
    <textarea
      {...rest}
      className={clsx('mt-1 textarea-field', className)}
    />
  );
}
