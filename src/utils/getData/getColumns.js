export const getColumns = (seats) => {
 return seats.reduce((accumulator, currentSeat) => {
  const seatTypeId = currentSeat.seat_type_id;
  const seatColumn = currentSeat.seat_column;

  if (!accumulator[seatTypeId]) {
   accumulator[seatTypeId] = [];
  }

  if (!accumulator[seatTypeId].includes(seatColumn)) {
   accumulator[seatTypeId].push(seatColumn);
  }

  return accumulator;
 }, {});
};
