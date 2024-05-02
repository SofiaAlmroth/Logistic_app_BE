import express from "express";
import { Paint, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

router.get("/", async (req, res) => {
  const orders = await prisma.order.findMany({
    include: { rows: { include: { category: true } } },
  });

  const ordersWithQuantity = orders.map((order) => ({
    ...order,
    totalQuantity: order.rows.length,
  }));

  return res.send(ordersWithQuantity);
});

router.get("/:id", async (req, res) => {
  const order = await prisma.order.findFirst({
    where: { id: req.params.id },
    include: { rows: { include: { category: true } } },
  });

  if (!order)
    return res.status(404).send("The order with the given id was not found");

  const orderWithQuantity = {
    ...order,
    totalQuantity: order.rows.length,
  };

  return res.send(orderWithQuantity);
});

router.post("/", async (req, res) => {
  const { rows } = req.body;

  const bestBeforeDate = new Date();
  bestBeforeDate.setFullYear(bestBeforeDate.getFullYear() + 2);

  const paints = rows.map((paint: Paint) => ({
    name: paint.name,
    quantity: paint.quantity,
    price: paint.price,
    supplierInfo: paint.supplierInfo,
    bestBeforeDate,
    categoryId: paint.categoryId,
  }));

  for (const paint of rows) {
    const category = await prisma.category.findFirst({
      where: { id: paint.categoryId },
    });

    if (!category)
      res.status(404).send("The category with the given id was not found");
  }

  const order = await prisma.order.create({
    data: {
      rows: {
        createMany: { data: paints },
      },
    },
    include: { rows: { include: { category: true } } },
  });

  return res.status(201).send(order);
});

router.put("/:id", async (req, res) => {
  const { status } = req.body;
  const order = await prisma.order.findFirst({
    where: { id: req.params.id },
    include: { rows: true },
  });
  if (!order)
    return res.status(404).send("The order with the gived id was not found");

  const rowIds = order.rows.map((row: Paint) => row.id);

  await prisma.order.update({
    where: { id: req.params.id },
    data: {
      status: status,
      rows: {
        updateMany: {
          where: { id: { in: rowIds } },
          data: { isReceived: status === "RECEIVED" },
        },
      },
    },
  });

  const updatedOrder = await prisma.order.findFirst({
    where: { id: req.params.id },
  });

  return res.send(updatedOrder);
});

export default router;

// await prisma.order.update({
//   where: { id: req.params.id },
//   data: { status: req.body },
// });

// for (const paint of rows) {
//   await prisma.paint.update({
//     where: { id: paint.id },
//     data: { isReceived: true },
//   });
// }
