import React from 'react'
import LoginSignup from './LoginForm'
import Navbar from './Navbar'

const Form = () => {
  return (
    <div className='max-h-full'>
        <Navbar/>
        <div className='mt-20'>
        <LoginSignup/>
        </div>
    </div>
  )
}

export default Form