import { Badge } from "@/components/ui/badge";
import { Label } from "@/types";

interface NoteBadgeProps {
  label: Label | null;
}

const LabelToClassName = {
  work: "bg-blue-100 text-blue-800",
  personal: "bg-green-100 text-green-800",
  university: "bg-yellow-100 text-yellow-800",
  other: "bg-gray-100 text-gray-800",
} as const satisfies Record<Label, string>;

export function NoteBadge({ label }: NoteBadgeProps) {
  const fixedLabel = label ?? "other";
  const className = LabelToClassName[fixedLabel];

  return <Badge className={className}>{fixedLabel}</Badge>;
}
