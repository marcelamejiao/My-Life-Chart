
import { useNavigate } from "react-router-dom";
import User from "../../models/users";

type Props = {
  selectedUser: User|null
};

const Dashboard = ({ selectedUser }: Props) => {

  const navigate = useNavigate();

  const navigateToActivities = () => {
    navigate("/activities")
  }

  const navigateToReports = () => {
    navigate("/reports")
  }


  return (
    <div className="p-4">
        <h1 className="text-2xl py-2 animate-pulse text-sky-700 text-center bg-gray-100 font-bold tracking-widest">Welcome {selectedUser?.name}</h1>
        <div className="m-2 w-80 p-2 rounded shadow-md hover:bg-slate-50">
          <div className="p-3">
            <h2 className="text-gray-600 font-semibold text-xl">Activities</h2>
            <p className="p-2 text-gray-500">This section allows you to see a list of your activities.</p>
          </div>
          <div className="flex items-center justify-end">
            <input 
              type="button"
              value="My Activities"
              onClick={navigateToActivities}
              className="w-28 cursor-pointer text-sm rounded-md border border-amber-500 border-b-2 hover:border-b text-amber-500 px-2 py-1 w-30 hover:scale-105 hover:bg-slate-150"
            />
          </div>
        </div>
        <div className="m-2 w-80 p-2 rounded shadow-md hover:bg-slate-50">
          <div className="p-3">
            <h2 className="text-gray-600 font-semibold text-xl">Reports</h2>
            <p className="p-2 text-gray-500">This section allows you to see charts of your activities.</p>
          </div>
          <div className="flex items-center justify-end">
            <input 
              type="button"
              value="My Reports"
              onClick={navigateToReports}
              className="w-28 cursor-pointer text-sm rounded-md border border-amber-500 border-b-2 hover:border-b text-amber-500 px-2 py-1 w-30 hover:scale-105 hover:bg-slate-150"
            />
          </div>
        </div>
    </div>
  );
};

export default Dashboard;
