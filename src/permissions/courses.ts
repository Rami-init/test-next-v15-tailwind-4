import { UserRole } from "@/drizzle/schema";

export const canCreateCourse = ({ role }: { role: UserRole | undefined }) => {
  return role === "admin";
};
