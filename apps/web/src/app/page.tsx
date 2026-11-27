import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
      {/* Hero Header */}
      <section className="bg-[var(--white)] border-3 border-[var(--ink)] p-8 md:p-12 shadow-[var(--shadow-2)] space-y-6">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--ink)]/70">
          CAMPUS LOST &amp; FOUND PORTAL
        </span>
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-[var(--ink)]">
          Lost it? Found it? <br />
          <span className="bg-[var(--found)] px-2 py-0.5 border-2 border-[var(--ink)]">
            Boomerang
          </span>{" "}
          brings it back.
        </h1>
        <p className="max-w-xl text-base md:text-lg font-mono text-[var(--ink)]/80">
          Report found belongings, search campus listings, and safely claim items verified at the custodian desk.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Link href="/items">
            <Button size="lg" variant="primary">
              Browse All Listings
            </Button>
          </Link>
          <Link href="/post/found">
            <Button size="lg" variant="secondary">
              Post Found Item
            </Button>
          </Link>
          <Link href="/post/lost">
            <Button size="lg" variant="danger">
              Report Lost Item
            </Button>
          </Link>
        </div>
      </section>

      {/* Campus Guidelines Box */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border-2 border-[var(--ink)] bg-[var(--white)] p-6 shadow-[var(--shadow-1)] space-y-2">
          <h2 className="font-bold text-lg uppercase">1. Turn In &amp; Log</h2>
          <p className="text-sm font-mono text-[var(--ink)]/75">
            Drop found items at any campus custodian security desk or log them online with a verification detail.
          </p>
        </div>
        <div className="border-2 border-[var(--ink)] bg-[var(--white)] p-6 shadow-[var(--shadow-1)] space-y-2">
          <h2 className="font-bold text-lg uppercase">2. Prove Ownership</h2>
          <p className="text-sm font-mono text-[var(--ink)]/75">
            Answer the finder&apos;s secret question to confirm your claim before pickup.
          </p>
        </div>
        <div className="border-2 border-[var(--ink)] bg-[var(--white)] p-6 shadow-[var(--shadow-1)] space-y-2">
          <h2 className="font-bold text-lg uppercase">3. Custodian Handover</h2>
          <p className="text-sm font-mono text-[var(--ink)]/75">
            Collect your item safely at the designated campus desk with student ID verification.
          </p>
        </div>
      </section>
    </div>
  );
}
