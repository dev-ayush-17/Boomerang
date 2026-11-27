import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Stamp } from "@/components/ui/stamp";
import { LuggageTag } from "@/components/ui/luggage-tag";
import { ItemCard } from "@/components/ui/item-card";

export default function UIDevShowcase() {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-12">
      <header className="border-b-3 border-[var(--ink)] pb-4">
        <h1 className="text-4xl font-black uppercase tracking-tight">
          Boomerang UI Primitives Showcase
        </h1>
        <p className="font-mono text-sm text-[var(--ink)]/70 mt-1">
          Neo-Brutalist skeleton · Tactile skeuomorphic objects · All states
        </p>
      </header>

      {/* Buttons */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold uppercase border-l-4 border-[var(--ink)] pl-2">
          Buttons (Tactile press)
        </h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="primary">Primary Action</Button>
          <Button variant="secondary">Found Item</Button>
          <Button variant="danger">Report Lost</Button>
          <Button variant="outline">Secondary Option</Button>
          <Button variant="primary" isLoading>
            Submit
          </Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
      </section>

      {/* Inputs */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold uppercase border-l-4 border-[var(--ink)] pl-2">
          Inputs & States
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Normal Input" placeholder="Search keywords..." />
          <Input
            label="Input With Error"
            defaultValue="wrong-value"
            error="Please enter a valid college email address"
          />
        </div>
      </section>

      {/* Badges & Stamps */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold uppercase border-l-4 border-[var(--ink)] pl-2">
          Badges & Inked Status Stamps
        </h2>
        <div className="flex flex-wrap gap-3 items-center">
          <Badge variant="found">Found</Badge>
          <Badge variant="lost">Lost</Badge>
          <Badge variant="claim">Claim Requested</Badge>
          <Badge variant="desk">Campus Desk</Badge>
          <Badge variant="neutral">Library</Badge>
        </div>
        <div className="flex flex-wrap gap-6 items-center pt-2">
          <Stamp status="LISTED" />
          <Stamp status="CLAIM_PENDING" />
          <Stamp status="VERIFIED" />
          <Stamp status="HANDED_OVER" />
          <Stamp status="EXPIRED" />
          <Stamp status="REJECTED" />
        </div>
      </section>

      {/* Luggage Tag (Hero Object) */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold uppercase border-l-4 border-[var(--ink)] pl-2">
          Hero Object: Luggage Tag
        </h2>
        <div className="max-w-md">
          <LuggageTag tagNumber="4082" category="Electronics">
            <h3 className="text-lg font-black text-[var(--ink)]">
              Silver Over-Ear Headphones
            </h3>
            <p className="text-sm font-mono text-[var(--ink)]/80 mt-1">
              Found at: Student Union · Coffee Bar
            </p>
            <div className="mt-4 flex gap-2">
              <Button size="sm" variant="primary">
                Claim this Item
              </Button>
            </div>
          </LuggageTag>
        </div>
      </section>

      {/* Item Cards */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold uppercase border-l-4 border-[var(--ink)] pl-2">
          Item Card Grid
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ItemCard
            id="item-101"
            title="Navy Herschel Backpack"
            category="Bags"
            location="Science Library · 2nd Floor"
            occurredOn="Today, 11:20 AM"
            kind="found"
            status="LISTED"
            isDesk={true}
          />
          <ItemCard
            id="item-102"
            title="Tortoiseshell Eyeglasses"
            category="Accessories"
            location="Fine Arts · Room 3B"
            occurredOn="Yesterday"
            kind="lost"
            status="CLAIM_PENDING"
          />
          <ItemCard
            id="item-103"
            title="Brass Dorm Key & Lanyard"
            category="Keys"
            location="North Hall · Bike Rack"
            occurredOn="Nov 25"
            kind="found"
            status="HANDED_OVER"
            isDesk={true}
          />
        </div>
      </section>
    </div>
  );
}
