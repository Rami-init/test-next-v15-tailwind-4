import { relations } from "drizzle-orm";
import {
  integer,
  jsonb,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";
import { ProductTable } from "./product";
import { UserTable } from "./user";

export const PurchaseTable = pgTable("purchases", {
  id,
  pricePaidInCents: integer().notNull(),
  productDetails: jsonb().notNull().$type<{
    name: string;
    description: string;
    imageUrl: string;
  }>(),
  userId: uuid()
    .notNull()
    .references(() => UserTable.id, {
      onDelete: "restrict",
    }),
  productId: uuid()
    .notNull()
    .references(() => ProductTable.id, {
      onDelete: "restrict",
    }),
  stripeSessionId: text().notNull().unique(),
  refundedAt: timestamp({
    withTimezone: true,
  }),
  createdAt,
  updatedAt,
});
export const PurchaseRelationshipTable = relations(
  PurchaseTable,
  ({ one }) => ({
    user: one(UserTable, {
      fields: [PurchaseTable.userId],
      references: [UserTable.id],
    }),
    product: one(ProductTable, {
      fields: [PurchaseTable.productId],
      references: [ProductTable.id],
    }),
  })
);
