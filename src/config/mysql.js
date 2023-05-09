import { createPool } from 'mysql2/promise';
import { DATABASE, HOST, USER, PASSWORD } from './config.js';

export const pool = createPool({
 database: DATABASE,
 host: HOST,
 user: USER,
 password: PASSWORD,
 ssl: {
  rejectUnauthorized: false,
 },
});
