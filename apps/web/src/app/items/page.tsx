"use client";

import * as React from "react";
import { Item, ItemFilters } from "@/types/domain";
import { itemRepository } from "@/lib/mock/items";
import { ItemCard } from "@/components/ui/item-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function BrowseItemsPage() {
  const [items, setItems] = React.useState<Item[]>([]);
  const [filter, setFilter] = React.useState<ItemFilters["kind"]>("all");
  const [search, setSearch] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const fetchItems = React.useCallback(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    itemRepository
      .getItems({ kind: filter, search })
      .then((data) => {
        if (isMounted) {
          setItems(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err?.message || "Failed to load campus items. Please retry.");
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [filter, search]);

  React.useEffect(() => {
    const cleanup = fetchItems();
    return cleanup;
  }, [fetchItems]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Top Header */}
      <header className="border-b-3 border-[var(--ink)] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--ink)]/70">
            CAMPUS BULLETIN
          </span>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[var(--ink)]">
            Lost &amp; Found Feed
          </h1>
          <p className="text-sm font-mono text-[var(--ink)]/80 mt-1">
            Turned in at security desks or posted by fellow campus members.
          </p>
        </div>

        <div className="w-full md:w-72">
          <Input
            placeholder="Search keys, bag, room..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </header>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {(["all", "found", "lost", "desk"] as const).map((kind) => {
          const isActive = filter === kind;
          return (
            <Button
              key={kind}
              variant={isActive ? "primary" : "outline"}
              size="sm"
              onClick={() => setFilter(kind)}
            >
              {kind === "all"
                ? "All Items"
                : kind === "desk"
                ? "At Campus Desk"
                : `${kind.charAt(0).toUpperCase() + kind.slice(1)}`}
            </Button>
          );
        })}
      </div>

      {/* Grid / Content States */}
      {loading ? (
        <div
          role="status"
          aria-live="polite"
          className="p-12 border-2 border-dashed border-[var(--ink)] text-center font-mono text-sm uppercase"
        >
          Loading campus reports...
        </div>
      ) : error ? (
        <div
          role="alert"
          aria-live="assertive"
          className="p-8 border-3 border-[var(--stamp)] bg-[var(--lost)]/10 text-center space-y-4"
        >
          <h2 className="text-xl font-bold uppercase text-[var(--stamp)]">Error Loading Bulletin</h2>
          <p className="text-sm font-mono text-[var(--ink)]/80">{error}</p>
          <Button variant="danger" size="sm" onClick={() => fetchItems()}>
            Retry
          </Button>
        </div>
      ) : items.length === 0 ? (
        <div
          role="status"
          aria-live="polite"
          className="p-12 border-3 border-[var(--ink)] bg-[var(--white)] shadow-[var(--shadow-1)] text-center space-y-2"
        >
          <h2 className="text-xl font-bold uppercase">No items found</h2>
          <p className="text-sm font-mono text-[var(--ink)]/70">
            Try adjusting your search keywords or filter selection.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <ItemCard
              key={item.id}
              id={item.id}
              title={item.title}
              category={item.category}
              location={item.foundAtLocation}
              occurredOn={item.occurredOn}
              kind={item.kind}
              status={item.status}
              imageUrl={item.imageUrl}
              isDesk={!!item.deskLocation}
            />
          ))}
        </div>
      )}
    </div>
  );
}
