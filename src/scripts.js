// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import './css/styles.scss';
import './images/room.jpg'
import Hotel from './classes/Hotel'
import Guest from './classes/Guest'
import Booking from './classes/Booking'
import Room from './classes/Room'
import domUpdates from './domUpdates'
import apiCalls from './apiCalls'

let dayjs = require('dayjs');

let guest, room, booking, hotel;
let guestData, roomsData, bookingsData;
let rooms, bookings;

const bookStay = document.getElementById('bookStay');
const checkAvailability = document.getElementById('checkAvailability');
const availableCards = document.getElementById('availableCards');
const selectedRoom = document.getElementById('selectedRoom');
const bookedRoom = document.getElementById('bookedRoom');
const form = document.getElementById('calendarForm');
const loginBtn = document.getElementById('loginBtn');
const usernameField = document.getElementById('usernameField');
const passwordField = document.getElementById('passwordField');
const logInView = document.getElementById('logInView');
const mainPage = document.getElementById('main');
const logInForm = document.getElementById('logInForm');
const newUser = document.getElementById('changeUserBtn');
const homeBtn = document.getElementById('goHome');




window.addEventListener('load', loadPageInfo);
bookStay.addEventListener('click', displayBookingPage)
checkAvailability.addEventListener('click', displayAvailableRooms)
availableCards.addEventListener('click', function() {
  displaySelectedRoom(event);
})
selectedRoom.addEventListener('click', function() {
  addNewBooking(event);
  closeSelectedRoom(event);
})
loginBtn.addEventListener('click', logInUser);
newUser.addEventListener('click', changeUser);
homeBtn.addEventListener('click', returnHome);

export function loadPageInfo(){
  apiCalls.getData()
    .then(response => {
      guestData = response[0].customers;
      roomsData = response[1].rooms;
      bookingsData = response[2].bookings;
      instantiateRooms(roomsData);
      instantiateBookings(bookingsData)
      hotel = new Hotel(rooms, bookings)
      domUpdates.displayGuestDashboard(guest, rooms, bookings, hotel)
    })
}

function getUser(customerID){
  apiCalls.fetchUser(customerID)
    .then(response => {
      let currentUser = response
      guest = new Guest(currentUser);
      loadPageInfo();
  })
}

function instantiateRooms(roomsData) {
  rooms = [];
  roomsData.forEach(singleRoom => {
    room = new Room(singleRoom);
    rooms.push(singleRoom);
  })
  return rooms
}

function instantiateBookings(bookingsData) {
  bookings = [];
  bookingsData.forEach(singleBooking => {
    booking = new Booking(singleBooking)
    bookings.push(singleBooking);
  })
  return bookings
}

function displayBookingPage() {
  domUpdates.renderBookingForm();
}

function displayAvailableRooms() {
  event.preventDefault();
  domUpdates.renderAvailableRooms(guest, bookings, rooms, hotel);
  form.reset();
}

function displaySelectedRoom(event) {
  let selectedRoom = parseInt(event.target.closest('button').id);
  let currentRoom = hotel.getRoomDetails(selectedRoom)
  domUpdates.renderSelectedRoom(currentRoom);
}

function closeSelectedRoom(event) {
  if (event.target.className === 'close-selection') {
    selectedRoom.classList.add('hide');
  }
}

function addNewBooking(event) {
  if (event.target.className === 'book-room-btn'){
    const user = guest
    const dateSelected = dayjs(arrivalDate.value).format('YYYY/MM/DD');
    const roomNum = parseInt(event.target.id)

    apiCalls.postData(user, dateSelected, roomNum)
    setTimeout(returnHome, 2000);
    }
  }

function logInUser() {
  let username = usernameField.value
  let password = passwordField.value
  let customerID;

  if(username.startsWith('customer') && password === 'overlook2021'){
     customerID = parseInt(username.split('customer')[1])
  }
  verifyUser(customerID, password);
}

function verifyUser(customerID, password){
  guestData.find(guest => guest.id === customerID)
  if (!guestData.find(guest => guest.id === customerID) ||
    password !== 'overlook2021') {
    domUpdates.displaySignInError();
  } else {
    logIn(customerID);
  }
  logInForm.reset();
}

function logIn(customerID){
  logInView.classList.add('hidden');
  mainPage.classList.remove('hidden');
  getUser(customerID)
}

function changeUser(){
  location.reload();
}

function returnHome(){
  domUpdates.goHome();
  selectedRoom.classList.add('hide');
  loadPageInfo();
}
