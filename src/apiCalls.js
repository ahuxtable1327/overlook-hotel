import { loadPageInfo } from './scripts'
import domUpdates from './domUpdates'

const fetchGuestData = () => {
  return fetch('http://localhost:3001/api/v1/customers')
    .then(response => response.json())
    .catch(err => console.error('Something went wrong with customers'))
}

const fetchRoomData = () => {
  return fetch('http://localhost:3001/api/v1/rooms')
    .then(response => response.json())
    .catch(err => console.error('Something went wrong with rooms'))
}

const fetchBookingData = () => {
  return fetch('http://localhost:3001/api/v1/bookings')
    .then(response => response.json())
    .catch(err => console.error('Something went wrong with bookings'))
}

const fetchUser = (id) => {
  return fetch(`http://localhost:3001/api/v1/customers/${id}`)
    .then(response => response.json())
    .catch(err => console.error('Something went wrong with user'))
}

const getData = () => Promise.all([fetchGuestData(), fetchRoomData(), fetchBookingData()]);



const postData = (user, dateSelected, roomNum) => {
  return fetch(`http://localhost:3001/api/v1/bookings`, {
    method: 'POST',
    body: JSON.stringify({
      userID: user.id,
      date: dateSelected,
      roomNumber: roomNum,
    }),
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then(checkForError)
  .then(() => loadPageInfo())
  .catch(domUpdates.displayBookingError())
}

const checkForError = (response) => {
  if(!response.ok) {
    throw new Error('Something went wrong')
  } else {
    domUpdates.displaySuccess();
    return response.json();
  }
}


export default { getData, postData, fetchUser };
