import express from 'express';
import { Request, Response } from 'express';
const healthRouter = express.Router();

healthRouter.get('/health', (req: Request, res: Response) => {
  console.log('Passing through health route')
  res.status(200).json({
      ok: true,
      method: 'health'
  });
});

export default healthRouter;