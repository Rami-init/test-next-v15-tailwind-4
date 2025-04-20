import { relations } from "drizzle-orm";
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";
import { UserCourseAccessTable } from "./userCourseAccess";

export const UserTable = pgTable("users", {
  id,
  clerkUserId: text().notNull().unique(),
  name: text().notNull(),
  email: text().notNull(),
  description: text().notNull(),
  role: text().notNull(),
  imageUrl: text(),
  deleteAt: timestamp({
    withTimezone: true,
  }),
  createdAt,
  updatedAt,
});
export const UsersRelationshipTable = relations(UserTable, ({ many }) => ({
  userCourseAccesses: many(UserCourseAccessTable),
}));
