import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  return res.send("creating user..");
});

export default router;
