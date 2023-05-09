export const leftSeat = (
 columns,
 seat_type_id,
 seat_column,
 seat_row,
 availableSeats
) => {
 const leftColumnIndex = columns[seat_type_id].indexOf(seat_column) - 1;
 const leftColumn = columns[seat_type_id][leftColumnIndex];
 const findSeat = availableSeats.find((seat) => {
  return (
   seat.seat_row === seat_row &&
   seat.seat_column === leftColumn &&
   seat.seat_type_id === seat_type_id
  );
 });

 return findSeat;
};
