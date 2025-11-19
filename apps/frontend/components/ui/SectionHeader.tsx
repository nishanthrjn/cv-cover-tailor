// apps/frontend/components/ui/SectionHeader.tsx
type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  rightSlot?: React.ReactNode;
};

export function SectionHeader({ title, subtitle, rightSlot }: SectionHeaderProps) {
  return (
    <div className="mb-3 flex items-center justify-between gap-2">
      <div>
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
      {rightSlot && <div>{rightSlot}</div>}
    </div>
  );
}
