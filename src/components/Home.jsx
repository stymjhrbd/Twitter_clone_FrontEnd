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
    <div className="flex flex-auto border-[0.2px] border-slate-600">
      <div className="flex-none w-1/4 p-3 border-[0.1px] border-slate-600">
        <Sidebar />
      </div>
      <div className="w-[700px] border-[0.2px] border-slate-600">
        <Navbar />
      </div>
      <div className="flex-1 w-1/4 p-3 pl-3 border-[0.2px] justify-center border-slate-600">
        <RightSideBar />
      </div>

    </div>
  )
}

export default Home
