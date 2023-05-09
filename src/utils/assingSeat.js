export const assingSeat = (passenger, findSeatId) => {
 return {
  ...passenger,
  seat_id: findSeatId,
 };
};
