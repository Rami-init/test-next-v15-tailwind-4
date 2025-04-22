import { z } from "zod";

export const courseSchema = z.object({
  name: z.string().min(1, "Name must be required."),
  description: z.string().min(1, "Description must be required."),
});
