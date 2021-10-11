import mongoose from "mongoose";
import logger from "../utils/logger";

export const connectToDatabase = (url) => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.once("open", () => logger.info("database connected successfully"));
  db.on("error", () => logger.error("Database connection error:"));
};
