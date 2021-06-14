// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import './css/base.scss';
import './images/room.jpg'
import Hotel from './classes/Hotel'
import Guest from './classes/Guest'
import Booking from './classes/Booking'
import Room from './classes/Room'
import domUpdates from './domUpdates'
import getData from './apiCalls'

let dayjs = require('dayjs');

let guest, hotel;
let guestData, rooms, bookings;

const bookStay = document.getElementById('bookStay');
const checkAvailability = document.getElementById('checkAvailability');
const availableCards = document.getElementById('availableCards');


window.addEventListener('load', loadPageInfo);
bookStay.addEventListener('click', displayBookingPage)
checkAvailability.addEventListener('click', displayAvailableRooms)
availableCards.addEventListener('click', function() {
  displaySelectedRoom(event);
})


function loadPageInfo(){
  getData()
    .then(response => {
      guestData = response[0].customers;
      rooms = response[1].rooms;
      bookings = response[2].bookings;
      guest = new Guest(guestData[5]);
      hotel = new Hotel(rooms, bookings)
      domUpdates.displayGuestDashboard(guest, rooms, bookings, hotel)
    })
}

function displayBookingPage() {
  domUpdates.renderBookingForm();
}

function displayAvailableRooms() {
  event.preventDefault();
  domUpdates.renderAvailableRooms(guest, bookings, rooms, hotel);
}

function displaySelectedRoom(event) {
  let selectedRoom = parseInt(event.target.closest('button').id);
  let currentRoom = hotel.getRoomDetails(selectedRoom)
  domUpdates.renderSelectedRoom(currentRoom);
}
