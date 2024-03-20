import { useState } from 'react'
import './App.css'
import JobCard from "./components/listingPage/jobCard.jsx"
import ProfileCardrofileCard from './components/listingPage/profileCard.jsx';

function App() {
  const [count, setCount] = useState(0)

  const details = [
    {
      "img": "",
      'username':'sadfgdhj',
      'userarea':'sadfg',
      'userdistrict':'werth',
      'description':'gdfgrg',
    },
    {
      "img": "",
      'username':'sadfgdhj',
      'userarea':'sadfg',
      'userdistrict':'werth',
      'description':'gdfgrg',
    },
    {
      "img": "",
      'username':'sadfgdhj',
      'userarea':'sadfg',
      'userdistrict':'werth',
      'description':'gdfgrg',
    },
    {
      "img": "",
      'username':'sadfgdhj',
      'userarea':'sadfg',
      'userdistrict':'werth',
      'description':'gdfgrg',
    },
  ]

  return (
    <>
      <ProfileCardrofileCard detail={details}/>
    </>
  )
}

export default App
