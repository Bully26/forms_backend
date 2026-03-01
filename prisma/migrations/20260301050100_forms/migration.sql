/*
  Warnings:

  - The `fields_schema` column on the `forms` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "forms" ADD COLUMN     "validate" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "fields_schema",
ADD COLUMN     "fields_schema" TEXT[],
ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;
