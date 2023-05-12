class Room {
  #isBookeed;
  constructor(FloorNum, RoomNum, price, IsBooked) {
    this.floorNum = FloorNum;
    this.roomNum = RoomNum;
    this.price = price;
    this.#isBookeed = IsBooked;
  }
  printRoom() {
    console.log("Floor Num:" + this.floorNum);
    console.log("Room Num:" + this.roomNum);
    console.log("Price :" + this.price);
    if(this.#isBookeed===true)
    {
      console.log("This Room Is:Booked ");
    }
    else
    {
      console.log("This Room Is:NotBooked ");
    }
  }
  book() {
    this.#isBookeed = true;
  }
  isBooked = () => {
    return this.#isBookeed;
  };
}
export { Room };
