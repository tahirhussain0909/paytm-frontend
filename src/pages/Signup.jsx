import { useState } from 'react'
import axios from 'axios'

import BottomWarning from '../components/BottomWarning'
import Button from '../components/Button'
import Heading from '../components/Heading'
import InputBox from '../components/InputBox'
import SubHeading from '../components/SubHeading'
import { useNavigate } from 'react-router-dom'

export const Signup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
      <div className='flex flex-col justify-center'>
        <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
          <Heading label={'Sign up'} />
          <SubHeading label={'Enter your information to create an account'} />
          <InputBox onChange={e => { setFirstName(e.target.value)}} label={'First Name'} placeholder={'John'} />
          <InputBox onChange={e => { setLastName(e.target.value)}} label={'Last Name'} placeholder={'Wick'} />
          <InputBox onChange={e => { setUsername(e.target.value)}} label={'Email'} placeholder={'example@gmail.com'} />
          <InputBox onChange={e => { setPassword(e.target.value)}} label={'Password'} placeholder={'123456'} />
          <div className='pt-4'>
            <Button onClick={async () => {
                const response = await axios.post('https://paytm-backend-five.vercel.app/api/v1/user/signup', {
                  firstName,
                  lastName,
                  username,
                  password
                })
                localStorage.setItem('token', response.data.token)
                navigate('/dashboard')
                // localStorage.removeItem('token')
              }} label={'Sign up'} />
          </div>
          <BottomWarning label={'Already have an account'} buttonText={'Sign In'} to={'/signin'} />
        </div>
      </div>
    </div>
  )
}
