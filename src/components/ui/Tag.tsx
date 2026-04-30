export default function Tag({ label }: { label: string }) {
  return (
    <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-sm">
      {label}
    </span>
  );
}
