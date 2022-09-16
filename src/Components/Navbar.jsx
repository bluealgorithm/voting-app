import { async } from '@firebase/util'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { getToken, getUser, removeUserSession } from '../utils/common'
const Navbar = () => {
    const token = getToken()
    const navigate = useNavigate()
    const {user, logout} = UserAuth()
    const handleLogout = async () => {
      const user = getUser()
        try {
            removeUserSession()
            navigate('/signin')
            await logout()
        } catch (error) {
            console.log(error);
        }
    }
  return (
      <div className='flex justify-between bg-gray-200 w-full p-4'>
          <Link to='/' className='text-center text-2xl font-bold'>
              Blue Algorithm Voting App
          </Link>
          {user?.displayName ?
              <button onClick={handleLogout}>Sign Out</button> :
              <Link to='/signin'>Sign In</Link>
          }
          {
              user?.displayName &&
              <Link to='/account'>Account</Link>
          }

    </div>
  )
}

export default Navbar