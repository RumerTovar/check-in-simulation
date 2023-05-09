import { getColumns } from './getData/getColumns.js';
import { getRows } from './getData/getRows.js';
import { leftSeat } from './searchDirections/leftSeat.js';
import { rightSeat } from './searchDirections/rightSeat.js';
import { upSeat } from './searchDirections/upSeat.js';
import { downSeat } from './searchDirections/downSeat.js';
import { assingSeat } from './assingSeat.js';

export const findSeatNextToFriend = async (
 findFriendSeat,
 availableSeats,
 allSeats,
 passenger,
 updatedPassengers
) => {
 const columns = getColumns(allSeats);
 const rows = getRows(allSeats);

 const { seat_column, seat_row, seat_type_id } = findFriendSeat;
 const searchLeftSeat = leftSeat(
  columns,
  seat_type_id,
  seat_column,
  seat_row,
  availableSeats
 );
 const searchRightSeat = rightSeat(
  columns,
  seat_type_id,
  seat_column,
  seat_row,
  availableSeats
 );
 const searcUpSeat = upSeat(
  rows,
  seat_type_id,
  seat_row,
  availableSeats,
  seat_column
 );
 const searchDownSeat = downSeat(
  rows,
  seat_type_id,
  seat_row,
  availableSeats,
  seat_column
 );

 if (searchLeftSeat !== undefined) {
  const { seat_id } = searchLeftSeat;
  updatedPassengers.push(assingSeat(passenger, seat_id));

  const seatIndex = availableSeats.indexOf(searchLeftSeat);
  return availableSeats.splice(seatIndex, 1);
 }

 if (searchRightSeat !== undefined) {
  const { seat_id } = searchRightSeat;
  updatedPassengers.push(assingSeat(passenger, seat_id));

  const seatIndex = availableSeats.indexOf(searchRightSeat);
  return availableSeats.splice(seatIndex, 1);
 }

 if (searcUpSeat !== undefined) {
  const { seat_id } = searcUpSeat;

  updatedPassengers.push(assingSeat(passenger, seat_id));

  const seatIndex = availableSeats.indexOf(searcUpSeat);
  return availableSeats.splice(seatIndex, 1);
 }

 if (searchDownSeat !== undefined) {
  const { seat_id } = searchDownSeat;
  updatedPassengers.push(assingSeat(passenger, seat_id));

  const seatIndex = availableSeats.indexOf(searchDownSeat);
  return availableSeats.splice(seatIndex, 1);
 }

 if (
  searchLeftSeat === undefined &&
  searchRightSeat === undefined &&
  searcUpSeat === undefined &&
  searchDownSeat === undefined
 ) {
  const findSeat = availableSeats.find((seat) => {
   return seat.seat_type_id === seat_type_id;
  });

  const { seat_id } = findSeat;

  updatedPassengers.push(assingSeat(passenger, seat_id));

  const seatIndex = availableSeats.indexOf(findSeat);
  return availableSeats.splice(seatIndex, 1);
 }
};
