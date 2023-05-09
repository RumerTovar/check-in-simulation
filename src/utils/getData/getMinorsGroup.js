import { getPassengers } from './getPassengers.js';
import { getMinors } from './getMinors.js';

export const getMinorsGroup = async (flightId) => {
 const passengers = await getPassengers(flightId);
 const minorsPurchaseId = await getMinors(passengers);

 //ubicamos a los pasajeros que viajan con los menores de edad
 const travelCompanions = passengers.filter(({ purchase_id }) =>
  minorsPurchaseId.includes(purchase_id)
 );

 const minorGroup = new Map();
 //armo el grupo de pasajeros que viajan con niños
 travelCompanions.forEach((passenger) => {
  const { purchase_id } = passenger;

  if (!minorGroup.get(purchase_id)) {
   minorGroup.set(purchase_id, []);
  }

  minorGroup.get(purchase_id).push(passenger);
 });

 return minorGroup;
};
