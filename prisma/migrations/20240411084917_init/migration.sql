/*
  Warnings:

  - Changed the type of `orderDate` on the `Paint` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `bestBeforeDate` on the `Paint` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Paint" DROP COLUMN "orderDate",
ADD COLUMN     "orderDate" TIMESTAMP(3) NOT NULL,
DROP COLUMN "bestBeforeDate",
ADD COLUMN     "bestBeforeDate" TIMESTAMP(3) NOT NULL;
