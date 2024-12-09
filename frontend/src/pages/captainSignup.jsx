import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios';

const captainSignup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');

    const {captain, setCaptain} = React.useContext(CaptainDataContext);

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        const captainData = {
            fullname: {
                firstname: firstName,
                lastname: lastName,
            },
            email: email,
            password: password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType,
            }
        }

        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

        if(res.status === 201) {
            const data = res.data;
            setCaptain(data.captain);
            localStorage.setItem('token', data.token);
            navigate('/captain-home');
        }

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setVehicleColor('');
        setVehiclePlate('');
        setVehicleCapacity('');
        setVehicleType('');

    }

  return (
    <div className='h-screen flex flex-col justify-between px-5 py-5'>
        <div>
        <img className='w-16 mb-5' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="Uber" />
            <form onSubmit={e => submitHandler(e)}>

                <h3 className='text-lg font-medium mb-2'>What's our Captain's name</h3>
                <div className='flex gap-4 mb-6'>
                    <input 
                        type="text" 
                        placeholder='firstname' 
                        className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                        required 
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder='lastname' 
                        className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                        required 
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                </div>
                
                <h3 className='text-lg font-medium mb-2'>What's our Captain's email</h3>
                <input 
                    type="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='email@example.com' 
                    className='bg-[#eeeeee] mb-6 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
                    required 
                />

                <h3 className='text-lg font-medium mb-2'>Enter password</h3>
                <input 
                    type="password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder='password'
                    className='bg-[#eeeeee] mb-6 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base' 
                    required 
                />

                <h3 className='text-lg font-medium mb-2'>Vehicle's Information</h3>
                <div className='flex gap-4 mb-6'>
                    <input 
                        type="text" 
                        placeholder='Vehicle Color' 
                        className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                        required 
                        value={vehicleColor}
                        onChange={e => setVehicleColor(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder='Vehicle Plate' 
                        className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                        required 
                        value={vehiclePlate}
                        onChange={e => setVehiclePlate(e.target.value)}
                    />
                </div>
                <div className='flex gap-4 mb-6'>
                    <input 
                        type="number" 
                        placeholder='Vehicle Capacity' 
                        className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                        required 
                        value={vehicleCapacity}
                        onChange={e => setVehicleCapacity(e.target.value)}
                    />
                    <select 
                        className='bg-[#eeeeee] w-1/2 rounded-lg-lg px-4 py-2 border text-lg placeholder:text-base'
                        required 
                        value={vehicleType}
                        onChange={e => setVehicleType(e.target.value)}
                    >
                        <option value="" disabled>Select Vehicle Type</option>
                        <option value="car">Car</option>
                        <option value="auto">Auto</option>
                        <option value="moto">Moto</option>
                    </select>
                </div>

                <button className='bg-[#111] text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-sm'>Create Captain Account</button>

                <p className='text-center'>Already have a account? <Link to='/captain-login' className='text-blue-600' >Login here</Link></p>

            </form>
        </div>
        <div>
            <p className='text-[10px] leading-tight'>
                This site is protected by reCAPTCHA and the <span className='underline' >Google Policy and <span className='underline'>Terms of service apply</span>.</span> 
            </p>
        </div>
    </div>
  )
}

export default captainSignup