import { relations } from "drizzle-orm";
import { integer, pgEnum, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";
import { CourseTable } from "./course";
import { CourseSectionTable } from "./courseSection";
import { UserLessonCompleteTable } from "./userLessonComplete";

export const LessonsStatuses = ["public", "private", "preview"] as const;
export type LessonStatus = (typeof LessonsStatuses)[number];
export const LessonStatusEnum = pgEnum(
  "course_section_status",
  LessonsStatuses
);

export const LessonTable = pgTable("lesson", {
  id,
  name: text().notNull(),
  description: text().notNull(),
  youtubeVideoId: text().notNull(),
  order: integer().notNull(),
  status: LessonStatusEnum().notNull().default("public"),
  sectionId: uuid()
    .notNull()
    .references(() => CourseTable.id, {
      onDelete: "cascade",
    }),
  createdAt,
  updatedAt,
});
export const LessonRelationshipTable = relations(
  LessonTable,
  ({ one, many }) => ({
    section: one(CourseSectionTable, {
      fields: [LessonTable.sectionId],
      references: [CourseSectionTable.id],
    }),
    userLessonsComplete: many(UserLessonCompleteTable),
  })
);
