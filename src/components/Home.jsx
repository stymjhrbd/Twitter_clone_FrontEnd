import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigation = useNavigate();
    useEffect(() => {
        if(!window.localStorage.user) navigation('/signin')
    },[])
    return (
    <div className="flex px-10 w-full flex-start items-start">
      <Sidebar />
    </div>
  )
}

export default Home
