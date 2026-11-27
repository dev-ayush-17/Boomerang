import { Item, ItemFilters } from "@/types/domain";

export interface ItemRepository {
  getItems(filters?: ItemFilters): Promise<Item[]>;
  getItemById(id: string): Promise<Item | null>;
}
