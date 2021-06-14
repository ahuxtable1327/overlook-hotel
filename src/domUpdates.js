import Hotel from './classes/Hotel'
import Guest from './classes/Guest'
import Booking from './classes/Booking'
import Room from './classes/Room'

let dayjs = require('dayjs');
const todaysDate = dayjs('2021/6/13')
let today = new Date()

const greeting = document.getElementById('greeting');
const guestPage = document.getElementById('guestPage');
const availableCards = document.getElementById('availableCards');
const roomAvailability = document.getElementById('roomAvailability')
const arrivalDate = document.getElementById('arrivalDate');
const selectedRoom = document.getElementById('selectedRoom');
const searchOptions = document.getElementById('searchOptions');


const domUpdates = {

  hideElement(element){
    element.classList.add('hidden');
  },

  showElement(element){
    element.classList.remove('hidden')
  },

  displayMainPage(rooms) {
    const bookingCards = document.getElementById('bookingCards');

    bookingCards.innerHTML = '';


  },

  displayGuestDashboard(guest, bookings, rooms, hotel) {
    const bookingCards = document.getElementById('bookingCards');
    const totalGuestCosts = document.getElementById('totalGuestCosts');
    let bookingType;

    greeting.innerText = `Welcome, ${guest.name}!`
      bookingCards.innerHTML = ''

      const amnt = hotel.calculateGuestAmntSpent(guest)
      totalGuestCosts.innerHTML = `  <section class="trip-costs" id="totalGuestCosts">
          <h4>Total spent at Overlook to date: $${amnt}</h4>
        </section>`

    hotel.getGuestBookings(guest).forEach(booking => {
      let room = hotel.getRoomInformation(booking);
      bookingType = 'Past Trip'
      const bookDate = dayjs(booking.date)
      if(bookDate.isBefore(today)){
        bookingType = 'Past Trip'
      }
      if(bookDate.isSame(today) ||
        bookDate.isAfter(today)) {
          bookingType = 'Upcoming Trips'
        }

      bookingCards.innerHTML += `
        <section class="booking-cards" id="bookingCards">
          <article class="booking">
            <h3>${bookingType}</h3>
            <img src="./images/room.jpg" alt="breezy room with king bed overlooking the sea">
            <p class="date">${booking.date}</p>
            <p class="room-type">${room.roomType}</p>
            <p class="cost">${room.costPerNight}</p>
          </article>
        </section>
      `
    })
  },
  setDate() {
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0 so need to add 1 to make it 1!
    let yyyy = today.getFullYear();

    if(dd<10){
      dd='0'+dd
    }

    if(mm<10){
      mm='0'+mm
    }
    today = yyyy+'-'+mm+'-'+dd;
    document.getElementById('arrivalDate').setAttribute("min", today);
    document.getElementById('arrivalDate').setAttribute("value", today);


  },

  renderBookingForm() {
    this.setDate();
    this.hideElement(guestPage);
    this.showElement(roomAvailability);

  },

  renderAvailableRooms(guest, bookings, rooms, hotel) {
    let date = arrivalDate.value
    if(searchOptions.value === 'empty') {
      hotel.getAvailableRooms(date);
    }
    if(searchOptions.value !== 'empty') {
      let type = searchOptions.value.toLowerCase();
      hotel.getRoomsAvailableByType(date, type);
    }
    hotel.availableRooms.forEach(room => {
      availableCards.innerHTML += `
      <section class="avail-cards" id="availableCards">
        <article class="cards">
          <h3>${room.roomType}</h3>
          <img src="./images/room.jpg" alt="breezy room with king bed overlooking the sea">
          <p class="date">Available for ${date}</p>
          <p class="room-type">${room.bedSize}</p>
          <p class="cost">${room.costPerNight}</p>
          <button id="${room.number}" class="select-room">View Room!</button>
        </article>
      </section>
      `
    })
  },

  renderSelectedRoom(currentRoom) {
    console.log(arrivalDate.value);
    let date = arrivalDate.value;
    this.hideElement(roomAvailability);
    this.showElement(selectedRoom);
    let hasBidet;
    if(currentRoom.bidet) {
      hasBidet = 'Yes'
    } else {
      hasBidet = 'No'
    }

    selectedRoom.innerHTML += `
    <section class="selected-room" id="selectedRoom">
      <article class="cards">
        <h3>${currentRoom.roomType}</h3>
        <img src="./images/room.jpg" alt="breezy room with king bed overlooking the sea">
        <p class="date">Available for ${date}</p>
        <p class="room-type">${currentRoom.bedSize}</p>
        <p class="room-type">${currentRoom.numBeds}</p>
        <p class="room-type"> Bidet: ${hasBidet}</p>
        <p class="cost">${currentRoom.costPerNight}</p>
        <section class="booked-room" id="bookedRoom">
          <button id="${currentRoom.number}" class="book-room-btn">Book Room!</button>
          <button id="goBackBtn" class="go-back-btn">Go back to results!</button>
          <p class="success-msg hidden" id="successMsg">Your booking was added successfully!</p>
        </section>
      </article>
    </section>
    `
  }

}

export default domUpdates;
