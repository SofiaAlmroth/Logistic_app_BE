/*
  Warnings:

  - You are about to drop the column `batchName` on the `Paint` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Paint" DROP COLUMN "batchName",
ALTER COLUMN "orderDate" SET DEFAULT CURRENT_TIMESTAMP;
