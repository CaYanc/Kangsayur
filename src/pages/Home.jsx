import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <p>Home</p>
      <div>
        <Link to="/Login">login</Link>
      </div>
    </div>
  )
}

export default Home