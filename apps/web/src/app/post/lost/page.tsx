"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ReportLostItemPage() {
  const [title, setTitle] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="border-3 border-[var(--ink)] bg-[var(--white)] p-8 shadow-[var(--shadow-2)] space-y-6">
        <header className="border-b-2 border-[var(--ink)] pb-4 space-y-1">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--ink)]/70">
            LOST REPORT (FR-3)
          </span>
          <h1 className="text-3xl font-black uppercase text-[var(--ink)]">
            Report Lost Item
          </h1>
          <p className="text-xs font-mono text-[var(--ink)]/75">
            File a missing item alert so custodians and finders can match it.
          </p>
        </header>

        {submitted ? (
          <div className="border-2 border-[var(--lost)] bg-[var(--lost)]/10 p-6 space-y-3">
            <h2 className="font-bold text-base uppercase">Report Filed!</h2>
            <p className="text-xs font-mono text-[var(--ink)]/80">
              Campus custodians will be notified if a matching item is turned in.
            </p>
            <Link href="/items">
              <Button size="sm" variant="primary">
                Return to Feed
              </Button>
            </Link>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-4"
          >
            <Input
              label="Item Name"
              placeholder="e.g. Stainless Hydro Flask, Blue Umbrella..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <Input
              label="Estimated Location Lost"
              placeholder="e.g. Student Union Dining Area..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
                Description &amp; Marks
              </label>
              <textarea
                rows={3}
                className="w-full px-3 py-2 bg-[var(--white)] text-[var(--ink)] border-2 border-[var(--ink)] font-mono text-sm shadow-[var(--shadow-1)] focus:outline-none"
                placeholder="Distinguishing features, colors, case details..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <Button type="submit" variant="danger" className="w-full">
              File Lost Report
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
