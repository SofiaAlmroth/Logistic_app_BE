import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

router.get("/", async (req, res) => {
  const categories = await prisma.category.findMany();
  return res.send(categories);
});

router.delete("/:id", async (req, res) => {
  const category = await prisma.category.findFirst({
    where: { id: req.params.id },
  });
  if (!category)
    return res.status(404).send("The category with the gived id was not found");
  const deletedCategory = await prisma.category.delete({
    where: { id: req.params.id },
  });
  return res.send(deletedCategory);
});

export default router;
