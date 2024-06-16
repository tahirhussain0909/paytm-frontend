import { useState } from 'react'
import axios from 'axios'

import BottomWarning from '../components/BottomWarning'
import Button from '../components/Button'
import Heading from '../components/Heading'
import InputBox from '../components/InputBox'
import SubHeading from '../components/SubHeading'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'

export const Signup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  const handleSignup = async () => {
    setIsLoading(true)
    try {
      const response = await axios.post(
        `${process.env.BACKEND_URL}/api/v1/user/signup`,
        {
          firstName,
          lastName,
          username,
          password,
        }
      )
      localStorage.setItem('token', response.data.token)
      navigate('/dashboard')
    } catch (error) {
      console.error('Error signing up:', error)
      // Handle error appropriately here (e.g., show error message to user)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
      {isLoading && (
        <Spinner />
      )}
      <div className='flex flex-col justify-center'>
        <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
          <Heading label={'Sign up'} />
          <SubHeading label={'Enter your information to create an account'} />
          <InputBox
            onChange={(e) => {
              setFirstName(e.target.value)
            }}
            label={'First Name'}
            placeholder={'John'}
          />
          <InputBox
            onChange={(e) => {
              setLastName(e.target.value)
            }}
            label={'Last Name'}
            placeholder={'Wick'}
          />
          <InputBox
            onChange={(e) => {
              setUsername(e.target.value)
            }}
            label={'Email'}
            placeholder={'example@gmail.com'}
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            label={'Password'}
            placeholder={'123456'}
          />
          <div className='pt-4'>
            <Button
              onClick={handleSignup}
              label={'Sign up'}
              disabled={isLoading}
            />
          </div>
          <BottomWarning
            label={'Already have an account'}
            buttonText={'Sign In'}
            to={'/signin'}
          />
        </div>
      </div>
    </div>
  )
}
