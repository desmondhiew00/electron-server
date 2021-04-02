import { Router } from 'express';
import * as Models from '../models';

const router = new Router();

router.get('/', async (req, res) => {
  const payload = await Models.Users.findAll();
  res.status(200).json({ payload });
});

export default router;
