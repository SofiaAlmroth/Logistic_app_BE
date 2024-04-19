import categories from "./routes/categories";
import paints from "./routes/paints";
import users from "./routes/users";
import auth from "./routes/auth";
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

app.listen(5999, () => console.log("listening on port 5999..."));

{
  /* GET Paints
async function createPaint() {
  const paint = await prisma.paint.create({
    data: {
      name: "Whispering Willow",
      quantity: 12,
      price: 90,
      supplierInfo: "Supplier ABC",
      orderDate: new Date("2024-04-05T00:00:00Z"),
      ean_gtin: "1234567890123",
      batchName: "Batch005",
      bestBeforeDate: new Date("2027-04-11T00:00:00Z"),
      categoryId: "cluv0y3wc000314hseodhmjn2",
    },
  });
  console.log(paint);
}

createPaint();

//GET Categories
async function createCategory(name: string) {
  const category = await prisma.category.create({ data: { name } });
  console.log(category);
}

createCategory("Black");
createCategory("White");
createCategory("Beige");
createCategory("Pinkck");
createCategory("Grey");
createCategory("Purple");
createCategory("Yellow");
createCategory("Brown");
createCategory("Red");
createCategory("Orange");
createCategory("Green");
createCategory("Blue");
*/
}
