import { SignIn } from '@clerk/clerk-react'
import React from 'react'
import { assets } from "../assets/assets.js"

const LoginPage = () => {
  return (
    <div className='flex items-center justify-center h-[100vh] bg-blue-950'>
        <SignIn signUpUrl='/register' />
    </div>
  )
}

export default LoginPage;
