import { findGroups } from './findGroup.js';
import { getAvailableSeats } from './getData/getAvailableSeats.js';
import { getSeats } from './getData/getSeats.js';
import { getMinorsGroup } from './getData/getMinorsGroup.js';
import { assingSeat } from './assingSeat.js';
import { findSeatNextToFriend } from './findSeatNextToFriend.js';

export const assignSeats = async (flightId) => {
 const allSeats = await getSeats(flightId);
 const minorsGroups = await getMinorsGroup(flightId);
 const groups = await findGroups(flightId);
 const availableSeats = await getAvailableSeats(flightId, allSeats);

 const allGroups = [...minorsGroups.entries()].concat([...groups.entries()]);

 const result = allGroups.reduce((acc, [key, value]) => {
  const thisGroup = value;
  const updatedPassengers = [];
  thisGroup.forEach((passenger, index) => {
   const { seat_type_id, seat_id } = passenger;

   if (seat_id !== null) {
    return updatedPassengers.push(passenger);
   }

   const friendIndex = index - 1;

   if (friendIndex === -1) {
    const findSeat = availableSeats.find((seat) => {
     return seat.seat_type_id === seat_type_id;
    });
    const findSeatId = findSeat.seat_id;
    const seatIndex = availableSeats.indexOf(findSeat);

    availableSeats.splice(seatIndex, 1);
    return updatedPassengers.push(assingSeat(passenger, findSeatId));
   }

   const findAFriend = updatedPassengers[friendIndex];

   const friendSeatId = findAFriend.seat_id;

   const findFriendSeat = allSeats.find((seat) => {
    return seat.seat_id === friendSeatId;
   });

   if (findFriendSeat) {
    findSeatNextToFriend(
     findFriendSeat,
     availableSeats,
     allSeats,
     passenger,
     updatedPassengers
    );
   }
  });

  acc.push({ [key]: updatedPassengers });

  return acc;
 }, []);

 return result.flatMap(Object.values).flat();
};
