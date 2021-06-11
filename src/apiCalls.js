const fetchData = (type) => {
  return fetch(`http://localhost:3001/api/v1/${type}`)
    .then(response => response.json())
    .catch(err => console.error('err'))
}



const postData = (booking) => {
  return fetch(`http://localhost:3001/api/v1/${booking}`, {
    method: 'POST',
    body: JSON.stringify(booking),
    headers: {
      'Content-type': 'application/json'
    }
  })
}

export default fetchData;
export default postData;
