export const upSeat = (
 rows,
 seat_type_id,
 seat_row,
 availableSeats,
 seat_column
) => {
 const topRowIndex = rows[seat_type_id].indexOf(seat_row) - 1;
 const topRow = rows[seat_type_id][topRowIndex];
 const findSeat = availableSeats.find((seat) => {
  return (
   seat.seat_column === seat_column &&
   seat.seat_row === topRow &&
   seat.seat_type_id === seat_type_id
  );
 });

 return findSeat;
};
