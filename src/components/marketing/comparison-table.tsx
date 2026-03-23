import { Check, X } from "lucide-react";

import { Card } from "@/components/ui/card";

export function ComparisonTable({
  manualLabel,
  kedyLabel,
  rows,
}: {
  manualLabel: string;
  kedyLabel: string;
  rows: { label: string; manual: string; kedy: string }[];
}) {
  return (
    <Card className="overflow-hidden bg-white/95">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-black/6 text-left">
          <thead className="bg-black/[0.03]">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold text-foreground"> </th>
              <th className="px-6 py-4 text-sm font-semibold text-muted">{manualLabel}</th>
              <th className="px-6 py-4 text-sm font-semibold text-foreground">{kedyLabel}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/6">
            {rows.map((row) => (
              <tr key={row.label}>
                <td className="px-6 py-5 text-sm font-semibold text-foreground">{row.label}</td>
                <td className="px-6 py-5 align-top text-sm leading-7 text-muted">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-black/5 text-muted">
                      <X className="h-3.5 w-3.5" />
                    </span>
                    <span>{row.manual}</span>
                  </div>
                </td>
                <td className="px-6 py-5 align-top text-sm leading-7 text-foreground">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-orange/10 text-orange">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{row.kedy}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
