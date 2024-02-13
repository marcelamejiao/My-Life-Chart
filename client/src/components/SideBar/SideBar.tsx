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
  <div className="h-full w-48 z-10 top-0 left-0 bg-red-50 overflow-x-hidden pt-2">
    <p className="font-title text-2xl">My Life Chart</p>
    <h1>{selectedUser.name}</h1>

    <ul>
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