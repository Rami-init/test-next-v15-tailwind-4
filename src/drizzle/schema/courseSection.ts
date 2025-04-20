import { relations } from "drizzle-orm";
import { integer, pgEnum, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";
import { CourseTable } from "./course";

export const CourseSectionsStatuses = ["public", "private"] as const;
export type CourseSectionStatus = (typeof CourseSectionsStatuses)[number];
export const CourseSectionStatusEnum = pgEnum(
  "course_section_status",
  CourseSectionsStatuses
);

export const CourseSectionTable = pgTable("course_sections", {
  id,
  name: text().notNull(),
  description: text().notNull(),
  imageUrl: text().notNull(),
  priceInDollars: integer().notNull(),
  status: CourseSectionStatusEnum().notNull().default("public"),
  courseId: uuid()
    .notNull()
    .references(() => CourseTable.id, {
      onDelete: "cascade",
    }),
  createdAt,
  updatedAt,
});
export const CourseSectionRelationshipTable = relations(
  CourseSectionTable,
  ({ one }) => ({
    course: one(CourseTable, {
      fields: [CourseSectionTable.courseId],
      references: [CourseTable.id],
    }),
  })
);
