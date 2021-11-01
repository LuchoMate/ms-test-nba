import Axios from 'axios';
import * as dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.API_KEY

export const areGamesLive = () => {
  return Axios.get('https://api.sportsdata.io/v3/nba/scores/json/AreAnyGamesInProgress',
    {
      headers: {
        'Ocp-Apim-Subscription-Key': API_KEY
    }
  })
}