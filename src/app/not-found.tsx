import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <div className="inline-flex rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange">
          404
        </div>
        <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-foreground">Page not found</h1>
        <p className="mt-4 text-base leading-7 text-muted">The page you are looking for could not be found.</p>
        <div className="mt-8">
          <Button asChild>
            <Link href="/tr">Back to Kedy</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
