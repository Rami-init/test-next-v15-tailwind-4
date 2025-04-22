"use server";

import { canCreateCourse } from "@/permissions/courses";
import { courseSchema } from "@/schema/courseSchema";
import { getCurrentUser } from "@/services/clerk";
import { redirect } from "next/navigation";
import { z } from "zod";
import { insertCourse } from "../db/courses";
export async function createCourse(unsafeData: z.infer<typeof courseSchema>) {
  const { success, data } = courseSchema.safeParse(unsafeData);
  if (!success || !canCreateCourse(await getCurrentUser())) {
    return { error: true, message: "there was an error creating your course" };
  }

  const course = await insertCourse(data);
  redirect(`/admin/courses/${course?.id}/edit`);
}
