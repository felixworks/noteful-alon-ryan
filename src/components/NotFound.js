import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1>We're not sure how you got here but <Link to='/'>Click Here</Link> to go home</h1>
    </div>
  )
}
