import Hotel from './classes/Hotel'
import Guest from './classes/Guest'
import Booking from './classes/Booking'
import Room from './classes/Room'

let dayjs = require('dayjs');
const todaysDate = dayjs('2021/6/13')
let today = new Date()

const greeting = document.getElementById('greeting');
const guestPage = document.getElementById('guestPage');
const roomAvailability = document.getElementById('roomAvailability');
const arrivalDate = document.getElementById('arrivalDate');


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
    hotel.getAvailableRooms(date);
    hotel.availableRooms.forEach(room => {
      main.innerHTML += `
      <section class="booking-cards" id="bookingCards">
        <article class="booking">
          <h3>${room.roomType}</h3>
          <img src="./images/room.jpg" alt="breezy room with king bed overlooking the sea">
          <p class="date">Available for ${date}</p>
          <p class="room-type">${room.bedSize}</p>
          <p class="cost">${room.costPerNight}</p>
        </article>
      </section>
      `
    })
  }

}

export default domUpdates;
