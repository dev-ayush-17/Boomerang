"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PostFoundItemPage() {
  const [title, setTitle] = React.useState("");
  const [category, setCategory] = React.useState("Bags");
  const [location, setLocation] = React.useState("");
  const [photos, setPhotos] = React.useState<string[]>([]);
  const [hiddenQuestion, setHiddenQuestion] = React.useState("");
  const [hiddenAnswer, setHiddenAnswer] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const newPhotos = Array.from(files).slice(0, 3).map((f) => f.name);
    setPhotos(newPhotos);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="border-3 border-[var(--ink)] bg-[var(--white)] p-8 shadow-[var(--shadow-2)] space-y-6">
        <header className="border-b-2 border-[var(--ink)] pb-4 space-y-1">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--ink)]/70">
            STEPPER FORM (FR-2)
          </span>
          <h1 className="text-3xl font-black uppercase text-[var(--ink)]">
            Post Found Item
          </h1>
          <p className="text-xs font-mono text-[var(--ink)]/75">
            Log an item you turned in to security or found on campus.
          </p>
        </header>

        {submitted ? (
          <div className="border-2 border-[var(--found)] bg-[var(--found)]/10 p-6 space-y-3">
            <h2 className="font-bold text-base uppercase">Listing Published!</h2>
            <p className="text-xs font-mono text-[var(--ink)]/80">
              The item is now listed on the campus bulletin. Keep secret details safe.
            </p>
            <Link href="/items">
              <Button size="sm" variant="primary">
                View in Feed
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
              label="Item Title"
              placeholder="e.g. Navy Backpack, Wireless Earbuds..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
                Category
              </label>
              <select
                className="w-full min-h-[44px] px-3 py-2 bg-[var(--white)] text-[var(--ink)] border-2 border-[var(--ink)] font-mono text-sm shadow-[var(--shadow-1)] focus:outline-none"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Bags">Bags &amp; Backpacks</option>
                <option value="Electronics">Electronics &amp; Chargers</option>
                <option value="Keys">Keys &amp; IDs</option>
                <option value="Accessories">Accessories &amp; Glasses</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <Input
              label="Location Found"
              placeholder="e.g. Science Library, 2nd floor window..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />

            {/* Photo upload input per FR-2 (1-3 photos) */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
                Photos (1–3 photos required)
              </label>
              <div className="p-4 border-2 border-[var(--ink)] bg-[var(--white)] shadow-[var(--shadow-1)] space-y-2">
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  multiple
                  onChange={handlePhotoSelect}
                  className="font-mono text-xs w-full"
                />
                {photos.length > 0 && (
                  <p className="font-mono text-xs text-[var(--ink)]/80">
                    Selected ({photos.length}/3): {photos.join(", ")}
                  </p>
                )}
              </div>
            </div>

            <div className="p-4 border-2 border-dashed border-[var(--ink)] bg-[var(--paper)] space-y-4">
              <p className="text-xs font-mono font-bold uppercase text-[var(--ink)]">
                Secret Verification Detail (Never public)
              </p>
              <Input
                label="Verification Question"
                placeholder="e.g. What sticker is on the notebook inside?"
                value={hiddenQuestion}
                onChange={(e) => setHiddenQuestion(e.target.value)}
                required
              />
              <Input
                label="Expected Answer (Custodian reference)"
                placeholder="e.g. NASA sticker"
                value={hiddenAnswer}
                onChange={(e) => setHiddenAnswer(e.target.value)}
                required
              />
            </div>

            <Button type="submit" variant="secondary" className="w-full">
              Publish Found Item Listing
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
