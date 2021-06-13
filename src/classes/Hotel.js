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

  calculateGuestAmntSpent(guest) {
    let bookings = this.getGuestBookings(guest);
    let rooms = [];
    bookings.forEach(booking => {
      rooms.push(this.getRoomInformation(booking))
    });
    return rooms.reduce((amntSpent, currentRoom) => {
      amntSpent += currentRoom.costPerNight
      return amntSpent
    }, 0).toFixed(2);
  }

  getAvailableRooms(date) {
    const bookingsByDate = this.bookings.filter(booking => {
      return booking.date === date
    }).map(booking => booking.roomNumber)

    this.availableRooms = this.rooms.filter(room =>
        !bookingsByDate.includes(room.number))

    if(this.availableRooms.length > 0) {
      return this.availableRooms;
    } else {
      return 'Sorry, there are no rooms available for this date!'
    }
  }


}

export default Hotel;
