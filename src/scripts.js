// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import './css/base.scss';
import './images/room.jpg'
import Hotel from './classes/Hotel'
import Guest from './classes/Guest'
import Booking from './classes/Booking'
import Room from './classes/Room'
import domUpdates from './domUpdates'
import apiCalls from './apiCalls'
// import postData from './apiCalls'

let dayjs = require('dayjs');

let guest, room, booking, hotel;
let guestData, rooms, bookings;

const bookStay = document.getElementById('bookStay');
const checkAvailability = document.getElementById('checkAvailability');
const availableCards = document.getElementById('availableCards');
const selectedRoom = document.getElementById('selectedRoom');
const bookedRoom = document.getElementById('bookedRoom');


window.addEventListener('load', loadPageInfo);
bookStay.addEventListener('click', displayBookingPage)
checkAvailability.addEventListener('click', displayAvailableRooms)
availableCards.addEventListener('click', function() {
  displaySelectedRoom(event);
})
selectedRoom.addEventListener('click', function() {
  addNewBooking(event);
})


export function loadPageInfo(){
  apiCalls.getData()
    .then(response => {
      guestData = response[0].customers;
      rooms = response[1].rooms;
      bookings = response[2].bookings;
      guest = new Guest(guestData[5]);
      hotel = new Hotel(rooms, bookings)
      domUpdates.displayGuestDashboard(guest, rooms, bookings, hotel)
      console.log(bookings, 'inside')
    })
    console.log(bookings, 'outside')

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

function addNewBooking(event) {
  if (event.target.className === 'book-room-btn'){
    const user = guest
    const dateSelected = dayjs(arrivalDate.value).format('YYYY/MM/DD');
    const roomNum = parseInt(event.target.id)

    apiCalls.postData(user, dateSelected, roomNum)
    }
  }
