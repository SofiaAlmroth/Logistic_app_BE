import express from "express";
import { PrismaClient } from "@prisma/client";
import { validate, validateUpdatedUser } from "../schemas/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const router = express.Router();

router.post("/", async (req, res) => {
  const validation = validate(req.body);

  if (!validation.success)
    return res.status(400).send(validation.error.issues[0].message);

  const existingUser = await prisma.user.findFirst({
    where: { email: req.body.email },
  });

  if (existingUser) return res.status(400).send("User already exists");

  const password = bcrypt.hashSync(req.body.password, 12);

  const user = await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      password,
    },
  });

  const { password: p, ...userWithoutPassword } = user;

  const token = jwt.sign(userWithoutPassword, process.env.JWT_SECRET!);

  return res
    .header("access-control-expose-headers", "x-auth-token")
    .header("x-auth-token", token)
    .send(userWithoutPassword);
});

router.put("/:id", async (req, res) => {
  const validation = validateUpdatedUser(req.body);

  const user = await prisma.user.findFirst({ where: { id: req.params.id } });

  if (!validation.success)
    return res.status(400).send(validation.error.issues[0].message);

  if (!user)
    return res.status(404).send("The user with the given id was not found");

  const password = req.body.password
    ? bcrypt.hashSync(req.body.password, 12)
    : undefined;

  console.log("req.body", req.body);

  const updatedUser = await prisma.user.update({
    where: { id: req.params.id },
    data: {
      name: req.body.name,
      email: req.body.email,
      password,
    },
  });

  const { password: p, ...userWithoutPassword } = updatedUser;

  return res.send(userWithoutPassword);
});

export default router;
