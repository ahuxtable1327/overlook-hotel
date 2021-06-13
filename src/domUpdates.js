import Hotel from './classes/Hotel'
import Guest from './classes/Guest'
import Booking from './classes/Booking'
import Room from './classes/Room'

let dayjs = require('dayjs');
const todaysDate = dayjs('2021/6/13')



const domUpdates = {

  displayMainPage(rooms) {
    const bookingCards = document.getElementById('bookingCards');

    bookingCards.innerHTML = '';


  },

  displayGuestDashboard(guest, bookings, rooms) {
    const bookingCards = document.getElementById('bookingCards');
    const greeting = document.getElementById('greeting');
    const totalGuestCosts = document.getElementById('totalGuestCosts');
    let bookingType;

    greeting.innertext = `Welcome, ${user.name}!`

    hotel.getGuestBookings(guest).forEach(booking => {
      hotel.getRoomInformation(booking)
      const bookDate = dayjs(booking.)
      if(bookDate.isBefore(todaysDate)){
        bookingType = 'Past Trip'
      }
      if(bookDate.isSame(todaysDate) ||
        bookDate.isAfter(todaysDate)) {
          bookingType = 'Upcoming Trips'
        }
      bookingCards.innerHTML = `
        <section class="booking-cards" id="bookingCards">
          <article class="booking">
            <h3>${bookingType}</h3>
            <img src="" alt="">
            <p class="date">${booking.date}</p>
            <p class="room-type">${room.roomType}</p>
            <p class="cost">${room.costPerNight}</p>
          </article>
        </section>
      `
    })

    const amnt = hotel.calculateGuestAmntSpent(guest)
    totalGuestCosts.innerHTML = `  <section class="trip-costs" id="totalGuestCosts">
        <h4>Total spent at Overlook:${amnt}</h4>
      </section>`
  }
}

export default domUpdates;
