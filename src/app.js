import express from "express";
import { DATABASE_URL, PORT, NODE_ENV } from "./config/config";
import { connectToDatabase } from "./database/connection";
import { printBuyRequest, printSellRequest } from "./utils/xlsx";
import route from "./api/routes/index";
import logger from './utils/logger'

const app = express();

app.use(express.json());

//connect to the database
connectToDatabase(DATABASE_URL);

//if node environment is in development it should pull the data from excel sheet to database
if (NODE_ENV === "development") {
  printBuyRequest();
  printSellRequest();
}

app.use("/", route);

app.listen(PORT || 3030, () => logger.info(`server running on port ${PORT}`));

export default app;
