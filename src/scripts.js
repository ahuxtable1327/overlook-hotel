// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import './css/base.scss';
import './images/turing-logo.png'
import Hotel from './classes/Hotel'
import Guest from './classes/Guest'
import Booking from './classes/Booking'
import Room from './classes/Room'
import fetchData from './apiCalls'

let dayjs = require('dayjs');

let guest, room, booking;

window.addEventListener('load', getData);

// An example of how you tell webpack to use an image (also need to link to it in the index.html)

function getData(){
  // fetchData('customer')
  //   .then(guest => {
  //     guest = new Guest(guest[0])
  //   });
  // fetchData('rooms')
  //   .then(room => {
  //     room = new Room(room)
  //   });
  // fetchData('bookings')
  //   .then(booking => {
  //     booking = new Booking(booking)
  //   });
}

  console.log('This is the JavaScript entry file - your code begins here.');
