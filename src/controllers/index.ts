import { Request, Response } from 'express';

export const getBaseRoute = async (req: Request, res: Response) => {
  console.log('Passing through base route')
  res.send('Base Route')
}