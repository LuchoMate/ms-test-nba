import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import routes from "./src/routes/index"
import healthRouter from "./src/routes/health"

dotenv.config();

const app = express()
const PORT = process.env.PORT

app.use(cors());
app.use('/', healthRouter)
app.use('/api', routes)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});




