CREATE TYPE "public"."user_role" AS ENUM('user', 'admin');

ALTER TABLE "users" ALTER COLUMN "role" SET DATA TYPE user_role USING role::user_role;

ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'user';
