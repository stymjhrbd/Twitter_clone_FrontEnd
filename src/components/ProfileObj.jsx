import { googleLogout } from '@react-oauth/google';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProfileObj = ({ name, picture }) => {
    const navigate = useNavigate()
    const handleLogout = () => {
        googleLogout();
        localStorage.removeItem('user');
        navigate('/signin')
    }
    return (
        <div className='flex gap-2 mt-8 w-full'>
            <img className="w-12 h-12 rounded-full" src={picture} alt="profile-pic" />
            <button onClick={handleLogout} className='flex rounded-full bg-red-500 text-gray-50 font-semibold text-lg w-28 items-center justify-center h-12 '>Logout</button>
        </div>
    )
}

export default ProfileObj
