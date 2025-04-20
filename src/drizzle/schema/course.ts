import { relations } from "drizzle-orm";
import { pgTable, text } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";
import { CourseProductTable } from "./courseProduct";
import { CourseSectionTable } from "./courseSection";
import { UserCourseAccessTable } from "./userCourseAccess";

export const CourseTable = pgTable("courses", {
  id,
  name: text().notNull(),
  description: text().notNull(),
  createdAt,
  updatedAt,
});
export const CourseRelationshipTable = relations(CourseTable, ({ many }) => ({
  courseProducts: many(CourseProductTable),
  userCourseAccesses: many(UserCourseAccessTable),
  courseSections: many(CourseSectionTable),
}));
