/*
  Warnings:

  - You are about to drop the column `saleId` on the `Paint` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Paint" DROP CONSTRAINT "Paint_saleId_fkey";

-- AlterTable
ALTER TABLE "Paint" DROP COLUMN "saleId";

-- CreateTable
CREATE TABLE "_PaintToSale" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PaintToSale_AB_unique" ON "_PaintToSale"("A", "B");

-- CreateIndex
CREATE INDEX "_PaintToSale_B_index" ON "_PaintToSale"("B");

-- AddForeignKey
ALTER TABLE "_PaintToSale" ADD CONSTRAINT "_PaintToSale_A_fkey" FOREIGN KEY ("A") REFERENCES "Paint"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PaintToSale" ADD CONSTRAINT "_PaintToSale_B_fkey" FOREIGN KEY ("B") REFERENCES "Sale"("id") ON DELETE CASCADE ON UPDATE CASCADE;
