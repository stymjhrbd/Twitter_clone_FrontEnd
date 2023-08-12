import {AiFillHome} from 'react-icons/ai'
import {BsSearch, BsFillPersonFill} from 'react-icons/bs'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {GoVerified} from 'react-icons/go'
import {CiMail, CiViewList, CiCircleMore} from 'react-icons/ci'

export const SidebarOptions = [
    {
        title: "Home", 
        Icon: AiFillHome,
    },
    {
        title: "Explore", 
        Icon: BsSearch,
    },
    {
        title: "Notifications", 
        Icon: IoMdNotificationsOutline,
    },
    {
        title: "Messages", 
        Icon: CiMail,
    },
    {
        title: "Lists", 
        Icon: CiViewList,
    },
    {
        title: "Communities", 
        Icon: BsFillPersonFill,
    },
    {
        title: "Verified", 
        Icon: GoVerified,
    },
    {
        title: "Profile", 
        Icon: BsFillPersonFill,
    },
    {
        title: "More", 
        Icon: CiCircleMore,
    },
]