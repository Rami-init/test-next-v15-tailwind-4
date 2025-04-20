import { UserRole } from "@/drizzle/schema";

export const canAccessAdminPages = ({
  role,
}: {
  role: UserRole | undefined;
}) => {
  return role === "admin";
};
export const canAccessUserPages = ({
  role,
}: {
  role: UserRole | undefined;
}) => {
  return role === "user" || role === "admin";
};
