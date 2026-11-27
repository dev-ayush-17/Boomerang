import { describe, it, expect } from "vitest";
import { MockItemRepository } from "@/lib/mock/items";

describe("Mock Item Repository", () => {
  const repo = new MockItemRepository();

  it("returns all items when no filter applied", async () => {
    const items = await repo.getItems();
    expect(items.length).toBeGreaterThan(0);
  });

  it("filters correctly by found kind", async () => {
    const items = await repo.getItems({ kind: "found" });
    expect(items.every((it) => it.kind === "found")).toBe(true);
  });

  it("filters correctly by desk location", async () => {
    const items = await repo.getItems({ kind: "desk" });
    expect(items.every((it) => !!it.deskLocation)).toBe(true);
  });

  it("filters correctly by search query", async () => {
    const items = await repo.getItems({ search: "Backpack" });
    expect(items.some((it) => it.title.includes("Backpack"))).toBe(true);
  });
});
