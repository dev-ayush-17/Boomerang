"use client";

import * as React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Item } from "@/types/domain";
import { itemRepository } from "@/lib/mock/items";
import { LuggageTag } from "@/components/ui/luggage-tag";
import { Stamp } from "@/components/ui/stamp";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ItemDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const [item, setItem] = React.useState<Item | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [claimAnswer, setClaimAnswer] = React.useState("");
  const [claimSubmitted, setClaimSubmitted] = React.useState(false);

  // Mock student identity for testing "own-item" variant per review
  const currentUserId = "user-101";
  const isOwnItem = item?.finderId === currentUserId;

  React.useEffect(() => {
    if (!id) return;
    setLoading(true);
    itemRepository.getItemById(id).then((data) => {
      setItem(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-12 text-center font-mono uppercase text-sm">
        Loading item details...
      </div>
    );
  }

  if (!item) {
    return (
      <div className="max-w-md mx-auto p-8 my-12 border-3 border-[var(--ink)] bg-[var(--white)] shadow-[var(--shadow-1)] text-center space-y-4">
        <h1 className="text-2xl font-black uppercase">Item Not Found</h1>
        <p className="text-sm font-mono text-[var(--ink)]/75">
          The requested item reference could not be located.
        </p>
        <Link href="/items">
          <Button variant="primary">Back to Feed</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <div>
        <Link
          href="/items"
          className="text-xs font-mono font-bold uppercase underline hover:no-underline"
        >
          ← Back to All Listings
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Hero Object: Luggage Tag */}
        <LuggageTag tagNumber={item.id.slice(0, 8)} category={item.category}>
          {item.imageUrl && (
            <div className="w-full aspect-[4/3] border-2 border-[var(--ink)] overflow-hidden mb-4">
              <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
            </div>
          )}

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant={item.kind === "found" ? "found" : "lost"}>
                {item.kind}
              </Badge>
              <Stamp status={item.status} className="text-xs py-0.5 px-1.5" />
            </div>
            <h1 className="text-2xl font-black uppercase text-[var(--ink)]">
              {item.title}
            </h1>
            <p className="text-sm font-mono text-[var(--ink)]/80">
              {item.description}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t-2 border-[var(--ink)] text-xs font-mono space-y-1">
            <p>
              <span className="font-bold">Location:</span> {item.foundAtLocation}
            </p>
            {item.deskLocation && (
              <p>
                <span className="font-bold">Custodian Desk:</span> {item.deskLocation}
              </p>
            )}
            <p>
              <span className="font-bold">Date:</span> {item.occurredOn}
            </p>
          </div>
        </LuggageTag>

        {/* Claim Flow Container */}
        <div className="border-3 border-[var(--ink)] bg-[var(--white)] p-6 shadow-[var(--shadow-2)] space-y-6">
          <header className="border-b-2 border-[var(--ink)] pb-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--ink)]/70">
              CUSTODIAN VERIFICATION
            </span>
            <h2 className="text-xl font-black uppercase text-[var(--ink)] mt-1">
              {isOwnItem ? "Your Listed Item" : "Claim this Item"}
            </h2>
          </header>

          {isOwnItem ? (
            <div className="border-2 border-[var(--ink)] bg-[var(--paper)] p-4 space-y-2">
              <span className="font-bold text-xs font-mono uppercase bg-[var(--ink)] text-white px-2 py-0.5 inline-block">
                Author View
              </span>
              <p className="text-xs font-mono text-[var(--ink)]/80">
                You posted this listing. You cannot submit a claim on an item you found. Monitor incoming claims through the Custodian Desk.
              </p>
            </div>
          ) : claimSubmitted ? (
            <div className="border-2 border-[var(--found)] bg-[var(--found)]/10 p-4 space-y-2">
              <h3 className="font-bold text-sm uppercase">Claim Submitted!</h3>
              <p className="text-xs font-mono text-[var(--ink)]/80">
                Your verification answer is pending review by the custodian at{" "}
                <span className="font-bold">{item.deskLocation || "Campus Desk"}</span>.
                Bring your student ID for pickup.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setClaimSubmitted(true);
              }}
              className="space-y-4"
            >
              <p className="text-xs font-mono text-[var(--ink)]/80">
                To prevent false claims, describe identifying marks, contents, or details only the owner knows.
              </p>

              <Input
                label="Verification Detail"
                placeholder="e.g. sticker on cover, brand inside pocket..."
                value={claimAnswer}
                onChange={(e) => setClaimAnswer(e.target.value)}
                required
              />

              <Button type="submit" variant="primary" className="w-full">
                Submit Claim to Custodian Desk
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
