import React from 'react'
import LoginForm from '../Components/LoginForm'

const Login = () => {
  return (
    <div className='h-screen w-full flex justify-between container m-auto items-center'>
        <LoginForm/>
        <h1 className='text-5xl font-bold mr-[10%] text-[#3887FE]'>VALUET</h1>
    </div>
  )
}

export default Login