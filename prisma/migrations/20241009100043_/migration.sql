/*
  Warnings:

  - You are about to drop the column `supplierInfo` on the `Paint` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Paint" DROP COLUMN "supplierInfo",
ADD COLUMN     "supplierId" TEXT DEFAULT 'default-supplier-id';

-- CreateTable
CREATE TABLE "Supplier" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Supplier_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_name_key" ON "Supplier"("name");

-- AddForeignKey
ALTER TABLE "Paint" ADD CONSTRAINT "Paint_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supplier"("id") ON DELETE SET NULL ON UPDATE CASCADE;
