export const rightSeat = (
 columns,
 seat_type_id,
 seat_column,
 seat_row,
 availableSeats
) => {
 const rightColumnIndex = columns[seat_type_id].indexOf(seat_column) + 1;
 const rightColumn = columns[seat_type_id][rightColumnIndex];
 const findSeat = availableSeats.find((seat) => {
  return (
   seat.seat_row === seat_row &&
   seat.seat_column === rightColumn &&
   seat.seat_type_id === seat_type_id
  );
 });

 return findSeat;
};
