import paintColors from "./routes/paintColors";
import express from "express";
const app = express();

app.use(express.json());
app.use("/api/paintcolors", paintColors);

app.listen(5999, () => console.log("listening on port 5999..."));
