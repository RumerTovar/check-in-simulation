import { pool } from '../../config/mysql.js';

export const getSeats = async (flightId) => {
 const [rows] = await pool.query(
  `
    SELECT seat.*
    FROM seat
    JOIN airplane ON seat.airplane_id = airplane.airplane_id
    JOIN flight ON airplane.airplane_id = flight.airplane_id
    WHERE flight.flight_id = ?;
  `,
  [flightId]
 );

 return rows;
};
