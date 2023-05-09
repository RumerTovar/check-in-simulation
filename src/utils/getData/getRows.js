export const getRows = (seats) => {
 return seats.reduce((accumulator, currentSeat) => {
  const seatTypeId = currentSeat.seat_type_id;
  const seatRow = currentSeat.seat_row;

  if (!accumulator[seatTypeId]) {
   accumulator[seatTypeId] = [];
  }

  if (!accumulator[seatTypeId].includes(seatRow)) {
   accumulator[seatTypeId].push(seatRow);
  }

  return accumulator;
 }, {});
};
