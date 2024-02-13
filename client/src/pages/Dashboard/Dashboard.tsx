import User from "../../models/users";

type Props = {
  selectedUser: User|null
};

const Dashboard = ({ selectedUser }: Props) => {
  return (
    <div>
        <h1>Welcome</h1>
        {selectedUser?.name}
    </div>
  );
};

export default Dashboard;
