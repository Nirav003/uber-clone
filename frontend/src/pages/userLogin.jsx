import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const userLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [userData, setUserData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();

        setUserData({
            email: email,
            password: password
        })
        
        setEmail('');
        setPassword('');
    }

  return (
    <div className='h-screen flex flex-col justify-between p-7'>
        <div>
            <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber" />
            <form onSubmit={e => submitHandler(e)}>
                <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                <input 
                    type="email" 
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    placeholder='email@example.com' 
                    className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                    required 
                />

                <h3 className='text-lg font-medium mb-2'>Enter password</h3>
                <input 
                    type="password" 
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    placeholder='password'
                    className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
                    required 
                />
                <button className='bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>

                <p className='text-center'>New here? <Link to='/signup' className='text-blue-600' >Create new Account</Link></p>

            </form>
        </div>
        <div>
            <Link 
                to='/captain-login'
                className='flex items-center justify-center bg-[#10b461] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
            >
                Sign in as captain
            </Link>
        </div>
    </div>
  )
}

export default userLogin