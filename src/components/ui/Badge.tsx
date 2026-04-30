type BadgeVariant = "inprep" | "active" | "completed" | "planned";

const labels: Record<BadgeVariant, string> = {
  inprep: "In Preparation",
  active: "In Progress",
  completed: "Completed",
  planned: "Planned",
};

export default function Badge({ variant }: { variant: BadgeVariant }) {
  return <span className={`badge badge-${variant}`}>{labels[variant]}</span>;
}
