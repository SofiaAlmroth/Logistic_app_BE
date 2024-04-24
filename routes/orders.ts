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

export default router;
