import { config } from 'dotenv';

config();

export const PORT = process.env.PORT || 3000;
export const HOST = process.env.HOST;
export const USER = process.env.USER;
export const PASSWORD = process.env.PASSWORD;
export const DATABASE = process.env.DATABASE;
