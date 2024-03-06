import { PropsWithChildren } from "react";
import User from "../../models/users";
import SideBar from "../../components/SideBar/SideBar";

interface IProps extends PropsWithChildren {
  selectedUser: User | null,
  setSelectedUser(selectedUser: User): void;
}

const Layout = ({ children, selectedUser, setSelectedUser }: IProps) => {
  return (
    <>
      <SideBar 
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />  
      <div className="grow h-full bg-gradient-to-t from-slate-50 to-white overflow-auto ">
        {children}
      </div>
    </>
  )
}
export default Layout;