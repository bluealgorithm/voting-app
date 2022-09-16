import React, {useEffect} from 'react'
import GoogleButton from 'react-google-button'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'

const Signin = () => {
    const navigate = useNavigate()
    const { googleSignin, user } = UserAuth()
    
    const handleGoogleSignin = async () => {
        try {
            await googleSignin()
        } catch (error) {
            console.log(error);
        }
    }
          navigate('/account')
    // useEffect(() => {
    //     if (user != null) {
    //       navigate('/account')
    //   }
    
    // }, [user])
    
  return (
      <div>
          <h1 className="text-center text-3xl font-bold py-8">Sign In</h1>
          <div className="max-w-[240px] m-auto py-4">
              <GoogleButton onClick={handleGoogleSignin} />
          </div>
    </div>
  )
}

export default Signin