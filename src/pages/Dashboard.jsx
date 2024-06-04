import { Appbar } from '../components/Appbar'
import { Balance } from '../components/Balance'
import { Users } from '../components/Users'

export const Dashboard = () => {
  return (
    <div className='max-w-[92rem] mx-auto my-44'>
      <div>
        <Appbar />
      </div>
      <div className='px-4 mt-4'>
        <Balance />
        <Users />
      </div>
    </div>
  )
}
