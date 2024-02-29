import { useNavigate } from "react-router-dom";
import User from "../../models/users";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faChartSimple }from '@fortawesome/free-solid-svg-icons';

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
        <div className="ml-6 my-4 w-80 p-2 rounded shadow-md hover:bg-slate-100">
          <div className="p-3">
            <h2 className="text-gray-600  font-semibold text-xl"><FontAwesomeIcon icon={faMedal} className="px-2 text-amber-500" />Activities</h2>
            <p className="px-4 py-2 text-gray-500 text-sm">This section allows you to see a list of your activities.</p>
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
        <div className="ml-6 my-4 w-80 p-2 rounded shadow-md hover:bg-slate-100">
          <div className="p-3">
            <h2 className="text-gray-600 font-semibold text-xl"><FontAwesomeIcon icon={faChartSimple} className="px-2 text-amber-500" />Reports</h2>
            <p className="px-4 py-2 text-gray-500 text-sm">This section allows you to see charts of your activities.</p>
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
