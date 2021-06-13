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



const postData = () => {
  return fetch(`http://localhost:3001/api/v1/bookings`, {
    method: 'POST',
    body: JSON.stringify(booking),
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then(checkForError)
}

const checkForError = (response) => {
  if(!response.ok) {
    // dom update to show error???
    throw new Error('Something went wrong')
  } else {
    return response.json();
  }
}
