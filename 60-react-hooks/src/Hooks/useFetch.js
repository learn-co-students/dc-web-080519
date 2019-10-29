import React, { useState, useEffect } from 'react'

function useFetch(url, initialState){

  // let URL = 'http://localhost:3000/tasks'

  const [ data, setData ] = useState([])

  useEffect(() => {
    fetch(url)
    .then(r => r.json())
    .then(data => setData(data))
  },[])

  return data
}

export { useFetch }
