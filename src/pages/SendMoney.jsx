import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import Heading from '../components/Heading'
import InputBox from '../components/InputBox'

export const SendMoney = () => {
  const [searchParams] = useSearchParams()
  const [amount, setAmount] = useState(0)

  const id = searchParams.get('id')
  const name = searchParams.get('name')

  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
      <div className='flex flex-col justify-center'>
        <div className='shadow-xl rounded-lg bg-white w-[24rem] border text-center p-8 h-max'>
          <Heading label={'Send Money'} />
          <div className='mt-16'>
            <div className='flex space-x-4'>
              <div className='rounded-full h-12 w-12 bg-green-500 flex justify-center mt-1'>
                <div className='flex flex-col justify-center h-full text-white text-xl cursor-pointer'>
                  {name[0].toUpperCase()}
                </div>
              </div>
              <div className='font-semibold text-2xl mt-2'>{name}</div>
            </div>
            <InputBox
              onChange={(e) => {
                setAmount(e.target.value)
              }}
              label={'Amount (in Rs)'}
              placeholder={'Enter Amount'}
            />
            <button
              onClick={async () => {
                await axios.post(
                  'https://paytm-backend-five.vercel.app/api/v1/account/transfer',
                  {
                    amount: amount,
                    to: id,
                  },
                  {
                    headers: {
                      Authorization: localStorage.getItem('token'),
                    },
                  }
                )
              }}
              className='justify-center mt-4 rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white'
            >
              Initiate Transfer
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
