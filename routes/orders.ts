import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

router.get("/", async (req, res) => {
  const orders = await prisma.order.findMany({ include: { rows: true } });

  const ordersWithQuantity = orders.map((order) => ({
    ...order,
    quantity: order.rows.length,
  }));

  return res.send(ordersWithQuantity);
});

// router.post("/", async (req, res) => {
//   const category = await prisma.category.findFirst({
//     where: { id: req.body.categoryId },
//   });

//   if (!category)
//     res.status(404).send("The category with the given id was not found");

//   const order = await prisma.order.create({
//     data: { rows: req.body.paint },
//   });
//   return res.status(201).send(order);
// });

export default router;
