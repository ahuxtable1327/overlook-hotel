class Hotel {
  constructor(rooms, bookings) {
    this.rooms = rooms;
    this.bookings = bookings;
    this.availableRooms = [];
  }

  getGuestBookings(guest) {
    let bookings = this.bookings.filter(booking => booking.userID === guest.id);
    guest.bookings = bookings;
    return bookings;
  }

  getRoomInformation(booking) {
    return this.rooms.find(room => room.number === booking.roomNumber)
  }

  


}

export default Hotel;
