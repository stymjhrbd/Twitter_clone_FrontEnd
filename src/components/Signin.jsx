import React from 'react'
import jwt_decode from 'jwt-decode';
import { GoogleLogin} from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
const SignIn = ({ handleAuthSuccess }) => {
    return (<GoogleLogin
        onSuccess={handleAuthSuccess}
        onError={() => {
            console.log('Login Failed');
        }}
    />)
}
const Signin = () => {
    const navigate = useNavigate();
    const handleAuthSuccess = (res) => {
        const userRes = jwt_decode(res.credential);
        const user = {
            name: userRes.name,
            email: userRes.email,
            picture: userRes.picture
        }
        // console.log(userRes)
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/')
    }
    return (
        <div className='text-white w-full h-full flex items-center justify-center'>
            <SignIn handleAuthSuccess={handleAuthSuccess}/>

        </div>
    )
}

export default Signin
