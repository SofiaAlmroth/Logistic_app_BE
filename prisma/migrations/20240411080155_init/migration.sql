-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paint" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "supplierInfo" TEXT NOT NULL,
    "orderDate" TEXT NOT NULL,
    "ean_gtin" TEXT NOT NULL,
    "batchName" TEXT NOT NULL,
    "bestBeforeDate" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Paint_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Paint" ADD CONSTRAINT "Paint_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
