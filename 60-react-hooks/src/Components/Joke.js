import React, { useState, useEffect } from 'react'
import { useFetch } from '../Hooks/useFetch'

const Joke = () => {

  // const [joke, setJoke] = useState('')

  // useEffect(() => {
  //   fetchJoke()
  //   console.log('fetching joke...');
  // },[])
  //
  // const fetchJoke = () => {
  //   fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
  //   .then(r => r.json())
  //   .then(data => setJoke(data[0]))
  // }
  const joke = useFetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes', "")

  return(
    <div>
      <h1>Ron Swanson Quote of the Day</h1>
      <div>{joke}</div>
    </div>
  )
}

export default Joke
