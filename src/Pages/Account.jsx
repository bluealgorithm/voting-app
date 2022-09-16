import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { getToken, getUser, removeUserSession, setUserSession } from '../utils/common'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Categories from './Categories'
const Account = () => {
    const token = getToken()
    const { user, logout } = UserAuth()
        const navigate = useNavigate()
    
const handleLogout = async () => {
    try {
            await logout()
        } catch (error) {
            console.log(error);
    }
    removeUserSession()
    navigate('/signin')
    }
  return (
      <div>
          <h1 className='font-bold text-2xl text-center mt-3'>Welcome back {user?.displayName}</h1>
            <Categories />
          {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  )
}

export default Account