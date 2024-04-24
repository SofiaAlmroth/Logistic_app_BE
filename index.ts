import categories from "./routes/categories";
import paints from "./routes/paints";
import users from "./routes/users";
import auth from "./routes/auth";
import orders from "./routes/orders";
import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use("/api/categories", categories);
app.use("/api/paints", paints);
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/orders", orders);

app.listen(5999, () => console.log("listening on port 5999..."));

//GET Orders
// async function createOrder(status: string) {
//   const order = await prisma.order.create({ data: { rows: {} } });
//   console.log("order created", order);
//   return order;
// }

// createOrder("pending");
// createOrder("pending");
// createOrder("pending");

//GET Paints
// async function createPaint() {
//   const paint = await prisma.paint.create({
// data: {
//   name: "Whispering Willow",
//   quantity: 12,
//   price: 90,
//   bestBeforeDate:
//   supplierInfo: "Supplier ABC",
//   categoryId: "cluv0y3wc000314hseodhmjn2",
// },
//   });
//   console.log(paint);
// }

// createPaint();

// //GET Categories
// async function createCategory(name: string) {
//   const category = await prisma.category.create({ data: { name } });
//   console.log(category);
// }

// createCategory("Black");
// createCategory("White");
// createCategory("Beige");
// createCategory("Pink");
// createCategory("Grey");
// createCategory("Purple");
// createCategory("Yellow");
// createCategory("Brown");
// createCategory("Red");
// createCategory("Orange");
// createCategory("Green");
// createCategory("Blue");

// async function deleteCategory(id: string) {
//   const category = await prisma.category.delete({ where: { id } });
//   console.log(category);
// }

// deleteCategory("clvdqgcwb0000lu276xdwyg00");
// deleteCategory("clvdqgd1t0002lu2727a5pr8r");
// deleteCategory("clvdqgd1o0001lu271ul65m2y");
// deleteCategory("clvdqgd230003lu27571db2s6");
// deleteCategory("clvdqgd290004lu27gelhb0a7");
// deleteCategory("clvdqgd2f0006lu278cbsefnn");
// deleteCategory("clvdqgd290005lu27uqsib6hm");
// deleteCategory("clvdqgd2o0007lu27st88e61r");
// deleteCategory("clvdqgd2o0008lu27q28t2wh5");
// deleteCategory("clvdqgd2r0009lu278aon0r1a");
// deleteCategory("clvdqgd2s000blu27zog5p0ca");
// deleteCategory("clvdqh4fn0001zedx0x795itx");
