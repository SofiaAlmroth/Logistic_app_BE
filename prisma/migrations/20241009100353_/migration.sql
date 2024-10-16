/*
  Warnings:

  - Made the column `supplierId` on table `Paint` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Paint" DROP CONSTRAINT "Paint_supplierId_fkey";

-- AlterTable
ALTER TABLE "Paint" ALTER COLUMN "supplierId" SET NOT NULL,
ALTER COLUMN "supplierId" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "Paint" ADD CONSTRAINT "Paint_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supplier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
