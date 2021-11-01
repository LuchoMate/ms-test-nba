import { Request, Response } from 'express';
import { areGamesLive } from '../services/areGamesLive';

export const getBaseRoute = async (req: Request, res: Response) => {
  console.log('Passing through base route')
  res.send('Base Route')
}

export const getGamesLive = async (req: Request, res: Response) => {
  console.log('Getting games live route');
  const gamesLive = await areGamesLive()
  
  if(gamesLive.data){
    res.send('There are games being played right now!')
  }
  else{
    res.send('No games being played right now.')
  }
}