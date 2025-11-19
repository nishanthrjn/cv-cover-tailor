// apps/frontend/components/ui/StatusPill.tsx
type StatusPillProps = {
  value: string;
};

export function StatusPill({ value }: StatusPillProps) {
  return (
    <span className="rounded-full bg-slate-900/60 px-2 py-0.5 text-[10px] uppercase tracking-wide text-slate-200">
      {value}
    </span>
  );
}
