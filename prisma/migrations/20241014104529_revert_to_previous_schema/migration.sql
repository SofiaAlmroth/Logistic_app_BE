/*
  Warnings:

  - You are about to drop the column `supplierId` on the `Paint` table. All the data in the column will be lost.
  - You are about to drop the `Supplier` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `supplierInfo` to the `Paint` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Paint" DROP CONSTRAINT "Paint_supplierId_fkey";

-- AlterTable
ALTER TABLE "Paint" DROP COLUMN "supplierId",
ADD COLUMN     "supplierInfo" TEXT NOT NULL;

-- DropTable
DROP TABLE "Supplier";
