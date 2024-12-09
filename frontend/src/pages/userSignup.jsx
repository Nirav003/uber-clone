import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { userDataContext } from '../context/UserContext'
const userSignup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const navigate = useNavigate();

    const { user, setUser } = React.useContext(userDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();

        const newUser = {
            fullname: {
                firstname: firstName,
                lastname: lastName,
            },
            email: email,
            password: password
        }

        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

        if (res.status === 201) {
            const data = res.data;

            setUser(data.user);
            localStorage.setItem('token', data.token);

            navigate('/home');
        }

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    }

  return (
    <div className='h-screen flex flex-col justify-between p-7'>
        <div>
            <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber" />
            <form onSubmit={e => submitHandler(e)}>

                <h3 className='text-lg font-medium mb-2'>What's your name</h3>
                <div className='flex gap-4 mb-6'>
                    <input 
                        type="text" 
                        placeholder='firstname' 
                        className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
                        required 
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder='lastname' 
                        className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
                        required 
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                </div>
                
                <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                <input 
                    type="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='email@example.com' 
                    className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                    required 
                />

                <h3 className='text-lg font-medium mb-2'>Enter password</h3>
                <input 
                    type="password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder='password'
                    className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
                    required 
                />
                <button className='bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-sm'>Create account</button>

                <p className='text-center'>Already have a account? <Link to='/login' className='text-blue-600' >Login here</Link></p>

            </form>
        </div>
        <div>
            <p className='text-[12px] leading-tight'>
                This site is protected by reCAPTCHA and the <span className='underline' >Google Policy</span> and <span className='underline'>Terms of service apply</span>. 
            </p>
        </div>
    </div>
  )
}

export default userSignup