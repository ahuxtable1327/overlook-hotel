// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import './css/base.scss';
import './images/turing-logo.png'
import Hotel from './classes/Hotel'
import Guest from './classes/Guest'
import Booking from './classes/Booking'
import Room from './classes/Room'
import domUpdates from './domUpdates'
import getData from './apiCalls'

let dayjs = require('dayjs');

let guest, hotel;
let guestData, rooms, bookings;


window.addEventListener('load', loadPageInfo);

// An example of how you tell webpack to use an image (also need to link to it in the index.html)

function loadPageInfo(){
  getData()
    .then(response => {
      guestData = response[0].customers;
      rooms = response[1].rooms;
      bookings = response[2].bookings;
      console.log(guestData, rooms, bookings)
      guest = new Guest(guestData[5]);
      hotel = new Hotel(rooms, bookings)
      domUpdates.displayGuestDashboard(guest, rooms, bookings, hotel)
    })
}

  console.log('This is the JavaScript entry file - your code begins here.');
