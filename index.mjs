import { Hotel } from "./Hotel.mjs";
import { Room } from "./Room.mjs";
import { RoomWithView } from "./RoomWithView.mjs";
import { SleepingRoom } from "./SleepingRoom.mjs";
const Room1 = new Room(2, 55, 200, false);
console.log("Room One Info");
Room1.printRoom();
// console.log("This Room Is: " + Room1.isBooked());
console.log("****************************************************************");

const Room2 = new SleepingRoom(3, 7, 250, false, 2);
console.log("Room two Info");
Room2.printRoom();
// Room2.book();
// console.log("This Room Is: " + Room2.isBooked());
console.log("****************************************************************");

const Room3 = new RoomWithView(5, 10, 500, true, 3, "Sea");
console.log("Room three Info");
Room3.printRoom();
// console.log(Room1.isBooked());
console.log("****************************************************************");

const Hotel1 = new Hotel("Hebron", 10, 1, 100, [Room1, Room2, Room3]);
console.log("****************************** Hotel Info ******************************");
Hotel1.printAdvertisemen();
console.log("****************************** Rooms Booked Info ***********************");
Hotel1.listBookedRooms();
