import { PropsWithChildren } from "react";
import User from "../../models/users";
import SideBar from "../../components/SideBar/SideBar";

interface IProps extends PropsWithChildren {
  selectedUser: User | null
}

const Layout = ({ children, selectedUser }: IProps) => {
  return (
    <>
      <SideBar 
        selectedUser={selectedUser}
      />  
      <div className="grow h-full">
        {children}
      </div>
    </>
  )
}
export default Layout;