import { Appbar } from '../components/Appbar'
import { Balance } from '../components/Balance'
import { Users } from '../components/Users'

export const Dashboard = () => {
  return (
    <div className=''>
      <div>
        <Appbar />
      </div>
      <div className='px-8 mt-10'>
        <Balance />
        <Users  />
      </div>
    </div>
  )
}
