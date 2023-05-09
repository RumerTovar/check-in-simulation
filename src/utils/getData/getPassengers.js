import { pool } from '../../config/mysql.js';

let cachedData = null;
let previousId = null;

export async function getPassengers(flightId) {
 //con esto evitamos llamar mas de una vez a la base de datos
 if (cachedData && previousId === flightId) {
  return cachedData;
 }
 //obtenemos los datos de los pasajeron del vuelo asociados a cada boarding pass
 //passenges <- boarding_pass <- flight
 const [rows] = await pool.query(
  `
   SELECT passenger.passenger_id, dni, name, age, country, boarding_pass_id, purchase_id, seat_type_id, seat_id
   FROM passenger 
   JOIN boarding_pass ON passenger.passenger_id = boarding_pass.passenger_id 
   JOIN flight ON boarding_pass.flight_id = flight.flight_id 
   WHERE flight.flight_id = ?`,
  [flightId]
 );

 cachedData = rows;
 return rows;
}
