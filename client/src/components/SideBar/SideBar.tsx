import User from "../../models/users";
import HoverableNavLink from "../HoverableNavLink/HoverableNavLink";

type Props = {
  selectedUser: User | null
}

const SideBar = ({ selectedUser }:Props) => {

  // For TypeScript requirements
  if(!selectedUser) {
    return ;
  }

  return (    
  <div className="h-full w-48 z-10 top-0 left-0 text-white bg-sky-800 overflow-x-hidden pt-2">
    <p className="font-title text-2xl tracking-wide p-2">My Life Chart</p>
    <h1 className="p-2 text-xl tracking-wide bg-white text-lime-500 mx-2 my-3 rounded text-center font-bold shadow-m shadow-black border border-gray-400 border-dashed" >{selectedUser.name}</h1>

    <ul className="flex justify-end pr-2">
      <li>
        <HoverableNavLink
            pathName="/form"
            linkText="Create Activity">
        </HoverableNavLink>
      </li>
    </ul>
  </div>

  )
}

export default SideBar;