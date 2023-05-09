import { getPassengers } from './getPassengers.js';

export const getTakenSeats = async (flightId) => {
 const passengerGroups = await getPassengers(flightId);

 const takenSeats = [];

 passengerGroups.forEach((passenger) => {
  if (passenger.seat_id !== null) {
   takenSeats.push(passenger.seat_id);
  }
 });

 return takenSeats;
};
