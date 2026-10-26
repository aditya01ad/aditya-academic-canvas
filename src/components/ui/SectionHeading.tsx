import type { ReactNode } from "react";
export default function SectionHeading({ eyebrow, title, description, action }: { eyebrow: string; title: string; description?: string; action?: ReactNode }) {
  return <div className="mb-9 flex flex-wrap items-end justify-between gap-6">
    <div className="max-w-2xl">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description && <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">{description}</p>}
    </div>
    {action}
  </div>;
}
