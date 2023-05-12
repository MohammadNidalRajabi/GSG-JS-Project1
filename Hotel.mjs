class Hotel {
  #minFloor;
  #maxFloor;
  constructor(Address, NumberOfRooms, MinFloor, MaxFloor, Rooms) {
    this.Address = Address;
    this.NumberOfRooms = NumberOfRooms;
    this.#minFloor = MinFloor;
    this.#maxFloor = MaxFloor;
    this.Rooms = Rooms;
  }
  printAdvertisemen() {
    console.log("Addres:"+this.Address);
    console.log("Number Of Rooms:"+this.NumberOfRooms);
    console.log("min Floor:"+this.#minFloor);
    console.log("max Floor:"+this.#maxFloor);
    for (let index = 0; index < this.Rooms.length; index++) {
      console.log("Room" +(index+1));
      console.log(this.Rooms[index].printRoom());
      
    }
    console.log("****************************************************************");
  }
  listBookedRooms() {
    for (let index = 0; index < this.Rooms.length; index++) {
      if(this.Rooms[index].isBooked()===true)
      console.log(this.Rooms[index].printRoom());
      else
      {
        
      }
      
    }
    console.log("****************************************************************");

  }
}
export { Hotel };
