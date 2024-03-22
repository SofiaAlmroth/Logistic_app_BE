import express from "express";

const router = express.Router();

{
  /*Testdata
const paintColors = [
  { id: "1", value: "blue" },
  { id: "2", value: "yellow" },
  { id: "3", value: "white" },
];

router.get("/", (req, res) => {
  return res.send(paintColors);
});

router.get("/:id", (req, res) => {
  const paintColor = paintColors.find((p) => p.id === req.params.id);

  if (!paintColor) return res.status(404).send("Paint not found");

  return res.send(paintColor);
});

router.post("/", (req, res) => {
  const paintColor = { id: "4", value: req.body.value };
  paintColors.push(paintColor);

  return res.status(201).send(paintColor);
});

router.put("/:id", (req, res) => {
  const paintColor = paintColors.find((p) => p.id === req.params.id);

  if (!paintColor) return res.status(404).send("Paint not found.");

  paintColor.value = req.body.value;

  return res.send(paintColor);
});
*/
}
export default router;
