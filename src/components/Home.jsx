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
    <div className="flex flex-auto border-[0.2px] border-slate-300">
      <div className="flex-none w-1/4 p-3 border-[0.2px] border-slate-300">
        <Sidebar />
      </div>
      <div className="w-1/2 border-[0.2px] border-slate-300">
        <Navbar />
      </div>
      <div className="flex-end w-1/4 p-3 border-[0.2px] border-slate-300s">
        <RightSideBar />
      </div>

    </div>
  )
}

export default Home
