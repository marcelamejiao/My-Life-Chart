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
      <div className="grow h-full bg-gradient-to-t from-slate-50 to-white overflow-auto ">
        {children}
      </div>
    </>
  )
}
export default Layout;