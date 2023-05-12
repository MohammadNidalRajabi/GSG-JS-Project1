import { Room } from "./Room.mjs";

class RoomWithView extends Room {
  constructor(FloorNum, RoomNum, price, IsBoocked, View, NumberOfBeds) {
    super(FloorNum, RoomNum, price, IsBoocked);
    this.view = View;
    this.numberOfBeds = NumberOfBeds;
  }

  printRoom() {
    super.printRoom();
    console.log("View:" + this.view);
    console.log("Number Of Beds:" + this.numberOfBeds);
  }
}
export { RoomWithView };
