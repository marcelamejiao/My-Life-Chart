import { useNavigate } from "react-router-dom";
import User from "../../models/users";
import HoverableNavLink from "../HoverableNavLink/HoverableNavLink";

type Props = {
  selectedUser: User | null
}

const SideBar = ({ selectedUser }:Props) => {
  const navigate = useNavigate();

  // For TypeScript requirements
  if(!selectedUser) {
    return ;
  }

  const navigateToDashboard = () => {
    navigate('/dashboard');
  }

  return (    
  <div className="h-full w-48 z-10 top-0 left-0 text-white bg-sky-800 overflow-x-hidden pt-2">
    <p className="font-title text-2xl tracking-wide p-2 hover:animate-bounce">My Life Chart</p>
    <h1 onClick={navigateToDashboard}
      className="p-1 text-lg tracking-wide hover:scale-105 bg-slate-50 hover:bg-white text-gray-500 font-semibold mx-2 my-3 rounded text-center shadow-sm shadow-black cursor-pointer" >{selectedUser.name}</h1>

    <ul className="flex flex-col items-end gap-2 py-4 pr-2 text-sky-200 bg-sky-700 w-48 shadow-sm shadow-black">
      <li className="hover:text-white hover:translate-x-0.5">
        <HoverableNavLink
            pathName="/form"
            linkText="Create Activity">
        </HoverableNavLink>
      </li>
      <li className="hover:text-white hover:translate-x-0.5">
        <HoverableNavLink
            pathName="/activities"
            linkText="My Activities">
        </HoverableNavLink>
      </li>
      <li className="hover:text-white hover:translate-x-0.5">
        <HoverableNavLink
            pathName="/reports"
            linkText="My Reports">
        </HoverableNavLink>
      </li>
    </ul>
  </div>

  )
}

export default SideBar;