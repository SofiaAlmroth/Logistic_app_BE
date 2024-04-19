import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const router = express.Router();

//Hämta alla paints
router.get("/", async (req, res) => {
  const paints = await prisma.paint.findMany();
  return res.send(paints);
});

//hämta en paint med ett id
router.get("/:id", async (req, res) => {
  const paint = await prisma.paint.findFirst({
    where: { id: req.params.id },
    include: { category: true },
  });

  if (!paint)
    return res.status(404).send("The paint with the gived id was not found");
  return res.send(paint);
});

//skapa en ny paint
router.post("/", async (req, res) => {
  const category = await prisma.category.findFirst({
    where: { id: req.body.categoryId },
  });

  if (!category)
    res.status(404).send("The category with the given id was not found");
  const paint = await prisma.paint.create({
    data: {
      name: req.body.name,
      quantity: req.body.quantity,
      price: req.body.price,
      supplierInfo: req.body.supplierInfo,
      orderDate: req.body.orderDate,
      ean_gtin: req.body.ean_gtin,
      batchName: req.body.batchName,
      bestBeforeDate: req.body.bestBeforeDate,
      categoryId: req.body.categoryId,
    },
    include: {
      category: true,
    },
  });
  return res.status(201).send(paint);
});

router.put("/:id", async (req, res) => {
  const paint = await prisma.paint.findFirst({
    where: { id: req.params.id },
  });
  if (!paint)
    return res.status(404).send("The paint with the gived id was not  found");
  //validering
  //const validation =(req.body)
  //if(!validation.success) return res.status(400).send(validation.error.issue)
  const category = await prisma.category.findFirst({
    where: { id: req.body.categoryId },
  });
  if (!category)
    return res.status(404).send("The category with the gived id was not found");

  const updatedPaint = await prisma.paint.update({
    where: { id: req.params.id },
    data: {
      name: req.body.name,
      quantity: req.body.quantity,
      price: req.body.price,
      supplierInfo: req.body.supplierInfo,
      orderDate: req.body.orderDate,
      ean_gtin: req.body.ean_gtin,
      batchName: req.body.batchName,
      bestBeforeDate: req.body.bestBeforeDate,
      categoryId: req.body.categoryId,
    },
  });

  return res.send(updatedPaint);
});

router.delete("/:id", async (req, res) => {
  const paint = await prisma.paint.findFirst({
    where: { id: req.params.id },
  });
  if (!paint)
    return res.status(404).send("The paint with the gived id was not found");
  const deletedPaint = await prisma.paint.delete({
    where: { id: req.params.id },
  });
  return res.send(deletedPaint);
});

export default router;
