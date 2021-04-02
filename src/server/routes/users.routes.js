import { Router } from "express";

const router = new Router();

router.get("/", (req, res) => {
  res.send("Users list");
});

export default router;
