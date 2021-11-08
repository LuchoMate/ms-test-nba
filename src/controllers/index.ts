import { Request, Response } from 'express';
import { areGamesLive } from '../services/areGamesLive';
import { news } from '../services/news';

export const getBaseRoute = async (req: Request, res: Response) => {
  console.log('Passing through base route')
  res.send('Base Route')
}

export const getGamesLive = async (req: Request, res: Response) => {
  console.log('Getting games live route');
  const gamesLive = await areGamesLive()
  
  if(gamesLive.data){
    res.status(200).json({
      live: true
    });
  }
  else{
    res.status(200).json({
      live: false
    });
  }
}

export const getNews = async (req: Request, res: Response) => {
  console.log('Getting news');
  const myNews = await news()

  if(myNews.data) {
    res.status(200).json({
      news: myNews.data
    });
  }
  else{
    res.status(400).json({
      news: false
    });
  }

}