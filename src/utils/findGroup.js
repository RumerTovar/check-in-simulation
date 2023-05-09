import { getPassengers } from './getData/getPassengers.js';
import { getMinors } from './getData/getMinors.js';

export const findGroups = async (flightId) => {
 const passengers = await getPassengers(flightId);
 const minorsPurchaseId = await getMinors(passengers);

 const passengersWithOutKids = passengers.filter(
  (passenger) => !minorsPurchaseId.includes(passenger.purchase_id)
 );

 const groups = new Map();
 //armamos los grupos
 //los necesito armados para ver cuantos miembros tienen
 passengersWithOutKids.forEach((passenger) => {
  const { purchase_id } = passenger;

  if (!groups.get(purchase_id)) {
   groups.set(purchase_id, []);
  }

  groups.get(purchase_id).push(passenger);
 });
 //ordenando por cantidad de miembros de grupo
 const sortedMap = [...groups].sort((a, b) => {
  const aLength = a[1].length;
  const bLength = b[1].length;

  if (aLength > bLength) {
   return -1;
  } else if (aLength < bLength) {
   return 1;
  } else {
   return 0;
  }
 });

 groups.clear();

 sortedMap.forEach((pair) => {
  const subArr = pair[1];
  //ordenando a las personas que tienen asientos asignados primero
  subArr.sort((a, b) => {
   if (a.seat_id === null && b.seat_id !== null) {
    return 1;
   } else if (a.seat_id !== null && b.seat_id === null) {
    return -1;
   } else {
    return 0;
   }
  });
  groups.set(pair[0], subArr);
 });

 return groups;
};
