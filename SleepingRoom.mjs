import { Room } from "./Room.mjs";

class SleepingRoom extends Room {
  constructor(FloorNum, RoomNum, price, IsBoocked, PersonCapacity) {
    super(FloorNum, RoomNum, price, IsBoocked);
    this.personCapacity = PersonCapacity;
  }

  printRoom() {
    super.printRoom();
    console.log("This Person Capacity Is:" + this.personCapacity);
  }
}

export { SleepingRoom };
