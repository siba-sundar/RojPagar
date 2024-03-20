import { useState } from 'react'
import './App.css'
import JobCard from "./components/listingPage/jobCard.jsx"

function App() {
  const [count, setCount] = useState(0)

  const detail=[
    {
        'img': '',
        'username': 'Ram' ,
        'address' : 'dfsgh',
        'district' : 'dsfgn',
        'job' : 'dsgfdh',
        'jobDescription' :'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure esse sapiente perspiciatis possimus reiciendis asperiores enim explicabo dolore ad odit sunt, voluptatum minus natus ipsa. Odio amet magni nesciunt placeat?' ,
        'location' : 'gfh',
        'salary' : 'dfsghn',
        'duraton' : 'sfdgh',
    },
    {
      'img': '',
      'username': 'Ram' ,
      'address' : 'dfsgh',
      'district' : 'dsfgn',
      'job' : 'dsgfdh',
      'jobDescription' :'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure esse sapiente perspiciatis possimus reiciendis asperiores enim explicabo dolore ad odit sunt, voluptatum minus natus ipsa. Odio amet magni nesciunt placeat?' ,
      'location' : 'gfh',
      'salary' : 'dfsghn',
      'duraton' : 'sfdgh',
  },
  {
    'img': '',
    'username': 'Ram' ,
    'address' : 'dfsgh',
    'district' : 'dsfgn',
    'job' : 'dsgfdh',
    'jobDescription' :'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure esse sapiente perspiciatis possimus reiciendis asperiores enim explicabo dolore ad odit sunt, voluptatum minus natus ipsa. Odio amet magni nesciunt placeat?' ,
    'location' : 'gfh',
    'salary' : 'dfsghn',
    'duraton' : 'sfdgh',
  },
]

  return (
    <>
      <JobCard details={detail}/>
    </>
  )
}

export default App
