import { Item, ItemFilters } from "@/types/domain";
import { ItemRepository } from "@/lib/data/items";

const MOCK_ITEMS: Item[] = [
  {
    id: "qf-4082-herschel-backpack",
    kind: "found",
    title: "Navy Herschel Backpack",
    description: "Found tucked beside a window carrel near the quiet study wing. Contains spiral notebook.",
    category: "Bags",
    foundAtLocation: "Science Library · 2nd Floor",
    deskLocation: "Main Quad Security Desk",
    occurredOn: "Today, 11:20 AM",
    status: "LISTED",
    finderId: "user-101",
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    createdAt: new Date().toISOString(),
  },
  {
    id: "qf-4081-silver-headphones",
    kind: "found",
    title: "Silver Over-Ear Headphones",
    description: "Matte silver wireless headphones left next to a coffee cup.",
    category: "Electronics",
    foundAtLocation: "Student Union · Coffee Bar",
    occurredOn: "Today, 9:45 AM",
    status: "LISTED",
    finderId: "user-102",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    createdAt: new Date().toISOString(),
  },
  {
    id: "qf-4079-brass-keys",
    kind: "found",
    title: "Brass Dorm Key & Lanyard",
    description: "Single brass key with green woven lanyard.",
    category: "Keys",
    foundAtLocation: "North Hall · Bike Rack",
    deskLocation: "Main Quad Security Desk",
    occurredOn: "Yesterday",
    status: "LISTED",
    finderId: "user-103",
    createdAt: new Date().toISOString(),
  },
  {
    id: "qf-4076-tortoiseshell-glasses",
    kind: "lost",
    title: "Tortoiseshell Eyeglasses",
    description: "Lost prescription glasses in tan case during evening lecture.",
    category: "Accessories",
    foundAtLocation: "Fine Arts · Room 3B",
    occurredOn: "Yesterday",
    status: "CLAIM_PENDING",
    finderId: "user-104",
    createdAt: new Date().toISOString(),
  },
  {
    id: "qf-4074-insulated-bottle",
    kind: "found",
    title: "Sage Insulated Bottle",
    description: "Hydro flask with outdoor national park stickers.",
    category: "Bottles",
    foundAtLocation: "Founders Hall · Room 204",
    occurredOn: "Nov 25",
    status: "HANDED_OVER",
    finderId: "user-105",
    createdAt: new Date().toISOString(),
  },
];

export class MockItemRepository implements ItemRepository {
  async getItems(filters?: ItemFilters): Promise<Item[]> {
    return MOCK_ITEMS.filter((item) => {
      if (filters?.kind === "found" && item.kind !== "found") return false;
      if (filters?.kind === "lost" && item.kind !== "lost") return false;
      if (filters?.kind === "desk" && !item.deskLocation) return false;

      if (filters?.search) {
        const query = filters.search.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesLoc = item.foundAtLocation.toLowerCase().includes(query);
        const matchesCat = item.category.toLowerCase().includes(query);
        if (!matchesTitle && !matchesLoc && !matchesCat) return false;
      }

      return true;
    });
  }

  async getItemById(id: string): Promise<Item | null> {
    const item = MOCK_ITEMS.find((it) => it.id === id);
    return item || null;
  }
}

export const itemRepository: ItemRepository = new MockItemRepository();
