import express from "express";
import { Paint, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

router.get("/", async (req, res) => {
  const sales = await prisma.sale.findMany({
    include: { rows: { include: { category: true } } },
  });

  const salesWithQuantity = sales.map((sale) => ({
    ...sale,
    totalQuantity: sale.rows.length,
  }));

  return res.send(salesWithQuantity);
});

router.get("/:id", async (req, res) => {
  const sale = await prisma.sale.findFirst({
    where: { id: req.params.id },
    include: { rows: { include: { category: true } } },
  });

  if (!sale)
    return res.status(404).send("The sale with the given id was not found");

  const saleWithQuantity = {
    ...sale,
    totalQuantity: sale.rows.length,
  };

  return res.send(saleWithQuantity);
});

router.post("/", async (req, res) => {
  const { rows } = req.body;
  const rowIds = rows.map((row: Paint) => ({
    id: row.id,
  }));

  const sale = await prisma.sale.create({
    data: { rows: { connect: rowIds } },
    include: { rows: { include: { category: true } } },
  });
  // prisma.paint.updateMany({ data: { saleId: sale.id } });

  return res.status(201).send(sale);
});

router.put("/:id", async (req, res) => {
  const { status } = req.body;
  const sale = await prisma.sale.findFirst({
    where: { id: req.params.id },
    include: { rows: true },
  });
  if (!sale)
    return res.status(404).send("The sale with the gived id was not found");

  const rowIds = sale.rows.map((row: Paint) => ({ id: row.id }));

  await prisma.sale.update({
    where: { id: req.params.id },
    data: {
      status: status,
      rows: { deleteMany: rowIds },
    },
  });

  const updatedSale = await prisma.sale.findFirst({
    where: { id: req.params.id },
  });

  return res.send(updatedSale);
});

export default router;

// router.post("/", async (req, res) => {
//   const { rows } = req.body;

//   const bestBeforeDate = new Date();
//   bestBeforeDate.setFullYear(bestBeforeDate.getFullYear() + 2);

//   const paints = rows.map((paint: Paint) => ({
//     name: paint.name,
//     quantity: paint.quantity,
//     price: paint.price,
//     supplierInfo: paint.supplierInfo,
//     bestBeforeDate,
//     categoryId: paint.categoryId,
//   }));

//   for (const paint of rows) {
//     const category = await prisma.category.findFirst({
//       where: { id: paint.categoryId },
//     });

//     if (!category)
//       res.status(404).send("The category with the given id was not found");
//   }

//   const sale = await prisma.sale.create({
//     data: {
//       rows: {
//         createMany: { data: paints },
//       },
//     },
//     include: { rows: { include: { category: true } } },
//   });

//   return res.status(201).send(sale);
// });
