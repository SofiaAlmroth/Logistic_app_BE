import paintColors from "./routes/paintColors";
import users from "./routes/users";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use("/api/paintcolors", paintColors);
app.use("/api/users", users);

app.listen(5999, () => console.log("listening on port 5999..."));
