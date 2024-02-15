
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

  return (
    <div className="p-4">
        <h1 className="text-xl py-2">Welcome {selectedUser?.name}</h1>
        <div className="w-80 p-2 rounded border border-solid border-gray-200 shadow-md shadow-gray-400">
          <div className="p-3">
            <h2>Activities</h2>
            <p>This section allows you to see a list of your activities.</p>
          </div>
          <div>
            <button 
              onClick={navigateToActivities}
              className="cursor-pointer rounded-md  bg-amber-500 hover:bg-lime-500 text-white p-2 w-30">
              My Activities
            </button>
          </div>
        </div>
    </div>
  );
};

export default Dashboard;
