import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'
// import Cards from './Cards';
import RightSideBar from './RightSideBar';
import Navbar from './Navbar';

const Home = () => {
  const navigation = useNavigate();
  useEffect(() => {
    if (!window.localStorage.user) navigation('/signin')
  }, [])
  return (
    <div className="flex flex-auto">
      <div className="flex-none w-1/4 p-3">
        <Sidebar />
      </div>
      <div className="w-1/2 p-3">
        <Navbar />
      </div>
      <div className="flex-end w-1/4 p-3">
        <RightSideBar />
      </div>

    </div>
  )
}

export default Home
