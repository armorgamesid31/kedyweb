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
    <>
      <div className="grid gap-4 md:hidden">
        {rows.map((row) => (
          <Card key={row.label} className="bg-white/95 p-5">
            <div className="text-base font-semibold text-foreground">{row.label}</div>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl bg-black/[0.03] p-4">
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted">{manualLabel}</div>
                <div className="flex items-start gap-3 text-sm leading-7 text-muted">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black/5 text-muted">
                    <X className="h-3.5 w-3.5" />
                  </span>
                  <span>{row.manual}</span>
                </div>
              </div>

              <div className="rounded-2xl bg-orange/6 p-4">
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-orange">{kedyLabel}</div>
                <div className="flex items-start gap-3 text-sm leading-7 text-foreground">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span>{row.kedy}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="hidden overflow-hidden bg-white/95 md:block">
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
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black/5 text-muted">
                      <X className="h-3.5 w-3.5" />
                    </span>
                    <span>{row.manual}</span>
                  </div>
                </td>
                <td className="px-6 py-5 align-top text-sm leading-7 text-foreground">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{row.kedy}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </>
  );
}
