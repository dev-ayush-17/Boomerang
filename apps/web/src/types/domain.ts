/**
 * Domain model types aligned with docs/02-DOMAIN_MODEL.md
 */

export type ItemKind = "lost" | "found";

export type ItemStatus =
  | "LISTED"
  | "CLAIM_PENDING"
  | "VERIFIED"
  | "HANDED_OVER"
  | "EXPIRED"
  | "REJECTED";

export interface Item {
  id: string;
  kind: ItemKind;
  title: string;
  description: string;
  category: string;
  foundAtLocation: string;
  deskLocation?: string;
  occurredOn: string;
  status: ItemStatus;
  finderId: string;
  imageUrl?: string;
  createdAt: string;
}

export interface ItemFilters {
  kind?: "all" | "found" | "lost" | "desk";
  search?: string;
}
