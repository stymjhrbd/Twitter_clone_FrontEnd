import React, { useEffect, useState } from 'react'
import { SidebarOptions } from '../constants'
import images from '../assets'
import ProfileObj from './ProfileObj'
import { useNavigate } from 'react-router-dom'
const { twitterWhiteLogo } = images

const MobileButtonLogo = () => (<svg viewBox="0 0 24 24" aria-hidden="true" class="r-jwli3a r-4qtqp9 r-yyyyoo r-1472mwg r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"><g><path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path></g></svg>)


const Sidebar = () => {
  const [selected, setSelected] = useState("home")
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  useEffect(() => {
    const fetchUser = () => {
      const userObj = localStorage.getItem('user');
      setUser(JSON.parse(userObj));
    }
    fetchUser()
  }, [])
  return (
    <div className='flex w-fit flex-col items-start justify-center'>
      <div className="flex justify-start p-3 "><a href='/'><img className="w-6 h-6 cursor-pointer" src={twitterWhiteLogo} alt="twitter_logo" /></a></div>
      <ul className='flex flex-col'>
        {SidebarOptions.map(option => (
          <li key={option.title} className={`flex justify-start p-3 items-center cursor-pointer ${selected === option.title.toLowerCase() ? 'text-2xl font-extrabold' : 'text-normal text-xl  hover:bg-slate-500 active:bg-slate-500 focus:outline-1 focus:ring focus:ring-violet-300 rounded-3xl'}`} onClick={() => setSelected(option.title.toLowerCase())}>
            <option.Icon className='text-white sm:h-7 sm:w-7 mr-2 text-center' />
            <span className='text-white font-semibold'>{option.title}</span>
          </li>
        ))}
      </ul>
      <button className='w-[220px] mt-2 rounded-full bg-[#1D9BF0] font-bold text-xl'>Post</button>

      {user && <ProfileObj name={user.name} picture={user.picture} />}
    </div>
  )
}

export default Sidebar
