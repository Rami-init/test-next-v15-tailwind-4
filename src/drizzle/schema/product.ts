import { relations } from "drizzle-orm";
import { integer, pgEnum, pgTable, text } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";
import { CourseProductTable } from "./courseProduct";

export const productsStatuses = ["public", "private"] as const;
export type ProductStatus = (typeof productsStatuses)[number];
export const ProductStatusEnum = pgEnum("product_status", productsStatuses);

export const ProductTable = pgTable("products", {
  id,
  name: text().notNull(),
  description: text().notNull(),
  imageUrl: text().notNull(),
  priceInDollars: integer().notNull(),
  status: ProductStatusEnum().notNull().default("public"),
  createdAt,
  updatedAt,
});
export const ProductRelationshipTable = relations(ProductTable, ({ many }) => ({
  courseProduct: many(CourseProductTable),
}));
