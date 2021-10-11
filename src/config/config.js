import dotenv from "dotenv";
dotenv.config();

export const { DATABASE_URL, PORT, NODE_ENV } = process.env;
