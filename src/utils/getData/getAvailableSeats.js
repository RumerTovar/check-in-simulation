import { getTakenSeats } from './getTakenSeats.js';

export const getAvailableSeats = async (flightId, seats) => {
 let takenSeats = [];

 takenSeats = await getTakenSeats(flightId);

 const availableSeats = seats
  .map((seat) => seat.seat_id)
  .filter((seat) => !takenSeats.includes(seat));

 const getSeatObjects = seats.filter((seat) =>
  availableSeats.includes(seat.seat_id)
 );

 const sortedSeats = getSeatObjects.sort((a, b) => {
  if (a.seat_row !== b.seat_row) {
   return a.seat_row - b.seat_row;
  } else {
   return a.seat_column.localeCompare(b.seat_column);
  }
 });

 return sortedSeats;
};
