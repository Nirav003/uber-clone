import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'

const captainLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {captain, setCaptain} = React.useContext(CaptainDataContext);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        const captain = {
            email: email,
            password: password
        }

        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);

        if (res.status === 200) {
            const data = res.data;
            setCaptain(data.captain);
            localStorage.setItem('token', data.token)
            navigate('/captain-home');
        }
        
        setEmail('');
        setPassword('');
    }

  return (
    <div className='h-screen flex flex-col justify-between p-7'>
        <div>
            <img className='w-20 mb-5' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="Uber" />
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

                <p className='text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-600' >Register as a Captain</Link></p>

            </form>
        </div>
        <div>
            <Link 
                to='/login'
                className='flex items-center justify-center bg-[#d5622d] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
            >
                Sign in as User
            </Link>
        </div>
    </div>
  )
}

export default captainLogin