import express from "express";
import { PrismaClient } from "@prisma/client";

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

interface Paint {
  name: string;
  quantity: number;
  price: number;
  supplierInfo: string;
  categoryId: string;
}

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

// router.put("/:id", async (req, res) => {
//   const order = await prisma.order.findFirst({
//     where: { id: req.params.id },
//   });
//   if (!order)
//     return res.status(404).send("The order with the gived id was not found");

//   const { rows } = req.body;

//   await prisma.order.update({
//     where: { id: req.params.id },
//     data: { status: "RECEIVED" },
//   });

//   for (const paint of rows) {
//     await prisma.paint.update({
//       where: { id: paint.id },
//       data: { isReceived: true },
//     });
//   }
//   //  await prisma.order.update({
//   //     where: { id: req.params.id },
//   //     data: {
//   //       status: "RECEIVED",
//   //       rows: {
//   //         updateMany: {
//   //           where: { id: { in: rows.id } },
//   //           data: { isReceived: true },
//   //         },
//   //       },
//   //     },
//   //   });

//   const updatedOrder = await prisma.order.findFirst({
//     where: { id: req.params.id },
//   });

//   return res.send(updatedOrder);
// });

export default router;
