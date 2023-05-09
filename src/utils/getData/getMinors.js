export const getMinors = async (passengers, flightId) => {
 const minorsPurchaseId = passengers
  .filter((passenger) => passenger.age < 18)
  .map((passenger) => passenger.purchase_id);

 return minorsPurchaseId;
};
